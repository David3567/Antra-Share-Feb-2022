import { Injectable } from '@angular/core';
import { AppointmentDetails, UserInput } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  patientList: AppointmentDetails[] = [{
    "firstName": "Amy",
    "lastName": "Joseff",
    "address": "24 Lyons Way",
    "zipCode": 13428,
    "email": "ajoseff0@quantcast.com",
    "phoneNumber": "2883073343",
    "appointmentDateTime": "2021-05-09",
    "DOB": "1966-06-07"
  }, {
    "firstName": "Josiah",
    "lastName": "Fitzsimmons",
    "address": "76 Grim Pass",
    "zipCode": 18126,
    "email": "jfitzsimmons1@geocities.com",
    "phoneNumber": "4073331778",
    "appointmentDateTime": "2021-05-16",
    "DOB": "1959-04-27"
  }, {
    "firstName": "Ardis",
    "lastName": "Stenning",
    "address": "686 Bay Park",
    "zipCode": 17585,
    "email": "astenning2@dyndns.org",
    "phoneNumber": "5383909789",
    "appointmentDateTime": "2021-05-14",
    "DOB": "1982-10-26"
  }, {
    "firstName": "Kelsey",
    "lastName": "MacAirt",
    "address": "457 Monterey Parkway",
    "zipCode": 14396,
    "email": "kmacairt3@economist.com",
    "phoneNumber": "7365497987",
    "appointmentDateTime": "2021-06-30",
    "DOB": "1958-06-07"
  }, {
    "firstName": "Hedvig",
    "lastName": "Astridge",
    "address": "21464 Kinsman Plaza",
    "zipCode": 19598,
    "email": "hastridge4@unc.edu",
    "phoneNumber": "6419058439",
    "appointmentDateTime": "2021-08-26",
    "DOB": "1972-04-04"
  }, {
    "firstName": "Mikaela",
    "lastName": "Winters",
    "address": "4 Melby Crossing",
    "zipCode": 16019,
    "email": "mwinters5@blogs.com",
    "phoneNumber": "2815169216",
    "appointmentDateTime": "2021-06-03",
    "DOB": "1984-10-31"
  }, {
    "firstName": "Shanna",
    "lastName": "Riping",
    "address": "26041 Shasta Drive",
    "zipCode": 18081,
    "email": "sriping6@home.pl",
    "phoneNumber": "2542848109",
    "appointmentDateTime": "2022-03-14",
    "DOB": "1985-12-19"
  }, {
    "firstName": "Edwin",
    "lastName": "Chable",
    "address": "477 Amoth Terrace",
    "zipCode": 12730,
    "email": "echable7@patch.com",
    "phoneNumber": "2286200159",
    "appointmentDateTime": "2022-01-27",
    "DOB": "1995-01-05"
  }, {
    "firstName": "Darcy",
    "lastName": "Warlawe",
    "address": "64481 Pennsylvania Circle",
    "zipCode": 16700,
    "email": "dwarlawe8@virginia.edu",
    "phoneNumber": "1404104505",
    "appointmentDateTime": "2021-06-14",
    "DOB": "1993-11-13"
  }, {
    "firstName": "Mikey",
    "lastName": "Pearn",
    "address": "97238 Milwaukee Place",
    "zipCode": 15419,
    "email": "mpearn9@xinhuanet.com",
    "phoneNumber": "9193668308",
    "appointmentDateTime": "2021-05-12",
    "DOB": "1980-09-04"
  }];

  patients: UserInput[] = this.patientList.map((patient) => {
    return {DOB: patient.DOB, zipCode: patient.zipCode}
  });

  

  constructor() {
    this.patients.push({DOB: '2000-02-20', zipCode: 19112});
    this.patientList.push({
      "firstName": "John",
      "lastName": "Smith",
      "address": "01 Washington Street",
      "zipCode": 19112,
      "email": "example@email.com",
      "phoneNumber": "2152554545",
      "appointmentDateTime": "2022-06-01",
      "DOB": "2000-02-20"
    })
   }

  checkUser(login: UserInput): boolean {
    for (let i =0; i<this.patients.length; i++) {
      if(this.patients[i].zipCode === login.zipCode && login.DOB === this.patients[i].DOB) {
        return true
      }
    }

    return false;
  }

  getPatient(user: UserInput): AppointmentDetails {
    return this.patientList.find((patient)=> user.DOB === patient.DOB && user.zipCode === patient.zipCode);
  }

  
}