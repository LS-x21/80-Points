import LsxStudioLogo from "../images/LsxStudioLogo";
import "../scss/homescreen.scss";

const Footer = () => {
    const aboutPage = () => {

    }

    return (
        <footer>
            <aside />
            <section>
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
            </section>
        </footer>
    )
}

export default Footer