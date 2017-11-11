export interface Message {
  _id?: string;
  content: string;
  from: string;
  type: 'MSG'|'INFO';
  avatar: string;
}