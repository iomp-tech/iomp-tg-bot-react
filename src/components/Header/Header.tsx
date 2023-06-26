import React from "react";
import {NavLink} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <NavLink
                        to="/"
                        className={({isActive}) =>
                            `header__link ${isActive ? "active" : ""}`
                        }
                    >
                        Курсы
                    </NavLink>

                    <NavLink
                        to="/timetable"
                        className={({isActive}) =>
                            `header__link ${isActive ? "active" : ""}`
                        }
                    >
                        Мероприятия
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
