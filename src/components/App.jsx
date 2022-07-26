import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import style from './App.module.css';
import { useGetContactsQuery } from "redux/contactsSlice";
import Loader from "./Loader/Loader";

export function App() {
  const { data: contacts, error, isLoading } = useGetContactsQuery(); // всі контакти

  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {error && <h1>{error}</h1>}
      {isLoading && <Loader />}
      {contacts && <ContactList />}
    </div>
  );
};
