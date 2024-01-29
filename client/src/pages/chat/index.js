// client/src/pages/chat/index.js

import styles from "./styles.module.css";
import RoomAndUsersColumn from "./room-and-users";
import MessagesReceived from "./messages";
import SendMessage from "./send-message";

const Chat = ({ username, room, socket }) => {
  const sendMessageProps = {
    socket: socket,
    username: username,
    room: room,
  }

  return (
    <div className={styles.chatContainer}>
      <RoomAndUsersColumn socket={socket} username={username} room={room} />
      <div>
        <MessagesReceived socket={socket} />
        <SendMessage {...sendMessageProps} />
      </div>
    </div>
  );
};

export default Chat;
