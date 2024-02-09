import { useState } from "react";
import './Addition.css';
import { Calendar } from 'primereact/calendar';
import { useNavigate } from 'react-router-dom';



export default function Addition() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        empCode: '',
        dob: null,
        doj: null,
        email: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    // Fxn to handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    };

    // Fxn to validate form data
    const validateForm = () => {
        let errors = {};

        if (!formData.firstName.trim()) {
            errors.firstName = 'First Name is required';
        } else if (!/^[A-Za-z]+$/.test(formData.firstName.trim())) {
            errors.firstName = 'First Name should contain only alphabets';
        }

        if (!formData.empCode.trim()) {
            errors.empCode = 'Employee Code is required';
        } else if (formData.empCode.trim().length < 6) {
            errors.empCode = 'Employee Code should be at least 6 digits';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
            errors.email = 'Invalid email format';
        }
    
        if (formData.doj === null) {
            errors.doj = 'Date of Joining is required';
        }
    
        if (formData.dob === null) {
            errors.dob = 'Date of Birth is required';
        } else {
            const dobYear = new Date(formData.dob).getFullYear();
            if (dobYear > 2002) {
                errors.dob = 'DOB should not be later than 2002';
            }
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };


    // fxn to handle form reset
    function handleReset() {
        return (
            setFormErrors({}),
            setFormData({
                firstName: '',
                lastName: '',
                empCode: '',
                dob: null,
                doj: null,
                email: ''
            })
            
        )
    }


    // Fxn to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // You can perform further actions if the form is valid, such as sending the form data to a server
            console.log('Employee Details Added:', formData);
            // Reset form fields after submission
            setFormData({
                firstName: '',
                lastName: '',
                empCode: '',
                dob: null,
                doj: null,
                email: ''
            });
            setModalMessage('Employee Details Added successfully!');
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
                navigate('/'); // Redirect to the home page
            }, 4000);
        } else {
            setModalMessage('Something went wrong. Please check again.');
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
            }, 4000);
        }
    };

    function CustomModal({ message }) {
        return (
            <div className="modal">
                <div className="modal-content">
                    <p>{message}</p>
                </div>
            </div>
        );
    }


    return (
        <div className="addition-container">
            <h1 className="addition-heading">Add Employee Details</h1>
            <form onSubmit={handleSubmit} className="addition-form">
                <div className="form-group">
                    <label htmlFor="firstName">First Name*</label>
                    <input className={formErrors.firstName ? "error-input" : ""} type="text" id="firstName" placeholder="Enter First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                    {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" value={formData.lastName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="empCode">Employee Code*</label>
                    <input className={formErrors.empCode ? "error-input" : ""} type="text" id="empCode" name="empCode" placeholder="Enter employee code" value={formData.empCode} onChange={handleChange} />
                    {formErrors.empCode && <span className="error">{formErrors.empCode}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <Calendar
                        id="dob"
                        name="dob"
                        className={formErrors.dob ? "error-input" : ""}
                        placeholder="Date(YYYY-MM-DD)"
                        value={formData.dob}
                        onChange={handleChange}
                        showIcon
                        dateFormat="yy-mm-dd"
                    />
                     {formErrors.dob && <span className="error">{formErrors.dob}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="doj">Date of Joining*</label>
                    <Calendar
                        id="doj"
                        name="doj"
                        className={formErrors.doj ? "error-input" : ""}
                        placeholder="Date(YYYY-MM-DD)"
                        value={formData.doj}
                        onChange={handleChange}
                        showIcon
                        dateFormat="yy-mm-dd"
                    />
                    {formErrors.doj && <span className="error">{formErrors.doj}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Id*</label>
                    <input className={formErrors.email ? "error-input" : ""} type="text" id="email" name="email" placeholder="Enter email id" value={formData.email} onChange={handleChange} />
                    {formErrors.email && <span className="error">{formErrors.email}</span>}
                </div>
                <div className="button-group">
                    <button type="submit" className="submit-btn">Submit</button>
                    <button type="button" onClick={handleReset} className="reset-btn">Reset</button>
                </div>
            </form>
            {showModal && <CustomModal message={modalMessage} />}
        </div>
    )
}
