import React from 'react'
import { Link } from "react-router-dom"

const SuccessForm = () => {
    return (
        <div className="text-center">
            <div>Congratulations registration was successful, <Link className="link" to="/">continue...</Link></div>
        </div>
    )
}

export default SuccessForm;