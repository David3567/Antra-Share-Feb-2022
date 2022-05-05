import { createReducer, on } from '@ngrx/store';
import { login, logout, updatePatient } from './login.actions';

export const initialState: any = {
    check: {DOB: '', zipCode: 0},
    patient: {
        firstName: '',
        lastName: '',
        DOB: '',
        zipCode: 0,
        appointmentDateTime: '',
    }
};

export const loginReducer = createReducer(
  initialState,
  on(login, (state, user) => {
      return {...state, check: {DOB: user.DOB, zipCode: user.zipCode}}
    }),
  on(updatePatient, (state, patient)=> {
      return {...state, patient: patient}
  }),
  on(logout, () => initialState)
);