import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <Link to="/" className="header__link active">
                        Курсы
                    </Link>
                    <Link to="/timetable" className="header__link">
                        Мероприятия
                    </Link>
                </div>
			</div>
        </header>
    );
};

export default Header;
