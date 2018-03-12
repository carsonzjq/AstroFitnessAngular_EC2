export class Appointment {
    constructor(
		public appointment_id?: number,
        public client_name?: string,
        public trainer_name?: string,
		public hour?: number,
		public day?: string
		){}
}