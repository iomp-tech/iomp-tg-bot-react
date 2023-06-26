import React from "react";
import {Link} from "react-router-dom";

import {CoursePageCover} from "../components/";

const CoursePage: React.FC = () => {
    return (
        <section className="course-page">
            <div className="container">
                <Link to="/" className="course-page__back">
                    ← Назад
                </Link>

                <div className="course-page-wrapper">
                    <CoursePageCover />
                </div>
            </div>
        </section>
    );
};

export default CoursePage;
