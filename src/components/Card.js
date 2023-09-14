import React from "react";

const Card = ({title, amount, className}) => {
    return(
        <div data-testid="card-element" className={"card " + className}>
            <div className="card-title">{title}</div>
            <div className="card-amount">{amount}</div>
        </div>
    )
}

export default Card;