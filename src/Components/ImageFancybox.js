import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../Assets/css/ImageFancyBox.css'

const ImageFancyBox = ({ imageData }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-6">
                    <img className="big-img" src={imageData[activeIndex].imgSrc} alt="" />
                </div>
                <div className="col-xs-6 description" >
                    <h3>2019 Big Beat® Red Blend</h3>
                    <h3>Friendly, Red Fruit, Slightly Sweet</h3>
                    <strong>Body: medium
                    <br />Sweetness: slightly sweet
                    <br />Alcohol: 14.7%
                    </strong>
                    <hr />
                    <strong className="price">€14.99 Regular Price
                    <br /><span>€12.99 Members</span></strong>

                </div>
            </div>
            <div className="row flex-row">
                <div className="col-xs-6">
                    {imageData.map(({ id, imgSrc, name }, i) => {
                        return (
                            <img
                                key={id}
                                className="small-img"
                                src={imgSrc}
                                alt={name}
                                onClick={() => setActiveIndex(i)} />
                        )
                    })}

                </div>
                <div className="col-xs-6 reviews-btn">
                    <Link to="/ReviewForm"><button className="btn btn-outline-dark mt-1">See reviews</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ImageFancyBox;
