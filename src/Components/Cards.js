import React from "react";
import CardItem from "./CardItem";
import '../Assets/css/Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Loved by our members</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='\Assets\images\pour2@2x.jpg'
                            alt=""
                            text='2019 Big Beat® Red Blend'
                            path='/Article1'
                        />
                        <CardItem
                            src='\Assets\images\pour3@2x.jpg'
                            alt=""
                            text='2020 Cape Route Chenin Blanc'
                            path='/Article1'
                        />
                        <CardItem
                            src='\Assets\images\pour@2x.jpg'
                            alt=""
                            text='2019 Les Bobos Chardonnay'
                            path='/Article1'
                        />
                    </ul>

                </div>
            </div>
        </div>
    )
}
export default Cards;