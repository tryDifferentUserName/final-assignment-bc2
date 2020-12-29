import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
    return (
        <>
            <li className="cards__item">
                <Link
                    className="cards__item__link" to={props.path}>
                    <img src={props.src} alt="" className="cards__item__img" />
                    <div className="cards__item__info">
                        <h5 className="cards__item__title">{props.title}</h5>
                        <h6 className="cards__item__text" >{props.text}</h6>
                    </div>
                </Link>
            </li>

        </>
    )
}
export default CardItem;