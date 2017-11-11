import { MongoObservable } from 'meteor-rxjs';

import { Message } from '../models/message';

export const Messages = new MongoObservable.Collection<Message>('messages');