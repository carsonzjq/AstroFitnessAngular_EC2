import { Gym } from './gym';

export class Client {
	constructor(
		public fname?: string,
		public lname?: string,
		public address?: string,
		public email?: string,
		public password?: string,
		public confirm?: string,
		public client_gym?: Gym
		) {  }
}
