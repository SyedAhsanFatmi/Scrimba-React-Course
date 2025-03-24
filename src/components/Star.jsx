import React from 'react'
import starEmpty from '../assets/empty_star.png'
import starFilled from '../assets/star_filled.png'

const Star = (props) => {

    let starIcon = props.isFilled ? starFilled : starEmpty
    let ariaPressed = props.isFilled ? "true" : "false"
    let ariaLabel = props.isFilled ? "Remove from favorites" : "Add to favorites"
    let imgAlt = props.isFilled ? "filled star icon" : "empty star icon"

  return (
    <button
        onClick={props.handleClick}
        aria-pressed={ariaPressed}
        aria-label={ariaLabel}
         className="favorite-button"
     >
        <img
            src={starIcon}
            alt={imgAlt}
            className="favorite"
        />
    </button>
  )
}

export default Star
