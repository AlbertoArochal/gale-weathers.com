import stab3 from "../../assets/img/stab3.gif";
import totalentertainment from "../../assets/img/totalentertainment.gif";
import woodsboro from "../../assets/img/woodsboro.gif";

export const HomeLinks = () => {
    return (
        <div className="links__container">
            <ul className="links">
                <li className="links__item">
                    <a href="#about">My Y2K Resolutions! </a>
                </li>
                <li className="links__item">
                    <a href="#about">Interview with Will Kennison! </a>
                </li>
                <li className="links__item">
                    <a href="#about">My Job at Total Entertainment! </a>
                </li>
            </ul>
            <ul className="gifs__container">
                <li className="links__gif">
                    <img src={stab3} alt="Stab 3 gif" />
                </li>{" "}
                <li className="links__gif">
                    <img src={woodsboro} alt="Woodsboro gif" />
                </li>
                <li className="links__gif">
                    <img
                        src={totalentertainment}
                        alt="Total Entertainment gif"
                    />
                </li>
            </ul>
        </div>
    );
};
