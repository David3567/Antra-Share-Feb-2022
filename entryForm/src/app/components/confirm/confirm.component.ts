import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppointmentDetails } from 'src/app/model/model';
import { logout } from 'src/app/stateManagement/login.actions';
import { state } from 'src/app/stateManagement/login.selector';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit, OnDestroy {
  patient: AppointmentDetails;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(state).subscribe((patient)=>{
      this.patient = patient;
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(logout());
    console.log("Patient info was cleared");
  }

}
