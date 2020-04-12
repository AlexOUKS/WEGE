import { OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL_API } from '../constants';
import { LoginForm } from '../entities/loginForm';
import { Observable } from 'rxjs';

@Injectable({
    providedIn : 'root'
})
export class LoginService implements OnInit {

    readonly LOGIN_ENDPOINT = "authBDF/login";
    constructor(private http: HttpClient) {

    }
    
    ngOnInit(): void {
        
    } 

    login(params): Observable<any> {
        return this.http.post<any>(BASE_URL_API + this.LOGIN_ENDPOINT, params);
    }
}