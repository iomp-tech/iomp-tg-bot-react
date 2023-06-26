import React from "react";
import {Link} from "react-router-dom";

const TimetableBlock: React.FC = () => {
    return (
        <Link to="/timetable/page" className="timetable-block">
            <div
                className="timetable-block-image"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1687360464268-09429aecd6bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80')",
                }}
            ></div>

            <div className="timetable-block-text">
                <p className="timetable-block-text__subtitle">
                    Общеобразовательные программы
                </p>

                <h2 className="timetable-block-text__title">
                    Гештальт-терапия
                </h2>

                <p className="timetable-block-text__auth">Ася Глазкова</p>

                <p className="timetable-block-text__description">
                    Классификация колод. Техника безопасности. Практика
                    Денежный потолок. Игра «Препятствия и возможности».
                    Формирование штампа судьбы. Как формируется судьба человека.
                    Саботаж. Вторичные выгоды неудач. Почему нам «выгодно»
                    проживать проблемы.
                </p>

                <h3 className="timetable-block-text__date">13 июня, 13:00</h3>

                <button className="btn timetable-block-text__btn">
                    Подробнее
                </button>
            </div>
        </Link>
    );
};

export default TimetableBlock;
