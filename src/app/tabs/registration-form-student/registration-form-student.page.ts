import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonFileService } from '../../service/json/json-file.service';

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
  gelOptions = [
    { value: 'gelombang 1', display: 'Gelombang I' },
    { value: 'gelombang 2', display: 'Gelombang II' },
  ];
  classOptions = [
    { value: 'pagi', display: 'Kelas pagi' },
    { value: 'malam', display: 'Kelas malam' },
    { value: 'extension', display: 'Kelas extension' },
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
    private registrationService: JsonFileService
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
    });
  }

  ngOnInit() {
    const userActive = localStorage.getItem('userActive');
    if (userActive) {
      try {
        const data = JSON.parse(userActive);
        const email = data.email;
        this.registrationForm.patchValue({ email: email });
      } catch (err) {
        console.error('Error parsing user data from local storage:', err);
      }
    } else {
      console.error('No user data found in local storage.');
    }
  }

 onSubmit() {
  if (this.registrationForm.valid) {
    const formValues = this.registrationForm.value;
    const files = {
      skhun: this.registrationForm.get('paymentProof')?.value,
      diploma: null,
      ktp: null,
      kk: null,
      certificate: null,
    };
    this.registrationService.studentRegisterPmb(formValues, files).subscribe(
      (response) => {
        console.log('Registration successful', response);
        this.navCtrl.navigateRoot('/tabs/home');
      },
      (error) => {
        console.error('Registration failed', error);
      }
    );
  } else {
    console.error('Form is invalid');
  }
}

}
