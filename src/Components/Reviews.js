
import { useState, useEffect } from "react";

function Reviews() {
    const [reviews, setReviews] = useState({
        data: [],
        loading: true
    });

    const loadReviews = async () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                setReviews({
                    data: [
                        { _id: '1', email: 'foo@bar,com', message: 'bar' },
                        { _id: '2', email: 'bar@foo.com', message: 'foo' }
                    ],
                    loading: false,
                })
                res();
            }, 2000)
        })
    }

    useEffect(() => {
        loadReviews();
    }, [])

    let content = '';
    if (reviews.loading) {
        content = <h4>Loading...</h4>
    } else if (reviews.data.length === 0) {
        content = <h4>There are no reviews for this product :(</h4>

    } else {
        content = (
            <ul className="list-group">
                {reviews.data.map((review) => <li key={review._id}> {review.email} {review.message}</li>)}
            </ul>
        );
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {content}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Reviews;