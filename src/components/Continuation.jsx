import './Continuation.css';
import { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { useNavigate } from 'react-router-dom';

export default function Continuation() {

    const [formData, setFormData] = useState({
        TxnId: '',
        chasisNo: '',
        fncrCode: '',
        engineNo: '',
        hpaFrom: null,
        hpaUpto: null,
        docUrl: '',
        regNo: ''
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

        if (!formData.chasisNo.trim()) {
            errors.chasisNo = 'Chasis No is required';
        } else if (!/^\d{4,17}$/.test(formData.chasisNo.trim())) {
            errors.chasisNo = 'Chasis No must be between 4 to 17 digits and contain no spaces';
        }


        if (!formData.regNo.trim()) {
            errors.regNo = 'Registration No is required';
        } else if (!/^\d{10,}$/.test(formData.regNo.trim())) {
            errors.regNo = 'Registration No must be at least 10 digits and contain no spaces';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };


    // fxn to handle form reset
    function handleReset() {
        return (
            setFormData({
                TxnId: '',
                chasisNo: '',
                fncrCode: '',
                engineNo: '',
                hpaFrom: '',
                hpaUpto: '',
                docUrl: '',
                regNo: ''
            })
        )
    }


    // Fxn to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // You can perform further actions if the form is valid, such as sending the form data to a server
            console.log('Continuation Form submitted:', formData);
            // Reset form fields after submission
            setFormData({
                TxnId: '',
                chasisNo: '',
                fncrCode: '',
                engineNo: '',
                hpaFrom: '',
                hpaUpto: '',
                docUrl: '',
                regNo: ''
            });
            setModalMessage('Continuation Form submitted successfully!');
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
        <div className="continuation-container">
            <h1 className="continuation-heading">Update Employee Details</h1>
            <form onSubmit={handleSubmit} className="continuation-form">
                <div className="form-group">
                    <label htmlFor="empCode">Employee Code*</label>
                    <input type="text" id="empCode" placeholder="Enter Employee Code" name="empCode" value={formData.empCode} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" value={formData.lastName} onChange={handleChange} />
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
                    <label htmlFor="email">Email Id*</label>
                    <input type="text" id="email" name="email" placeholder="Enter email Id" value={formData.email} onChange={handleChange} />
                </div>
                <div className="button-group">
                    <button type="submit" className="submit-btn">Update</button>
                    <button type="button" onClick={handleReset} className="reset-btn">Reset</button>
                </div>
            </form>
            {showModal && <CustomModal message={modalMessage} />}
        </div>
    )
}
