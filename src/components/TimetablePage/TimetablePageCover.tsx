import React from "react";

const TimetablePageCover: React.FC = () => {
    return (
        <div className="timetable-page-cover">
            <div
                className="timetable-page-cover-image"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1687360464268-09429aecd6bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80')",
                }}
            ></div>
            <div className="timetable-page-cover-text">
                <p className="timetable-page-cover-text__subtitle">
                    Общеобразовательные программы
                </p>

                <h2 className="timetable-page-cover-text__title">
                    Гештальт-терапия
                </h2>

                <p className="timetable-page-cover-text__auth">Ася Глазкова</p>
                <h3 className="timetable-page-cover-text__date">
                    13 июня, 13:00
                </h3>
            </div>
        </div>
    );
};

export default TimetablePageCover;
