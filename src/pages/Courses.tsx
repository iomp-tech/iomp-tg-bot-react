import React from "react";

import {Header, CoursesBlock} from "../components/";

const Courses: React.FC = () => {
    return (
        <>
            <Header />

            <section className="courses">
                <div className="container">
                    <div className="courses-wrapper">
                        <CoursesBlock />
                        <CoursesBlock />
                        <CoursesBlock />
                        <CoursesBlock />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Courses;
