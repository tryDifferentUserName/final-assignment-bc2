import useAxiosGet from '../Hooks/useAxiosGet';

function Reviews() {
    const reviews = useAxiosGet('reviews');
    let content = '';
    if (reviews.loading) {
        content = <h4>Loading...</h4>
    }
    else if (reviews.data.length === 0) {
        content = <h3 className="pl-5">There are no reviews for this product :(</h3>

    }
    else {
        // let formatedDate = createdAt().moment().format('[Posted on: ] LLL');
        content = (
            <div>
                {reviews.data.map((review) => <li className="list-group border m-1 p-2" key={review._id}>
                    <strong>{review.email}, {review.createdAt}</strong>
                    <br />
                    {review.message}</li>)}
            </div>
        );
    }
    return (
        <div>
            {content}
        </div>
    )
}
export default Reviews;