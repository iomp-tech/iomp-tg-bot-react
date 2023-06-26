import React from "react";
import {Link} from "react-router-dom";

const CoursesBlock: React.FC = () => {
    return (
        <div className="courses-block">
            <div className="courses-block-content">
                <div className="courses-block-content-text">
                    <p className="courses-block-content-text__subtitle">
                        Общеобразовательные программы
                    </p>

                    <h2 className="courses-block-content-text__title">
                        Гештальт-терапия
                    </h2>

                    <p className="courses-block-content-text__auth">
                        Ася Глазкова
                    </p>
                </div>
                <div className="courses-block-content-btn">
                    <h3 className="courses-block-content-btn__price">
                        от 1094₽
                    </h3>
                    <Link
                        to="/"
                        className="btn courses-block-content-btn__btn"
                    >
                        Подробнее
                    </Link>
                </div>
            </div>

            <div
                className="courses-block-image"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1687360464268-09429aecd6bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80')",
                }}
            ></div>
        </div>
    );
};

export default CoursesBlock;
