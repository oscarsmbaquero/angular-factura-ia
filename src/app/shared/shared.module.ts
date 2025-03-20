import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingComponent } from './loading/loading.component';
import { LoadinTwoComponent } from './loading-two/loadin-two.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LoadingComponent,
    LoadinTwoComponent,
    ChatComponent
  ],
  imports: [
    FormsModule,
    CommonModule
    
  ],
  exports:[
    LoadingComponent,
    LoadinTwoComponent
  ],
  providers: [FormsModule, CommonModule],
  
})
export class SharedModule { }
