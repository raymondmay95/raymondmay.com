import { Navigate, useRoutes } from "react-router-dom";
import { AuthHomePage } from "../pages";
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
                { path: 'home', element: <AuthHomePage /> },
                { path: 'schedule', element: <AuthHomePage /> },
                { path: 'notes', element: <AuthHomePage /> },
                { path: 'tasks', element: <AuthHomePage /> },
            ]
        },
        { path: '*', element: <Navigate to='/authorized/home' replace /> }
    ]);
}
