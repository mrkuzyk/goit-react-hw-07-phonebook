import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import style from './App.module.css';
import { useSelector, useDispatch } from "react-redux";
import {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} from "redux/contactsSlice";
import { filtered } from "redux/searchFilterSlice";
import getVisibleContact from "helpers/getVisibleContact";
import Loader from "./Loader/Loader";

export function App() {
  const dispatch = useDispatch();
  const { data: contacts, error, isLoading } = useGetContactsQuery(); // всі контакти
  const [addContact] = useAddContactMutation(); 
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(state => state.filter);

  const handleAddContact = async ({name, phone} ) => {
    try {
      if (contacts.some(contact => contact.name === name)) { 
        return alert(`${name} is already in contacts`); // якщо в контактах є вже таке ім'я то видає помилку 
      };
      await addContact({name, phone} )
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteContact = (id) => {
    deleteContact(id)
  };

  const searchFilter = e => {
    dispatch(filtered(e.currentTarget.value)) // отримую значення з інпуту і записую його
  };

  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <Filter
        value={filter}
        onChange={searchFilter}
      />
      {error && <h1>{error}</h1>}
      {isLoading && <Loader />}
      {contacts &&
        <ContactList
          contacts={getVisibleContact(filter, contacts)}
          onDeleteContact={handleDeleteContact}
        />
      }
    </div>
  );
};
