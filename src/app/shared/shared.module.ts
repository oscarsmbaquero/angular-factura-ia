import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingComponent } from './loading/loading.component';
import { LoadinTwoComponent } from './loading-two/loadin-two.component';


@NgModule({
  declarations: [
    LoadingComponent,
    LoadinTwoComponent
  ],
  imports: [
   
    
  ],
  exports:[
    LoadingComponent,
    LoadinTwoComponent
  ],
  providers: [],
  
})
export class SharedModule { }
