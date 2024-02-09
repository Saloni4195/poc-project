import autoImg from './Centric.png';
import empImg from './Employee.png';
import './Header.css';

export default function Home() {
    return (
        <div>
            <img className="header-img" src={autoImg} alt="centric logo description" />
            <p className="header-p">
                This website helps you input and access employee details quickly and easily.
            </p>
            <img className="body-img" src={empImg} alt="employee description" />
        </div>
    )
}
