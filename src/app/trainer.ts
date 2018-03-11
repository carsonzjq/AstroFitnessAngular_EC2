import { Gym } from './gym';

export class Trainer {
	
	constructor(
		public fname?: string,
		public lname?: string,
		public address?: string,
		public email?: string,
		public password?: string,
		public confirm?: string,
		public home_gym?: Gym
		) {  }

}
