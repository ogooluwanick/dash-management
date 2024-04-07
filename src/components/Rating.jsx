import PropTypes from 'prop-types'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { FaStarHalfAlt } from 'react-icons/fa'

const Rating = ({ rating, text, color, input, setInput }) => {
        const handleClick = (selectedRating) => {
                setInput({ ...input, val: selectedRating });
        };


        return (
                <div className="rating">
                        {
                                !input?.active ?
                                        <>
                                                <span>
                                                        {rating >= 1 ? <AiFillStar style={{ color, fontSize: "12px" }} aria-label='full-star'/> : rating >= .5 ? <FaStarHalfAlt style={{ color, fontSize: "11px", marginBottom: "1.5px", marginLeft: "1px" }} aria-label='half-star'/> : <AiOutlineStar style={{ color, fontSize: "12px" }} aria-label='empty-star'/>}
                                                        {rating >= 2 ? <AiFillStar style={{ color, fontSize: "12px" }} aria-label='full-star'/> : rating >= 1.5 ? <FaStarHalfAlt style={{ color, fontSize: "11px", marginBottom: "1.5px", marginLeft: "1px" }} aria-label='half-star'/> : <AiOutlineStar style={{ color, fontSize: "12px" }} aria-label='empty-star'/>}
                                                        {rating >= 3 ? <AiFillStar style={{ color, fontSize: "12px" }} aria-label='full-star'/> : rating >= 2.5 ? <FaStarHalfAlt style={{ color, fontSize: "11px", marginBottom: "1.5px", marginLeft: "1px" }} aria-label='half-star'/> : <AiOutlineStar style={{ color, fontSize: "12px" }} aria-label='empty-star'/>}
                                                        {rating >= 4 ? <AiFillStar style={{ color, fontSize: "12px" }} aria-label='full-star'/> : rating >= 3.5 ? <FaStarHalfAlt style={{ color, fontSize: "11px", marginBottom: "1.5px", marginLeft: "1px" }} aria-label='half-star'/> : <AiOutlineStar style={{ color, fontSize: "12px" }} aria-label='empty-star'/>}
                                                        {rating >= 5 ? <AiFillStar style={{ color, fontSize: "12px" }} aria-label='full-star'/> : rating >= 4.5 ? <FaStarHalfAlt style={{ color, fontSize: "11px", marginBottom: "1.5px", marginLeft: "1px" }} aria-label='half-star'/> : <AiOutlineStar style={{ color, fontSize: "12px" }} aria-label='empty-star'/>}
                                                </span>
                                                {
                                                        text && <span>({text})</span>
                                                }
                                        </>
                                        :
                                        <span>
                                                {
                                                        [1, 2, 3, 4, 5].map((value) => (
                                                                <Star
                                                                        key={value}
                                                                        value={value}
                                                                        filled={value <= input.val}
                                                                        onClick={handleClick}
                                                                        color={color}
                                                                />
                                                        ))
                                                }
                                        </span>
                        }
                </div>
        )
}

const Star = ({ value, filled, onClick, color,key }) => {
        const handleClick = () => {
                onClick(value);
        };

        return (
                <span
                        style={{ cursor: 'pointer' }}
                        onClick={handleClick}
                        key={key}
                >
                        {filled ? <AiFillStar style={{ color, fontSize: "23px" }} aria-label='star'/> : <AiOutlineStar style={{ color, fontSize: "23px" }} aria-label='empty-star'/>}
                </span>
        );
};


Rating.defaultProps = {
        color: "#fdd549"
}

Rating.propTypes = {
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        color: PropTypes.string
}

Star.defaultProps = {
        color: "#fdd549"
}

Star.propTypes = {
        rating: PropTypes.number.isRequired,
        color: PropTypes.string
}

export default Rating