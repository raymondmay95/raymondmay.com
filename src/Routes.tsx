import { Navigate, useRoutes } from "react-router-dom";
import { HomePage } from "./pages";
import AuthorizedLayout from "./pages/authorized/AuthorizedLayout";

export function Routes() {
    return useRoutes([
        {
            path: 'authorized',
            element: <AuthorizedLayout />,
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
