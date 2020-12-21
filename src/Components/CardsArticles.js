import React from "react";
import CardItem from "./CardItem";
import './CardsArticles.css'

function CardsArticles() {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='\Assets\images\cat.jpg'
                            alt=""
                            title='Title'
                            text='insert some meaningful text'
                            path='/Article-1'
                        />
                    </ul>
                </div>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='\Assets\images\cat.jpg'
                            alt=""
                            title='Title'
                            text='insert some meaningful text'
                            path='/Article-1'
                        />
                    </ul>
                </div>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='\Assets\images\cat.jpg'
                            alt=""
                            title='Title'
                            text='insert some meaningful text'
                            path='/Article-1'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default CardsArticles;