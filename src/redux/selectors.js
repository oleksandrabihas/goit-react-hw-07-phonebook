import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const filteredContacts = contacts.items
      .filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
      .toSorted((a, b) => a.name.localeCompare(b.name));
    return filteredContacts;
  }
);
