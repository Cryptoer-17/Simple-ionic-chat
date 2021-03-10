import { Component, OnInit } from '@angular/core';

import { Kommunicate } from '@ionic-native/kommunicate/ngx';



@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage implements OnInit {

  constructor(private kommunicate: Kommunicate) { }

  ngOnInit() {
    let conversationObject = {
      'appId' : '<21d9b80abbda89fa7439190c661c26675>' // The [APP_ID](https://dashboard.kommunicate.io/settings/install) obtained from kommunicate dashboard.
    };

    this.kommunicate.conversationBuilder(conversationObject)
    .then((clientChannelKey: any) => console.log("Kommunicate create conversation successful the clientChannelKey is : " + clientChannelKey))
    .catch((error: any) => console.error("Error creating conversation." + error));
  }

}
