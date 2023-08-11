export const Contact = ({ contacts, handleDeleteContact }) => {
  return contacts.map(({ id, name, phone }) => {
    return (
      <li key={id}>
        {name}: {phone}
        <button type="button" onClick={() => handleDeleteContact(id)}>
          Delete
        </button>
      </li>
    );
  });
};