import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomChatPage } from './room-chat.page';

const routes: Routes = [
  {
    path: '',
    component: RoomChatPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomChatPageRoutingModule {}
