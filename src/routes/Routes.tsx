import { Navigate, useRoutes } from "react-router-dom";
import { HomePage } from "../pages";
import AuthorizedLayout from "../pages/authorized/AuthorizedLayout";
import AuthGaurd from "./gaurd/AuthGaurd";

export function Routes() {
    return useRoutes([
        {
            path: 'authorized',
            element:
                <AuthGaurd>
                    <AuthorizedLayout />
                </AuthGaurd>
            ,
            children: [
                { path: 'home', element: <HomePage /> },
                { path: 'schedule', element: <HomePage /> },
                { path: 'notes', element: <HomePage /> },
                { path: 'tasks', element: <HomePage /> },
            ]
        },
        { path: '*', element: <Navigate to='/authorized/home' replace /> }
    ]);
}
