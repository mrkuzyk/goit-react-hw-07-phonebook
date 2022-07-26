import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, phone, onClick }) => {
    return (
        <li key={id} className={s.items} id="btn">
            <p>{name} : <span className={s.span}>{phone}</span></p>
            <button
                type='button'
                className={s.btn}
                onClick={onClick}
            >
                Delete
            </button>
        </li>
    )
};

export default ContactItem;

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};