import { useState } from "react";
import './Addition.css';


export default function Addition() {

    const [formData, setFormData] = useState({
        chasisNo: '',
        engineNo: '',
        hpaFrom: '',
        hpaUpto: '',
        docUrl: '',
        regNo: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

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
        }


        if (!formData.regNo.trim()) {
            errors.regNo = 'Registration No is required';
        } else if (formData.regNo.trim().length < 10) {
            errors.regNo = 'Registration No must be at least 10 characters';
        }

        const datePattern = /^\d{4}-\d{2}-\d{2}$/;
        if (!formData.hpaFrom.trim()) {
            errors.hpaFrom = 'Hpa from is required';
        } else if (!datePattern.test(formData.hpaFrom.trim())) {
            errors.hpaFrom = 'Hpa from be in YYYY-MM-DD format';
        }

        if (!formData.hpaUpto.trim()) {
            errors.hpaUpto = 'Hpa Upto is required';
        } else if (!datePattern.test(formData.hpaUpto.trim())) {
            errors.hpaUpto = 'Hpa Upto be in YYYY-MM-DD format';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };


    // fxn to handle form reset
    function handleReset() {
        return (
            setFormData({
                chasisNo: '',
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
            console.log('Form submitted:', formData);
            // Reset form fields after submission
            setFormData({
                chasisNo: '',
                engineNo: '',
                hpaFrom: '',
                hpaUpto: '',
                docUrl: '',
                regNo: ''
            });
            // Set success message
            setSuccessMessage('Form submitted successfully!');
            // Clear success message after 5 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 5000);
        } else {
            console.log('Form validation failed');
        }
    };


    return (
        <div className="addition-container">
            <h1 className="addition-heading">Hypothetication Addition</h1>
            <form onSubmit={handleSubmit} className="addition-form">
                <div className="form-group">
                    <label htmlFor="chasisNo">Chasis No :</label>
                    <input type="text" id="chasisNo" placeholder="Enter Chasis Number" name="chasisNo" value={formData.chasisNo} onChange={handleChange} />
                    {formErrors.chasisNo && <span className="error">{formErrors.chasisNo}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="engineNo">Engine No :</label>
                    <input type="text" id="engineNo" name="engineNo" placeholder="Enter Engine Number" value={formData.engineNo} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="hpaFrom">HPA From :</label>
                    <input type="text" id="hpaFrom" name="hpaFrom" placeholder="Date(YYYY-MM-DD)" value={formData.hpaFrom} onChange={handleChange} />
                    {formErrors.hpaFrom && <span className="error">{formErrors.hpaFrom}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="hpaUpto">HPA Upto:</label>
                    <input type="text" id="hpaUpto" name="hpaUpto" placeholder="Date(YYYY-MM-DD)" value={formData.hpaUpto} onChange={handleChange} />
                    {formErrors.hpaUpto && <span className="error">{formErrors.hpaUpto}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="docUrl">Document Url :</label>
                    <input type="text" id="docUrl" name="docUrl" placeholder="Enter Document Url" value={formData.docUrl} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="regNo">Registration No :</label>
                    <input type="text" id="regNo" name="regNo" placeholder="Enter Registration Number" value={formData.regNo} onChange={handleChange} />
                    {formErrors.regNo && <span className="error">{formErrors.regNo}</span>}
                </div>
                <div className="button-group">
                    <button type="submit" className="submit-btn">Submit</button>
                    <button type="button" onClick={handleReset} className="reset-btn">Reset</button>
                </div>
            </form>
            {successMessage && <div className="success">{successMessage}</div>}
        </div>
    )
}
