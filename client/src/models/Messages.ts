export interface Message extends MessageData {
  id: number;
}

export interface MessageData {
  name:        string;
  description: string;
  contact:     string;
  createdAt:   Date;
}

export interface MessageExample extends MessageExampleData {
  id: number;
}

export interface MessageExampleData {
  name:        string;
  question:    string;
  description: string;
  contact:     string;
  createdAt:   Date;
}