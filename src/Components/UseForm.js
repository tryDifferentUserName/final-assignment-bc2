import { useState, useEffect } from "react";

const useForm = (callback, ValidateData) => {
    const [values, setValues] = useState({

        email: '',
        password: '',
        password2: '',
        fname: '',
        lName: '',
        country: '',


    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()

        setErrors(ValidateData(values));
        setIsSubmitting(true);
    };
    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        },
        [errors]
    );
    return { handleChange, values, handleSubmit, errors };
}
export default useForm;