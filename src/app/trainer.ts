import { Gym } from './gym';

export class Trainer {
	
	constructor(
		public trainer_id?: number,
		public address?: string,
		public email?: string,
		public fname?: string,
		public lname?: string,
		public password?: string,
		public confirm?: string,
		public home_gym?: Gym
		) {  }

}
