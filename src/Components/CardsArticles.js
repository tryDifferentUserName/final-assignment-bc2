import React from "react";
import CardItem from "./CardItem";
import '../Assets/css/CardsArticles.css';


function CardsArticles() {
    return (
        <div>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <CardItem
                        src='\Assets\images\pour@2x.jpg'
                        alt="Big Beat"
                        title='Price: €12.99'
                        text='2019 Big Beat® Red Blend'
                        path='/Article1' />
                </div>
                <div className="cards__wrapper">
                    <CardItem
                        src='\Assets\images\pour2@2x.jpg'
                        alt="Les Bobos"
                        title='Price: €12.99'
                        text='2019 Les Bobos Chardonnay'
                        path='/Article1' />
                </div>
                <div className="cards__wrapper">
                    <CardItem
                        src='\Assets\images\pour3@2x.jpg'
                        alt="Cape Route"
                        title='Price: €12.99'
                        text='2020 Cape Route Chenin'
                        path='/Article1' />
                </div>
            </div>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <CardItem
                        src='\Assets\images\pour4@2x.jpg'
                        alt="Cape Route"
                        title='Price: €12.99'
                        text='2020 Cape Route Cinsault'
                        path='/Article1' />
                </div>
                <div className="cards__wrapper">
                    <CardItem
                        src='\Assets\images\pour5@2x.jpg'
                        alt="Loves Me Not"
                        title='Price: €12.99'
                        text='2019 Loves Me Not® White'
                        path='/Article1' />
                </div>
                <div className="cards__wrapper">
                    <CardItem
                        src='\Assets\images\pour6@2x.jpg'
                        alt="Invoke"
                        title='Price: €12.99'
                        text='2019 Invoke Cabernet Franc'
                        path='/Article1' />
                </div>
            </div>
        </div>
    )
}
export default CardsArticles;