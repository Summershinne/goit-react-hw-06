import { createSlice } from "@reduxjs/toolkit";

const contactInitialState = {
    items: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },

    ]
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactInitialState,
    reducers: {
        addContact(state, action) {
            state.items = [...state.items, action.payload]
        },
        deletreContact(state, action) {
            const index = state.items.findInndex((item) => item.id === action.payload);
            if (index !== -1) { 
                state.items.slice(index, 1);
            };
        }
    }
});

export const selectContacts = (state) => state.contacts.items;

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;