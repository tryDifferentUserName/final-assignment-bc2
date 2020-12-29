import AddNewReviewForm from "../Components/AddNewReviewForm";
import Reviews from "../Components/Reviews";
import '../Assets/css/Reviews.css';
import { useState } from "react";

function ReviewForm() {

    const [num, setNum] = useState(1);
    const reloadReviews = () => {
        setNum(num + 1);
    }

    return (
        <div className="container">
            <div className="row form-group">
                <div className="col">
                    <h3> Reviews</h3>
                </div>
            </div>
            <div className="row">
                <div className="col ">
                    <Reviews />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h3> Add new review</h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <AddNewReviewForm reviewAdded={reloadReviews} />
                </div>
            </div>

        </div>
    )
}
export default ReviewForm; 