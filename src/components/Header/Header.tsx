import React from "react";
import {NavLink} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-logo">
                        <p className="header-logo__text">IOMP</p>
                    </div>
                    <div className="header-menu">
                        <NavLink
                            to="/timetable"
                            className={({isActive}) =>
                                `header-menu__link ${isActive ? "active" : ""}`
                            }
                        >
                            Мероприятия
                        </NavLink>
                        <NavLink
                            to="/"
                            className={({isActive}) =>
                                `header-menu__link ${isActive ? "active" : ""}`
                            }
                        >
                            Курсы
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
