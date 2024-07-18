import C from './style.module.css';
import { Star } from '../star';

const Rating = () => {
    return (
        <div class={C.rating}>
            <div class={C.chislo}>4.8</div>
            <div class="stars">
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
            </div>
        </div>
    )
};

export default Rating;