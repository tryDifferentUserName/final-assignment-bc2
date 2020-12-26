import React, { useState } from 'react';
import './ImageFancyBox.css'

const ImageFancyBox = ({ imageData }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-6">
                    <img className="big-img" src={imageData[activeIndex].imgSrc} alt="" />
                </div>
                <div className="col-xs-6">
                    <p>text text text</p>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
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
            </div>
        </div>
    )
}

export default ImageFancyBox;
