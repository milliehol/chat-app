import React from 'react';
import NewMessageForm from './newMessageForm';

const MessageArea = ({
  conversation: { id, title, messages },
}) => {
  return (
    <div className="messageArea">
      <h2>{title}</h2>
      <p>{(messages)}</p>
      <NewMessageForm conversation_id={id} />
    </div>
  );
};

export default MessageArea;

// helpers

const orderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );
  return sortedMessages.map(message => {
    return <p key={message.id}>{message.text}</p>;
  });
};
