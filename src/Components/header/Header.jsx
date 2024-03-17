import './css/headerPc.css';
import {Link} from "react-router-dom";

export const Header = ({label, value, onChange, onClick}) => {

    return (
        <header className="header">
            <nav>
                <Link to={"/"}>
                    <button>info</button>
                </Link>
                <Link to={"/comparatif"}>
                    <button>comparatif</button>
                </Link>
            </nav>
        </header>
    )
}