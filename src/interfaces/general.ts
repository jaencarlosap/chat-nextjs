export type IpropsMessage = {
  id?: string;
  value?: string;
};

export type IMessage = {
  messages: IpropsMessage[];
  handleSend: (value: any) => void;
};
