import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchChat } from './actions/chat'
import Chat from './components/chat'


class App extends Component {

  componentDidMount() {
    this.props.fetchChat()
  }

  handleLoading = () => {
    console.log(this.props.loading)
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <Chat messages={this.props.messages} />
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Conversations</h1>
        {this.handleLoading()}
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  return {
    messages: state.messages,
    loading: state.loading
  }
}

export default connect(mapDispatchToProps, { fetchChat })(App)
