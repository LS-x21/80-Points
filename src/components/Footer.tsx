import LSX_STUDIO_LOGO from "../images/LSX_STUDIO_LOGO";
import "../scss/homescreen.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="spacer" />
            <div className="content">
                <p>
                    Created by:
                </p>
                <LSX_STUDIO_LOGO className="LSX-Studio-logo" />
            </div>
        </div>
    )
}

export default Footer