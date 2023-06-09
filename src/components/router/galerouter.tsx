import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { Galebooks } from "../pages/books";
import { Interviews } from "../pages/interviews";

export const GalesRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Galebooks />} />
            <Route path="/interviews" element={<Interviews />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
