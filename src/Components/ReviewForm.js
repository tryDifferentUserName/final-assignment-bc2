import React from 'react';
import "./Review.css";

function ReviewForm() {

    return (
        <div>
            <div className="message-container">
                <div className='message-display'></div>
            </div>
            <div>
                <form>
                    <div>
                        <label htmlFor="email" className="review-form">Your email:</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="review-input"
                        />
                    </div>
                    <div>
                        <label className="review-form">Your message:</label>
                        <textarea name="comment" form="" maxlength="256"></textarea>
                        <button>SEND</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ReviewForm;
