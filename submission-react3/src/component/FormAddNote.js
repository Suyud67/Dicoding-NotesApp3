import React from 'react';
import PropTypes from 'prop-types';

class FormAddNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  onChangeDesc(e) {
    this.setState({ body: e.target.value });
  }

  onSubmitForm(e) {
    e.preventDefault();

    this.props.addNote(this.state);
  }

  render() {
    return (
      <>
        <form action="/" method="post" id="formAddNote" onSubmit={this.onSubmitForm}>
          <input type="text" name="noteTitle" id="note-title" placeholder="note title..." onChange={this.onChangeTitle} required />
          <textarea name="descNote" id="desc-note" cols="30" rows="5" placeholder="description about your note..." onChange={this.onChangeDesc} required></textarea>
          <button type="submit" id="btnSubmit">
            submit
          </button>
        </form>
      </>
    );
  }
}

FormAddNote.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default FormAddNote;
