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
                            <a href="#home" className="sections__link">
                                Home
                            </a>
                        </li>
                        <li className="sections__item">
                            <a href="#about" className="sections__link">
                                ask Gale
                            </a>
                        </li>
                        <li className="sections__item">
                            <a href="#interviews" className="sections__link">
                                focus on books
                            </a>
                        </li>
                        <li className="sections__item">
                            <a href="#bookclub" className="sections__link">
                                interview of the week
                            </a>
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
