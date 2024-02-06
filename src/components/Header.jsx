import './Header.css';
import autoImg from './ImageAuto.gif';

export default function Header() {
    return (
        <div>
            <div className="header">
                <h1>Welcome to MS EXIMP (Deepak Auto) Hypothetication Tool</h1>
            </div>
            <img className="header-img" src={autoImg} alt="auto description" />
            <p className="header-p">
                This website is to add your vehicle details.
            </p>
        </div>
    );
}