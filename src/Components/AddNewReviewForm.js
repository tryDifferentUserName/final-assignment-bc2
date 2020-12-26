import { useState } from "react";
function AddNewReviewForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(['']);

    const handleEmailChange = event => setEmail(event.target.value);
    const handleMessageChange = event => setMessage(event.target.value);
    const addNewReview = () => {
        setLoading(true);
        setErrors([]);
        let errorForSubmit = [];
        if (email === '') {
            errorForSubmit.push('Whoops you left email field empty!')
        }
        if (errorForSubmit.length > 0) {
            setErrors(errorForSubmit);
            setLoading(false);
            return;
        }

        setTimeout(() => {
            setLoading(false);
            setEmail('');
            setMessage('');
        }, 2000);
    };

    const saveBtnText = loading ? 'Loading...' : 'Add review';
    let errorsElement = '';
    if (errors.length > 0) {
        errorsElement = (
            <div className="text-danger">
                <ul>
                    {errors.map((error, index) => <li key={index}>{error}</li>)}
                </ul>
            </div>
        );
    }
    return (
        <div>

            <div className="form-group">
                <label htmlFor="new-review-email">Email</label>
                <input value={email} disabled={loading} onChange={handleEmailChange} type="email" className="form-control" id="new-review-email"></input>
                {errorsElement}
            </div>
            <div className="form-group">
                <label htmlFor="new-review-msg">Message</label>
                <textarea value={message} disabled={loading} onChange={handleMessageChange} className="form-control" id="new-review-msg"></textarea>
            </div>
            <div className="form-group">
                <button onClick={addNewReview} disabled={loading} className="btn btn-outline-success btn-inverse">{saveBtnText}</button>
            </div>
        </div>
    )
}
export default AddNewReviewForm;