import LsxStudioLogo from "../images/LsxStudioLogo";
import "../scss/homescreen.scss";

const Footer = () => {
    const aboutPage = () => {

    }

    return (
        <div className="footer">
            <div className="spacer" />
            <div className="content">
                <p>
                    copyright &copy;2023 80 Points |
                    created & designed by
                </p>
                <span onClick={aboutPage}>
                    <LsxStudioLogo className="LSX-Studio-logo" />
                    <p>
                        + others
                    </p>
                </span>
            </div>
        </div>
    )
}

export default Footer