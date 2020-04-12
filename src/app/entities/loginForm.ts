import { ILogin } from '../login/definitions';
import { compose } from '@rxweb/reactive-form-validators';

export class LoginForm implements ILogin {
    @compose({validators:[]})
    login: string;
    @compose({validators:[]})
    mdp: string;
}