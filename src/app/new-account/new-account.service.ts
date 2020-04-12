import { OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL_API } from '../constants';
import { Observable } from 'rxjs';

@Injectable({
    providedIn : 'root'
})
export class NewAccountService implements OnInit {

    readonly NEWACCOUNT_ENDPOINT = "authBDF/newUser";
    constructor(private http: HttpClient) {

    }
    
    ngOnInit(): void {
        
    } 

    newUser(params): Observable<any> {
        return this.http.post<any>(BASE_URL_API + this.NEWACCOUNT_ENDPOINT, {...params, 'niveauAuth' : 1});
    }
}