import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private emailjsUrl = 'https://api.emailjs.com/api/v1.0/email/send';

  constructor(private http: HttpClient) {}

  sendMessage(data: ContactMessage): Observable<any> {
    // Integración futura con EmailJS
    // const payload = {
    //   service_id: 'default_service',
    //   template_id: 'template_xxx',
    //   user_id: 'user_xxx',
    //   template_params: { ...data }
    // };
    // return this.http.post(this.emailjsUrl, payload);

    return of({ success: true });
  }
}
