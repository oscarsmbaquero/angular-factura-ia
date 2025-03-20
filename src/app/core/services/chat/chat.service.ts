import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  private apiUrl = "http://localhost:3000/chat"; // Backend URL

  constructor(private http: HttpClient) {}

  sendMessage(messages: any[]): Observable<any> {
    return this.http.post<any>(this.apiUrl, { messages });
  }
}
