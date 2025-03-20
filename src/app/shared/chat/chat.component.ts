import { Component, OnInit } from "@angular/core";
import { ChatService } from "src/app/core/services/chat/chat.service"; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
})
export class ChatComponent implements OnInit{
  messages: any[] = [];
  inputText: string = "";
  chatTipo: string = '';

  constructor(private chatService: ChatService, private route: ActivatedRoute) {}


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.chatTipo = params.get('tipo') || '';
    });
    console.log(this.chatTipo);
    
  }

  sendMessage() {
    if (!this.inputText.trim()) return;
    this.messages.push({ role: "user", content: this.inputText });
    this.chatService.sendMessage(this.messages).subscribe((response) => {
      this.messages.push(response);
    });
    this.inputText = "";
  }

  capitalize(text: string): string {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
}
