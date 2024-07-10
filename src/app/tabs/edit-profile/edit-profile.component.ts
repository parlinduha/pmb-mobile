import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  url: any;
  file: any;
  activeUser: any;
  formGroup: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private studentsService: StudentsService
  ) {
    const localStorages = localStorage.getItem('userActive');
    this.activeUser = localStorages ? JSON.parse(localStorages) : {};
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl(this.activeUser.name, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      homeAddress: new FormControl(this.activeUser.homeAddress, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      avatar: new FormControl(this.activeUser.avatar, {
        updateOn: 'change',
      }),
      bornDate: new FormControl(this.activeUser.bornDate, {
        updateOn: 'change',
      }),
      email: new FormControl(this.activeUser.email, {
        updateOn: 'change',
        validators: [Validators.email],
      }),
      genderOption: new FormControl(this.activeUser.genderOption, {
        updateOn: 'change',
      }),
      password: new FormControl(this.activeUser.password, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)],
      }),
      religionOption: new FormControl(this.activeUser.religionOption, {
        updateOn: 'change',
      }),
      whatsappNumber: new FormControl(this.activeUser.whatsappNumber, {
        updateOn: 'change',
      }),
      workStatus: new FormControl(this.activeUser.workStatus, {
        updateOn: 'change',
      }),
    });
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
    setTimeout(() => {
      this.formGroup.reset();
    }, 500);
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
      this.file = event.target.files[0];
    }
    console.log(this.file);
  }

  onSubmit() {
    if (!this.formGroup.valid) {
      return;
    }

    const user = {
      ...this.activeUser,
      name: this.formGroup.value.name,
      homeAddress: this.formGroup.value.homeAddress,
      avatar: this.url || this.formGroup.value.avatar || '',
      bornDate: this.formGroup.value.bornDate,
      email: this.formGroup.value.email,
      genderOption: this.formGroup.value.genderOption,
      password: this.formGroup.value.password,
      religionOption: this.formGroup.value.religionOption,
      whatsappNumber: this.formGroup.value.whatsappNumber,
      workStatus: this.formGroup.value.workStatus,
    };

    this.studentsService.studentUpdate(user);
    localStorage.setItem('userActive', JSON.stringify(user));

    this.modalCtrl.dismiss(null, 'confirm');
    setTimeout(() => {
      this.formGroup.reset();
    }, 500);
  }
}
