import React from "react";

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

                    <a
                        href="https://iomp.ru/institute"
                        className="footer__link"
                    >
                        Сведения об образовательной организации
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
