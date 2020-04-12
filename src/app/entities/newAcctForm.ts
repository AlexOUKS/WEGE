import { INewAccount } from '../new-account/definitions';
import { compose } from '@rxweb/reactive-form-validators';

export class NewAccountForm implements INewAccount {
    @compose({validators:[]})
    login: string;   
    @compose({validators:[]}) 
    mdp: string;
    @compose({validators:[]})
    email: string;


}