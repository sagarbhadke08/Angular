import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'form-registration';
  firstName: string = '';
  lastName: string = '';
  dob: string = '';
  selectedState: string = '';
  selectedGender: string = '';
  states = [
    { name: 'Andhra Pradesh', value: 'AP' },
    { name: 'Arunachal Pradesh', value: 'AR' },
    { name: 'Assam', value: 'AS' },
    { name: 'Bihar', value: 'BR' },
    { name: 'Chhattisgarh', value: 'CG' },
    { name: 'Goa', value: 'GA' },
    { name: 'Gujarat', value: 'GJ' },
    { name: 'Haryana', value: 'HR' },
    { name: 'Himachal Pradesh', value: 'HP' },
    { name: 'Jammu and Kashmir', value: 'JK' },
    { name: 'Jharkhand', value: 'JH' },
    { name: 'Karnataka', value: 'KA' },
    { name: 'Kerala', value: 'KL' },
    { name: 'Madhya Pradesh', value: 'MP' },
    { name: 'Maharashtra', value: 'MH' },
    { name: 'Manipur', value: 'MN' },
    { name: 'Meghalaya', value: 'ML' },
    { name: 'Mizoram', value: 'MZ' },
    { name: 'Nagaland', value: 'NL' },
    { name: 'Odisha', value: 'OD' },
    { name: 'Punjab', value: 'PB' },
    { name: 'Rajasthan', value: 'RJ' },
    { name: 'Sikkim', value: 'SK' },
    { name: 'Tamil Nadu', value: 'TN' },
    { name: 'Telangana', value: 'TG' },
    { name: 'Tripura', value: 'TR' },
    { name: 'Uttar Pradesh', value: 'UP' },
    { name: 'Uttarakhand', value: 'UK' },
    { name: 'West Bengal', value: 'WB' },
  ];
  submitted = false;
  submittedData: {
    firstName: string;
    lastName: string;
    dob: string;

    selectedState: string;
    selectedGender: string;
  }[] = [];

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.submittedData.push({
      firstName: this.firstName,
      lastName: this.lastName,
      dob: this.dob,
      selectedState: this.selectedState,
      selectedGender: this.selectedGender,
    });
    form.reset();
  }
}
