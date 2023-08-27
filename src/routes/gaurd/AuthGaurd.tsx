import { PropsWithChildren } from "react";
import { useAuthContext } from "../../auth/AuthContext";
import Loading from "../../components/animate/loading/Loading";
import { LoginComponent } from "../../auth/components/LoginComponent";


export default function AuthGaurd(props: PropsWithChildren) {
    const { children } = props
    const { isAutherized, isInitiated } = useAuthContext()

    if (!isInitiated) {
        return <Loading />
    }

    if (!isAutherized) {
        return <LoginComponent />
    }

    return (
        <>
            {children}
        </>
    )
}

