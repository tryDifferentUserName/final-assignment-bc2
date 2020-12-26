import React from "react";
import 'flexboxgrid';
import ImageFancyBox from "../Components/ImageFancyBox";

const data = [
    {
        id: 1,
        name: "",
        imgSrc: "/Assets/images/cat.jpg"
    },
    {
        id: 2,
        name: "",
        imgSrc: "/Assets/images/img-2.jpg"
    },
    {
        id: 3,
        name: "",
        imgSrc: "/Assets/images/cat.jpg"
    },
    {
        id: 4,
        name: "",
        imgSrc: "/Assets/images/cat.jpg"
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