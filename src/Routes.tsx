import { Navigate, useRoutes } from "react-router-dom";
import { HomePage } from "./pages";

export function Routes() {
    return useRoutes([
        { path: '/home', element: <HomePage /> },
        { index: true, element: <Navigate to='/home' replace /> }
    ]);
}
