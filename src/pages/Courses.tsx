import React from "react";

import {Header, CoursesBlock} from "../components/";

const Courses: React.FC = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
	}, []);
	
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
