import { Navigate, useRoutes } from "react-router-dom";
import {
    AuthHomePage,
    AuthNotePage,
    AuthSchedulePage,
    AuthTaskPage,
    DashboardPage
} from "../pages";
import AuthorizedLayout from "../pages/layouts/AuthorizedLayout";
import AuthGaurd from "./gaurd/AuthGaurd";
import GuestGuard from "./gaurd/GuestGaurd";
import UnauthorizedLayout from "../pages/layouts/UnauthorizedLayout";

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
        {
            path: 'unauthorized',
            element:
                <GuestGuard>
                    <UnauthorizedLayout />
                </GuestGuard>,
            children: [
                { path: 'dashboard', element: <DashboardPage /> },
            ]
        },
        { path: '404', element: <>404 not found</> },
        { path: '500', element: <>500 error</> },
        { index: true, element: <Navigate to='/unauthorized/dashboard' replace /> },
        { path: '*', element: <Navigate to='/404' replace /> }
    ]);
}
