import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <span className="footer__info">
                        ООО «ИСП» ОГРН 1197746615736
                    </span>
                    <span className="footer__info">ИНН 7727431274</span>
                    <span className="footer__info">КПП 771401001</span>

					<Link
						to="/policy"
                        className="footer__link"
                    >
                        Сведения об образовательной организации
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
