import PropTypes from 'prop-types'
import { ButtonItem } from './Button.styled'

export const Button = ({text,handleClick}) => {
    return (
        <ButtonItem type="button" onClick={handleClick}>{text}</ButtonItem>
    )
}

Button.propType = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}