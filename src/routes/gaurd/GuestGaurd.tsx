import { PropsWithChildren } from "react";
import { useAuthContext } from "../../auth/AuthContext";
import Loading from "../../components/animate/loading/Loading";
import { Navigate } from "react-router-dom";


export default function GuestGuard(props: PropsWithChildren) {
    const { children } = props
    const { isInitiated, isAuthorized } = useAuthContext()

    if (!isInitiated) {
        return <Loading />
    }
    if (isAuthorized) {
        return <Navigate to='/authorized/home' replace />
    }

    return (
        <>
            {children}
        </>
    )
}

