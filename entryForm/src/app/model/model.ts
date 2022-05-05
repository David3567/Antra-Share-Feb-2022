export interface UserInput {
    DOB: string;
    zipCode: number;
}

export interface AppointmentDetails {
    address?: string;
    appointmentDateTime: string;
    appointmentType?: string;
    city?: string;
    clinicId?: number;
    email?: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    state?: string;
    zipCode: number;
    DOB: string;
}