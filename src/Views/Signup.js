import React, { useState } from "react";
import RegisterForm from '../Components/RegisterForm';
import SuccessForm from "../Components/SuccessForm";
import '../Components/Form.css'

const Signup = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>
                {!isSubmitted ?
                    (<RegisterForm submitForm={submitForm} />
                    ) : (
                        <SuccessForm />
                    )}
            </div>
        </>
    )
}
export default Signup; 