import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = 'https://localhost:4200/api/';
  token: any;

  constructor() { }


}