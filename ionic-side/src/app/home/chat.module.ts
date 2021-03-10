import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ChatPage } from './chat.page';

import { ChatPageRoutingModule } from './chat-routing.module';
import { AutosizeModule } from 'ngx-autosize';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule,
    AutosizeModule
  ],
  declarations: [ChatPage]
})
export class ChatPageModule {}
