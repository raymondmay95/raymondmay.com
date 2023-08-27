import { Navigate, useRoutes } from "react-router-dom";
import { AuthHomePage, AuthNotePage, AuthSchedulePage, AuthTaskPage } from "../pages";
import AuthorizedLayout from "../pages/layouts/AuthorizedLayout";
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
                { path: 'schedule', element: <AuthSchedulePage /> },
                { path: 'notes', element: <AuthNotePage /> },
                { path: 'tasks', element: <AuthTaskPage /> },
            ]
        },
        { path: '*', element: <Navigate to='/authorized/home' replace /> }
    ]);
}
