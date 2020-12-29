import { useState } from "react";
import AxiosPost from '../Requests/AxiosPost';


function AddNewReviewForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleEmailChange = event => setEmail(event.target.value);
    const handleMessageChange = event => setMessage(event.target.value);

    const addNewReview = async () => {
        setLoading(true);
        setErrors([]);
        let errorForSubmit = [];
        if (email === '') {
            errorForSubmit.push('Whoops you left this field empty!')
        }
        if (errorForSubmit.length > 0) {
            setErrors(errorForSubmit);
            setLoading(false);
            return;
        }

        await AxiosPost('reviews', {
            email,
            message,
        })
        setLoading(false);
        setEmail('');
        setMessage('');

    };

    const saveBtnText = loading ? 'Loading...' : 'Add review';
    let errorsElement = '';
    if (errors.length > 0) {
        errorsElement = (
            <div className="text-danger">
                <ul>
                    {errors.map((error, index) => <li className="list-group" key={index}>{error}</li>)}
                </ul>
            </div>
        );
    }
    return (
        <div>

            <div>
                <label htmlFor="new-review-email">Name</label>
                <input value={email} disabled={loading} onChange={handleEmailChange} type="email" className="form-control" id="new-review-email"></input>
                {errorsElement}
            </div>
            <div>
                <label htmlFor="new-review-msg">Message</label>
                <textarea value={message} disabled={loading} onChange={handleMessageChange} className="form-control" id="new-review-msg"></textarea>

            </div>
            <div>
                <button onClick={addNewReview} disabled={loading} className="btn btn btn-outline-dark ">{saveBtnText}</button>
            </div>
        </div>
    )
}
export default AddNewReviewForm;