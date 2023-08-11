import { Form } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import toast, { Toaster } from 'react-hot-toast';

export const ContactForm = () => {
  const notify = () =>
    toast.success('Contact was successfully added to your contacts list.', {
      duration: 2000,
      position: 'top-right',
    });

  const dispatch = useDispatch();
  const {items} = useSelector(selectContacts);

  const handleAddContact = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;

    const contactExists = items.some(contact => contact.name === name);

    if (contactExists) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      dispatch(addContact({ name, phone }));
      notify();
      form.reset();
    }
  };

  return (
    <>
      <Toaster/>
      <Form onSubmit={handleAddContact}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <input
          id="number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button>Add contact</button>
      </Form>
    </>
  );
};
