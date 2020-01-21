import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions/cardActions';

class TodoButton extends Component {
  state = {
    formOpen: false,
    text: ''
  };

  openForm = () => {
    this.setState({
      formOpen: true
    });
  };

  closeForm = e => {
    this.setState({
      formOpen: false
    });
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleAddCard = () => {
    const { dispatch, listId } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: '',
        formOpen: false
      });
      dispatch(addCard(listId, text));
    }
  };

  renderForm = () => {
    return (
      <div>
        <textarea
          placeholder='add task...'
          value={this.state.text}
          onChange={this.handleChange}
          style={styles.textarea}
        ></textarea>
        <button onClick={this.handleAddCard} style={styles.button}>
          add
        </button>
        <span
          onClick={this.closeForm}
          style={{ marginLeft: '10px', cursor: 'pointer', color: 'red' }}
        >
          &#10005;
        </span>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.state.formOpen ? (
          this.renderForm()
        ) : (
          <button onClick={this.openForm} style={styles.button}>
            + add another item
          </button>
        )}
      </div>
    );
  }
}

const styles = {
  button: {
    cursor: 'pointer',
    marginLeft: '5px',
    marginBottom: '5px',
    fontSize: '16px'
  },
  textarea: {
    marginLeft: '5px',
    fontSize: '16px'
  }
};

export default connect()(TodoButton);
