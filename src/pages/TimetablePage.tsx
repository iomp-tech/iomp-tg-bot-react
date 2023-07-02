import React from "react";
import {Link} from "react-router-dom";

import {TimetablePageCover, TimetablePageForm} from "../components/";

const TimetablePage: React.FC = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="timetable-page">
            <div className="container">
                <div className="timetable-page-back">
                    <Link to="/" className="timetable-page-back__back">
                        ← Назад
                    </Link>
                </div>

                <div className="timetable-page-wrapper">
                    <TimetablePageCover />
                    <TimetablePageForm />
                </div>
            </div>
        </section>
    );
};

export default TimetablePage;
