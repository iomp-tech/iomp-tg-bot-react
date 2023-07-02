import React from "react";
import {Link} from "react-router-dom";

import {CoursePageCover, CoursePageForm} from "../components/";

const CoursePage: React.FC = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="course-page">
            <div className="container">
                <div className="course-page-back">
                    <Link to="/" className="course-page-back__back">
                        ← Назад
                    </Link>
                </div>

                <div className="course-page-wrapper">
                    <CoursePageCover />
                    <CoursePageForm />
                </div>
            </div>
        </section>
    );
};

export default CoursePage;
