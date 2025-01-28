import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import {
    LocomotiveScrollProvider,
    useLocomotiveScroll,
} from "react-locomotive-scroll";
import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
    const containerRef = useRef(null);
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage></HomePage>,
        },
    ]);
    return (
        <LocomotiveScrollProvider
            containerRef={containerRef}
            options={{
                smooth: true,
                smartphone: {
                    smooth: true,
                    multiplier: 0.2,
                },
                tablet: {
                    smooth: true,
                    multiplier: 0.2,
                },
            }}
        >
            <div
                className="App"
                data-scroll-container
                ref={containerRef}
                id="Main"
            >
                <RouterProvider router={router}></RouterProvider>
            </div>
        </LocomotiveScrollProvider>
    );
}

export default App;
