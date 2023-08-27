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
export const AuthHomePage = Loadable(lazy(() => import('./home')))