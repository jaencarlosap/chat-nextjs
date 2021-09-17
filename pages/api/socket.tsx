import { httpServer, PORT } from 'socket';

export default function handler(_, res) {
  try {
    httpServer.listen(PORT);
  } catch (error) {}

  res.end(`server socket runing on port ${PORT}`);
}
