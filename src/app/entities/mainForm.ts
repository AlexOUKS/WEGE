import { IMainForm } from '../form/definitions';
import { compose, minDate, pattern, date} from "@rxweb/reactive-form-validators";

export class MainForm implements IMainForm {
    @compose({validators:[]})
    nom: string;    
    @compose({validators:[]})
    prenom: string;
    @compose({validators:[]})
    surnom: string;
    @compose({validators:[]})
    dateNaissance: Date;
    @compose({validators:[]})
    email: string;
    @compose({validators:[]})
    filiere: string;
    @compose({validators:[]})
    ville: string;
}
