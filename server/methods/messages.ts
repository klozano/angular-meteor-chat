import { Meteor } from 'meteor/meteor';

import { Messages } from '../../imports/collections/messages';

Meteor.methods({
  addMessage(content: string, from: string, type: 'MSG' | 'INFO', avatar: string) {
    return Messages.insert({
      from,
      content,
      type,
      avatar
    });
  }
});
