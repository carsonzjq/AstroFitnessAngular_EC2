import { Gym } from './gym';

export class Manager {

	constructor(
		public fname?: string,
		public lname?: string,
		public email?: string,
		public password?: string,
		public gym?: Gym
		){}
}
