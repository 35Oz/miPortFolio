import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";

import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class InterceptorService {
    constructor(){}
}

export const interceptorProvider = [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
}];
