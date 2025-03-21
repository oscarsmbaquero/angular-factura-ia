import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ChatService } from "src/app/core/services/chat/chat.service";
import { ActivatedRoute } from '@angular/router';
import { UsersService } from "src/app/core/services/users/users.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('chatBox') chatBox!: ElementRef;
  messages: any[] = [];
  inputText: string = "";
  chatTipo: string = '';
  userActive: any;
  loading = false;

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.chatTipo = params.get('tipo') || '';
    });
    // Obtener el valor de sessionStorage

    this.usersService.getCurrentUser().subscribe(user => {
      this.userActive = user?.user;
    });


  }
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  // sendMessage() {
  //   this.loading = true;
  //   if (!this.inputText.trim()) return;  
  //   // Agregar el mensaje del usuario al historial
  //   this.messages.push({ role: "user", content: this.inputText });

  //   this.chatService.sendMessage(this.messages, this.chatTipo).subscribe((response) => {
  //     // Verificar si el contenido de la respuesta es válido
  //     if (response && response.content && response.content.length > 0) {
  //       const aiMessage = response.content[0].text.value; // Extraer el mensaje de la respuesta
  //       this.messages.push({ role: "assistant", content: aiMessage });
  //     } else {
  //       console.error("Formato de respuesta inesperado", response);
  //     }
  //   });    
  //   this.inputText = ""; // Limpiar el input después de enviar
  //   this.loading = false;
  //   this.scrollToBottom();
  // }
  sendMessage() {
    if (!this.inputText.trim()) return;
    this.loading = true; // Activamos loading antes de enviar la solicitud
  
    // Agregar el mensaje del usuario al historial
    this.messages.push({ role: "user", content: this.inputText });
  
    this.chatService.sendMessage(this.messages, this.chatTipo).subscribe({
      next: (response) => {
        if (response && response.content && response.content.length > 0) {
          const aiMessage = response.content[0].text.value;
          this.messages.push({ role: "assistant", content: aiMessage });
        } else {
          console.error("Formato de respuesta inesperado", response);
        }
        this.loading = false; // Desactivamos loading solo cuando ya tenemos respuesta
        this.scrollToBottom();
      },
      error: (err) => {
        console.error("Error en la API:", err);
  
        // Si el error es 504 (Gateway Timeout)
        if (err.status === 504) {
          this.messages.push({ role: "assistant", content: "Lo siento, el servidor tardó demasiado en responder. Inténtalo de nuevo más tarde." });
        } else {
          this.messages.push({ role: "assistant", content: "Ocurrió un error inesperado. Por favor, intenta nuevamente." });
        }
  
        this.loading = false; // Desactivamos loading si hay error
        this.scrollToBottom();
      }
    });
  
    this.inputText = ""; // Limpiar el input después de enviar
  }
  


  capitalize(text: string): string {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  private scrollToBottom(): void {
    try {
      this.chatBox.nativeElement.scrollTop = this.chatBox.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error al hacer scroll:', err);
    }
  }
}
