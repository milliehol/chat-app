export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_MESSAGES = 'SET_MESSAGES';


export function setMessages(messages) {
return (dispatch) => {
    dispatch({ type: 'SET_MESSAGES'})
    fetch(`${API_ROOT}/conversations`).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'SET_MESSAGES', messages: responseJSON.messages })
    })
  }
}


export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    message: message
  };
}
