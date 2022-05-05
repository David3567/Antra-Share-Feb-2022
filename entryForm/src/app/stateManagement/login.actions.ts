import { createAction, props } from '@ngrx/store';
import { AppointmentDetails, UserInput } from '../model/model';

export const login = createAction('login', props<UserInput>());
export const updatePatient = createAction('update', props<AppointmentDetails>());
export const logout = createAction('logout');