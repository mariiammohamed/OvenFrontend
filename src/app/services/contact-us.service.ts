import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  private apiUrl = "http://127.0.0.1:8000/api/contactUs"
  constructor(private http: HttpClient) { }

  submitDataForm(data:any) : Observable<any>{
    return this.http.post(this.apiUrl, data);
  }
}
