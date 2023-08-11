import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Wrapper } from 'App.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { Loader } from './Loader/Loader';
import { ErrorNotification } from './Error/Error';

export const App = () => {
  const { isLoading, error } = useSelector(selectContacts);
  return (
    <Wrapper>
      <Loader isLoading={isLoading} />
      <h1>Phonebook</h1>
      <ContactForm />
      {error ? (
        <ErrorNotification error={error} />
      ) : (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </Wrapper>
  );
};
