export default function ValidateData(values) {

    let errors = {}

    if (!values.email) {
        errors.email = "Fill the email field"
    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }
    if (!values.password) {
        errors.password = "Fill the password field"
    } else if (values.password.length < 8) {
        errors.password = "Password needs to be 8 characters or more"
    }
    if (!values.password2) {
        errors.password2 = "Fill the password field once more"
    } else if (values.password2 !== values.password) {
        errors.password2 = "Passwords have to match"
    }
    if (!values.fname) {
        errors.fname = "Fill the first name field"
    }
    if (!values.country) {
        errors.country = "Select country"
    }

    return errors;
}