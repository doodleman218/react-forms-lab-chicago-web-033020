import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChar = event => {
    console.log(event)
    this.setState({
      message: event.target.value
    })
  }

  render() {
    // console.log(this.props.maxChars)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={event => this.handleChar(event)} name="message" id="message" />
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
