import React from "react";
import {Route, Routes} from "react-router-dom";

import {Footer} from "./components";

import {Courses} from "./pages/";

const App: React.FC = () => {
    return (
        <div className="wrapper">
            <React.Suspense fallback={<></>}>
                <Routes>
                    <Route path="/" element={<Courses />} />

                    <Route path="*" element={<></>} />
                </Routes>
			</React.Suspense>
			
			<Footer />
        </div>
    );
};

export default App;
