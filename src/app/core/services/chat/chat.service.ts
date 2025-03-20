import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/enviroment/environment";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  private apiUrl = "http://localhost:3000/chat"; // Backend URL

  constructor(private http: HttpClient) {}

  sendMessage(messages: any[]): Observable<any> {
    return this.http.post<any>( `${environment.apiUrl}chat`, { messages });
  }

  getAssistants(){
    
  }
}
