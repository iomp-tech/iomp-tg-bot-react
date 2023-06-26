import React from "react";
import {Route, Routes,} from "react-router-dom";

import {Courses} from "./pages/";

const App: React.FC = () => {
    return (
        <div className="wrapper">
            <React.Suspense fallback={<></>}>
                <Routes>
                    <Route path="/courses" element={<Courses />} />

                    <Route path="*" element={<></>} />
                </Routes>
            </React.Suspense>
        </div>
    );
};

export default App;
