import { ThreeDots } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
    return (
        <div className={s.loader}>
            <ThreeDots color="rgb(175, 191, 202)" height={80} width={80} />
        </div>
    );
};

export default Loader;