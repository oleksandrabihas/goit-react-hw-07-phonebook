export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilledFetchAllContacts = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
};

export const handleFulfilledAddContact = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(payload);
};
export const handleFulfilledDeleteContact = (state, { payload }) => {
  state.isLoading = false;
  state.items = state.items.filter(contact => contact.id !== payload.id);
};
