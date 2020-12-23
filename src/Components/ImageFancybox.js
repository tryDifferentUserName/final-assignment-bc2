import React from 'react';
import './ImageFancyBox.css'

function ImageFancyBox({ imageData }) {

    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-6">
                    <img className="big-img" src={imageData[0].imgSrc} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <img className="small-img" src={imageData[1].imgSrc} alt="" />
                    <img className="small-img" src={imageData[2].imgSrc} alt="" />
                    <img className="small-img" src={imageData[3].imgSrc} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <img className="small-img" src={imageData[4].imgSrc} alt="" />
                    <img className="small-img" src={imageData[5].imgSrc} alt="" />
                    <img className="small-img" src={imageData[5].imgSrc} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ImageFancyBox;
