import { Gym } from './gym';

export class Appointment {
	constructor(
		public client_id?: number,
		public trainer_id?: number,
		public hour?: number
		) {  }
}