import s from './Filter.module.css';
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from 'redux/selectors';
import { filtered } from "redux/searchFilterSlice";

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const searchFilter = e => {
        dispatch(filtered(e.currentTarget.value)) // отримую значення з інпуту і записую його
    };
    
    return (
        <label className={s.label}> Find contacts by name
            <input
                type="text"
                value={filter}
                onChange={searchFilter}
                className={s.input}
            />
        </label>
    );
};

export default Filter;