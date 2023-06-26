import React from "react";
import {Link} from "react-router-dom";

const CoursesBlock: React.FC = () => {
    return (
        <Link to="/course/page" className="courses-block">
            <div
                className="courses-block-image"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1687360464268-09429aecd6bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80')",
                }}
            ></div>

            <div className="courses-block-text">
                <p className="courses-block-text__subtitle">
                    Общеобразовательные программы
                </p>

                <h2 className="courses-block-text__title">Гештальт-терапия</h2>

                <p className="courses-block-text__auth">Ася Глазкова</p>
                <h3 className="courses-block-text__price">от 1094₽</h3>

                <button className="btn courses-block-text__btn">
                    Подробнее
                </button>
            </div>
        </Link>
    );
};

export default CoursesBlock;
