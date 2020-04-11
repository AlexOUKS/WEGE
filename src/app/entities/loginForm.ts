import { ILogin } from '../login/definitions';

export class LoginForm implements ILogin {
    login: string;
    mdp: string;
}