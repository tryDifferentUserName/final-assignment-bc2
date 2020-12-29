import React from "react";
import ImageFancyBox from "../Components/ImageFancyBox";

const data = [
    {
        id: 1,
        name: "",
        imgSrc: "/Assets/images/pour@2x.jpg"
    },
    {
        id: 2,
        name: "",
        imgSrc: "/Assets/images/label@2x.jpg"
    },
    {
        id: 3,
        name: "",
        imgSrc: "/Assets/images/lifestyle@2x.jpg"
    },
    {
        id: 4,
        name: "",
        imgSrc: "/Assets/images/hero@2x.jpg"
    },

]
function Article1() {
    return (
        <>
            <ImageFancyBox
                imageData={data} />
        </>
    )
}
export default Article1; 