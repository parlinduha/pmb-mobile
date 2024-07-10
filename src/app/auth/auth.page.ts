import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { JsonFileService } from '../service/json/json-file.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLogin = true;
  isLoading = false;
  formGroup: FormGroup;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router,
    private jsonFileService: JsonFileService
  ) {}

  ngOnInit() {
    this.formGroup = new FormGroup<any>({
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)],
      }),
    });

    const userActiveString = localStorage.getItem('userActive');
    const userActive = userActiveString ? JSON.parse(userActiveString) : null;

    if (userActive && userActive.role === 'admin') {
      this.router.navigateByUrl('/tabs/admin/home');
    } else {
      this.router.navigateByUrl('/tabs/home');
    }
  }

  onSwitchMode() {
    this.isLogin = !this.isLogin;
    this.formGroup.reset();
    if (!this.isLogin) {
      this.formGroup.addControl(
        'name',
        new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required, Validators.minLength(3)],
        })
      );
      this.formGroup.addControl(
        'confirmPassword',
        new FormControl(null, {
          updateOn: 'change',
          validators: [Validators.required, this.matchValues('password')],
        })
      );
    } else {
      this.formGroup.removeControl('name');
      this.formGroup.removeControl('confirmPassword');
    }
  }

  matchValues(matchTo: string) {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const matchToControl = control.parent?.get(matchTo);
      if (matchToControl && matchToControl.value !== control.value) {
        return { notSame: true };
      }
      return null;
    };
  }

  onLogin() {
    this.loadingCtrl.create({
      mode: 'ios',
      keyboardClose: true,
      message: 'Tunggu...',
      spinner: 'circular',
    }).then((loadingEl) => {
      loadingEl.present();

      setTimeout(() => {
        this.isLoading = false;
        const email = this.formGroup.value.email;
        const password = this.formGroup.value.password;

        if (email === 'admin@admin.com' && password === 'password') {
          const adminUser = { email: 'admin@admin.com', name: 'Admin', role: 'admin' };
          localStorage.setItem('userActive', JSON.stringify(adminUser));
          this.router.navigateByUrl('/tabs/admin/home');
        } else {
          const student = this.jsonFileService.getStudentByEmail(email);
          if (student) {
            if (student.email === email && student.password === password) {
              localStorage.setItem('userActive', JSON.stringify(student));
              this.router.navigateByUrl('/tabs/home');
            } else {
              this.showToast('Email atau Password Salah.');
            }
          } else {
            this.showToast('Akun Tidak Ditemukan.');
          }
        }

        loadingEl.dismiss();
      }, 1500);
    });
  }

  onRegister() {
  this.loadingCtrl.create({
    mode: 'ios',
    keyboardClose: true,
    message: 'Tunggu...',
    spinner: 'circular',
  }).then((loadingEl) => {
    loadingEl.present();

    const register = {
      email: this.formGroup.value.email,
      name: this.formGroup.value.name,
      workStatus: '',
      bornDate: '',
      genderOption: '',
      religionOption: '',
      whatsappNumber: '',
      homeAddress: '',
      isRegister: false,
      avatar: '',
      password: this.formGroup.value.password,
      role: 'student',
    };

    this.jsonFileService.registerUser(register).subscribe(
      () => {
        const students = this.jsonFileService.getStudents();
        students.push(register);
        localStorage.setItem('students', JSON.stringify(students));
        localStorage.setItem('userActive', JSON.stringify(register));
        this.router.navigateByUrl('/tabs/home');
        this.formGroup.reset();
        loadingEl.dismiss();
      },
      error => {
        console.error('Registration failed', error);
        this.toastCtrl.create({
          message: 'Registration failed. Please try again.',
          duration: 2000,
          color: 'danger',
          position: 'top',
        }).then(toastEl => {
          toastEl.present();
        });
        loadingEl.dismiss();
      }
    );
  });
}


  private showToast(message: string) {
    this.toastCtrl.create({
      message,
      duration: 2000,
      color: 'danger',
      position: 'top',
    }).then((toastEl) => {
      toastEl.present();
    });
  }
}
