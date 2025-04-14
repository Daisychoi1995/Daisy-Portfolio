export interface Message extends MessageData {
  id: number;
}

export interface MessageData {
  name:        string;
  description: string;
  contact:     string;
  createdAt:   Date;
}