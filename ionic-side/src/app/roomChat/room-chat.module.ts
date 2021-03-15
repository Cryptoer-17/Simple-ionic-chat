import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RoomChatPage } from './room-chat.page';

import { RoomChatPageRoutingModule } from './room-chat-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomChatPageRoutingModule,
  ],
  declarations: [RoomChatPage]
})
export class RoomChatPageModule {}
