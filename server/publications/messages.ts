import { Meteor } from 'meteor/meteor';

import { Messages } from '../../imports/collections/messages';

Meteor.publish('Messages.all', function() {
  return Messages.find({});
});
