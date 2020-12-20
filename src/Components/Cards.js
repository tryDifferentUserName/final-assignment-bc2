import React from "react";
import CardItem from "./CardItem";
import './Cards.css'


function Cards() {
    return (
        <div className="cards">
            <h1>Text</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='\Assets\images\cat.jpg'
                            alt=""
                            text='insert some meaningful text'
                            path='/Article-1'
                        />
                        <CardItem
                            src='\Assets\images\cat.jpg'
                            alt=""
                            text='insert some meaningful text'
                            path='/Article-1'
                        />
                        <CardItem
                            src='\Assets\images\cat.jpg'
                            alt=""
                            text='insert some meaningful text'
                            path='/Article-1'
                        />
                    </ul>

                </div>
            </div>
        </div>
    )
}
export default Cards;