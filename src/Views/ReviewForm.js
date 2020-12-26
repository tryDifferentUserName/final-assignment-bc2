import AddNewReviewForm from "../Components/AddNewReviewForm";
import Reviews from "../Components/Reviews";

function ReviewForm() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3> Reviews</h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
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
                    <AddNewReviewForm />
                </div>
            </div>

        </div>
    )
}
export default ReviewForm; 