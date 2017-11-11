import { Meteor } from 'meteor/meteor';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import * as randomName from 'random-name';

import { MeteorObservable } from 'meteor-rxjs';
import { Observable, Subscription } from 'rxjs';

import { Messages } from '../../../../imports/collections/messages';
import { Message } from '../../../../imports/models/message';

import './chat-room.component.css'

@Component({
  selector: 'chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent {
  
  user: any;
  messageContent: string;
  AVATAR_URL = 'https://api.adorable.io/avatars/285';

  messageSubscription: Subscription;
  messages: Observable<Message[]>;

  constructor() { }

  ngOnInit(): void {
    this.initModel();;
  }

  private initModel(): void {
    const randomId = this.getRandomId();
    const name = randomName();
    this.user = {
      id: randomId,
      avatar: `${this.AVATAR_URL}/${randomId}.png`,
      name
    };

    this.messageSubscription = MeteorObservable.subscribe('Messages.all').subscribe(() => {
      this.messages = Messages.find();
      Meteor.call('addMessage', `${name} has been joined the chat`, name, 'INFO');
    });

  }

  private getRandomId(): number {
    return Math.floor(Math.random() * (1000000)) + 1;
  }

  public sendMessage(message: string): void {
    if (!message) {
      return;
    }
    const { name, avatar } = this.user;
    Meteor.call('addMessage', message, name, 'MSG', avatar);
    this.messageContent = null;
  }

}
