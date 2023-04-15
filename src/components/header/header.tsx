import tubetv from "../../assets/img/tubetv.png";
import camera from "../../assets/img/camera.png";
import micro from "../../assets/img/micro.png";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <h1 className="header__title">
                        <span>Gale</span> Weathers Channel
                    </h1>
                </div>
                <div className="sections__container">
                    <ul className="sections">
                        <li className="sections__item">
                            <Link to="/" className="sections__link">
                                Home
                            </Link>
                            <img src={tubetv} alt="tube tv" />
                        </li>
                        <li className="sections__item">
                            <a href="#about" className="sections__link">
                                ask Gale
                            </a>
                        </li>
                        <li className="sections__item">
                            <Link to="/books" className="sections__link">
                                focus on books
                            </Link>
                            <img src={camera} alt="camera" />
                        </li>
                        <li className="sections__item">
                            <Link to="/interviews" className="sections__link">
                                interview of the week
                            </Link>
                            <img src={micro} alt="micro" />
                        </li>
                        <li className="sections__item">
                            <a href="#contact" className="sections__link">
                                spotlight on Gale
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};
