import { ElementType, Suspense, lazy } from "react";
import Loading from "../components/animate/loading/Loading";

//--------------------
const Loadable = (Component: ElementType) => (props: any) =>
(
    <Suspense fallback={<Loading />}>
        <Component {...props} />
    </Suspense>
);
//--------------------

// Authorized Pages
export const AuthHomePage = Loadable(lazy(() => import('./authorized/HomePage')))
export const AuthNotePage = Loadable(lazy(() => import('./authorized/NotePage')))
export const AuthSchedulePage = Loadable(lazy(() => import('./authorized/SchedulePage')))
export const AuthTaskPage = Loadable(lazy(() => import('./authorized/TaskPage')))

// Unauthorized Pages
export const DashboardPage = Loadable(lazy(() => import('./unauthorized/DashboardPage')))