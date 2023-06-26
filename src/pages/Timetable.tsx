import React from "react";

import {Header, TimetableBlock} from "../components/";

const Timetable: React.FC = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />

            <section className="timetable">
                <div className="container">
                    <div className="timetable-wrapper">
                        <TimetableBlock />
                        <TimetableBlock />
                        <TimetableBlock />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Timetable;
