import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-registration-form-student',
  templateUrl: './registration-form-student.page.html',
  styleUrls: ['./registration-form-student.page.scss'],
})
export class RegistrationFormStudentPage implements OnInit {
  registrationForm: FormGroup;
  majorOptions = [
    { value: 'TI', display: 'Teknik Informatika' },
    { value: 'SI', display: 'Sistem Informasi' },
  ];
  genderOptions = [
    { value: 'Laki-laki', display: 'Laki-laki' },
    { value: 'Perempuan', display: 'Perempuan' },
  ];
  religionOptions = [
    { value: 'Islam', display: 'Islam' },
    { value: 'Kristen', display: 'Kristen' },
    { value: 'Katolik', display: 'Katolik' },
    { value: 'Hindu', display: 'Hindu' },
    { value: 'Buddha', display: 'Buddha' },
    { value: 'Konghucu', display: 'Konghucu' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private registrationService: StudentsService
  ) {
    this.registrationForm = this.formBuilder.group({
      major1: ['', Validators.required],
      major2: [''],
      wavePeriod: ['', Validators.required],
      class: ['', Validators.required],
      fullName: ['', Validators.required],
      gender: ['', Validators.required],
      birthPlace: ['', Validators.required],
      birthDate: ['', Validators.required],
      homePhoneAreaCode: [''],
      homePhoneNumber: [''],
      mobileNumber: ['', Validators.required],
      fullAddress: ['', Validators.required],
      subDistrict: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      graduationYear: [''],
      diplomaNumber: [''],
      schoolOrigin: ['', Validators.required],
      religion: ['', Validators.required],
      fatherName: ['', Validators.required],
      fatherAddress: [''],
      fatherOccupation: ['', Validators.required],
      fatherMobileNumber: [''],
      motherName: ['', Validators.required],
      motherAddress: [''],
      motherOccupation: ['', Validators.required],
      motherMobileNumber: [''],
      paymentProof: [null, Validators.required],
      captcha: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.registrationForm.valid) {
      const formValues = this.registrationForm.value;
      const files = {
        skhun: this.registrationForm.get('skhun')?.value,
        diploma: this.registrationForm.get('diploma')?.value,
        ktp: this.registrationForm.get('ktp')?.value,
        kk: this.registrationForm.get('kk')?.value,
        certificate: this.registrationForm.get('certificate')?.value,
      };
      this.registrationService.studentRegisterPmb(formValues, files);
      console.log('Registration successful', formValues);
      this.navCtrl.navigateRoot('/home');
    } else {
      console.error('Form is invalid');
    }
  }


  // Metode untuk me-reload captcha
  reloadCaptcha() {
    // Logika untuk me-reload captcha
    console.log('Captcha reloaded');
  }

  // Metode untuk mencetak formulir
  printForm() {
    window.print();
  }
}
