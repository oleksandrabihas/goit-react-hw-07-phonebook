import { useDispatch, useSelector } from 'react-redux';
import { ContactsList } from './ContactList.styled';
import { selectContacts, selectError, selectFilter, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';


export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

    const notify = () =>
      toast.error('Contact was successfully deleted from your contacts list.', {
        duration: 2000,
        position: 'top-right',
      });

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts
    .filter(contact => contact.name.toLowerCase().includes(filter))
    .sort((a, b) => a.name.localeCompare(b.name));
  
  const handleDeleteContact = (id) => {
     notify();
     dispatch(deleteContact(id));
  }

  return (
    <ContactsList>
      <Loader/>
      <Toaster/>
      {filteredContacts?.map(({ id, name, phone }) => {
        return (
          <li key={id}>
            {name}: {phone}
            <button type="button" onClick={() => handleDeleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ContactsList>
  );
};
