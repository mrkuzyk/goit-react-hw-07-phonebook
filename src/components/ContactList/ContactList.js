import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem'
import s from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact}) => {
    return (
        <ul className={s.list}>
            {contacts.map(({ id, name, phone }) =>
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    phone={phone}
                    onClick={() => onDeleteContact(id)}
                />
            )}
        </ul>
    );
};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired
};