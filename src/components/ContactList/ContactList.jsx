import { useDispatch, useSelector } from 'react-redux';
import { ContactsList } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';


export const ContactList = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ContactsList>
      {filteredContacts?.map(({ id, name, phone }) => {
        return (
          <li key={id}>
            {name}: {phone}
            <button type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ContactsList>
  );
};

