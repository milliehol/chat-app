export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_MESSAGES = 'SET_MESSAGES';


export function setMessages(messages) {
return (dispatch) => {
    dispatch({ type: 'SET_MESSAGES'})
    fetch(`${API_ROOT}/messages`).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'SET_MESSAGES', messages: responseJSON.messages })
    })
  }
}

export function addMessage(message) {
    dispatch({ type: 'ADD_MESSAGE'})
    fetch(`${API_ROOT}/conversations`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(message)
    });
    dispatch({ message: '' });
  }
}
