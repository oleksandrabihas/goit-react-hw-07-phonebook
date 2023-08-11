import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';
import toast, { Toaster } from 'react-hot-toast';
import { Contact } from 'components/Contact/Contact';
import { ContactsList } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const notify = () =>
    toast.error('Contact was successfully deleted from your contacts list.', {
      duration: 2000,
      position: 'top-right',
    });

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    notify();
  };

  return (
    <ContactsList>
      <Toaster />
      <Contact
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </ContactsList>
  );
};
