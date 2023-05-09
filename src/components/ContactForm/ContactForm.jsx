import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from '../ContactForm/ContactForm.module.css';

class ContactForm extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  nameInputId = nanoid();

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
  };
  handleNumberChange = event => {
    this.setState({ number: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onSubmit(newContact);
    event.target.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const {
      handleSubmit,
      nameInputId,
      name,
      handleNameChange,
      number,
      handleNumberChange,
    } = this;
    return (
      <form onSubmit={handleSubmit} className={css.phonebookForm}>
        <label htmlFor={nameInputId} className={css.nameForm}>
          <h2 className={css.nameTitle}>Name</h2>
          <input
            className={css.inputName}
            type="text"
            name="name"
            id={nameInputId}
            value={name}
            onChange={handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.addForm}>
          <h2 className={css.numberTitle}>Number</h2>
          <input
            className={css.inputNumber}
            type="tel"
            name="number"
            value={number}
            onChange={handleNumberChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.addBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
