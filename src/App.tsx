import React from "react";
import {Route, Routes} from "react-router-dom";

import {Footer} from "./components";

import {Courses, CoursePage, Timetable, TimetablePage} from "./pages/";

import {useTelegram} from "./hooks/useTelegram";

declare global {
    interface Window {
        // __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
        YooMoneyCheckoutWidget?: any;
        Telegram?: any;
    }
}

const App: React.FC = () => {
	const { tg } = useTelegram();

    React.useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className="wrapper">
            <React.Suspense fallback={<></>}>
                <Routes>
                    <Route path="/" element={<Courses />} />
                    <Route path="/course/:path" element={<CoursePage />} />

                    <Route path="/timetable" element={<Timetable />} />
                    <Route
                        path="/timetable/:path"
                        element={<TimetablePage />}
                    />

                    <Route path="*" element={<></>} />
                </Routes>
            </React.Suspense>

            <Footer />
        </div>
    );
};

export default App;
