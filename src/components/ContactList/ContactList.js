import ContactItem from '../ContactItem/ContactItem';
import s from './ContactList.module.css';
import { useGetContactsQuery, useDeleteContactMutation } from "redux/contactsSlice";
import { useSelector } from "react-redux";
import { getFilter } from 'redux/selectors';
import getVisibleContact from "helpers/getVisibleContact";

const ContactList = ({ onDeleteContact }) => {
    const { data: contacts } = useGetContactsQuery(); // всі контакти
    const [deleteContact] = useDeleteContactMutation();
    const filter = useSelector(getFilter);
    const filteredContacts = getVisibleContact(filter, contacts);

    const handleDeleteContact = (id) => {
        deleteContact(id)
    };
    
    return (
        <ul className={s.list}>
            {filteredContacts.map(({ id, name, phone }) =>
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    phone={phone}
                    onClick={() => handleDeleteContact(id)}
                />
            )}
        </ul>
    );
};

export default ContactList;