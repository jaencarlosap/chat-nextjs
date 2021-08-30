export type IpropsMessage = {
  id?: string;
  user: string;
  value?: string;
};

export type IMessage = {
  messages: IpropsMessage[];
  handleSend: (value: any) => void;
};
