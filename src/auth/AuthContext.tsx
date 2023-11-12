import { PropsWithChildren, createContext, useContext, useEffect, useReducer } from "react";
import { User, getAuth, onAuthStateChanged } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getAnalytics, setUserId } from 'firebase/analytics'
import { firebaseConfig } from "./config";
import { useSnackbar } from "notistack";

// -------------------
const app = initializeApp(firebaseConfig)
export const Analytics = getAnalytics(app)
export const Auth = getAuth(app)
// -------------------

enum AuthSessionActionKind {
    AUTHORIZE = 'AUTHORIZE',
    DEAUTHORIZE = 'DEAUTHORIZE',
    INITIALIZE = 'INITIALIZE',
}

interface AuthSessionAction {
    type: AuthSessionActionKind;
    payload: User | null;
}

interface AuthSessionState {
    user: User | null,
    isAuthorized: boolean,
    isInitiated: boolean
}

const InitialState: AuthSessionState = {
    user: null,
    isAuthorized: false,
    isInitiated: false
}

const AuthContext = createContext(InitialState)

function authReducer(session: AuthSessionState, action: AuthSessionAction) {
    switch (action.type) {
        case AuthSessionActionKind.AUTHORIZE:
            return {
                ...session,
                user: action.payload,
                isAuthorized: true,
            };
        case AuthSessionActionKind.DEAUTHORIZE:
            return {
                ...session,
                user: null,
                isAuthorized: false
            }
        case AuthSessionActionKind.INITIALIZE:
            return {
                ...session,
                isInitiated: true
            }
    }
}

export default function AuthProvider(props: PropsWithChildren) {
    const { children } = props
    const { enqueueSnackbar } = useSnackbar()
    const [session, dispatch] = useReducer(authReducer, InitialState)

    const _login = (user: any) => {
        dispatch({ type: AuthSessionActionKind.AUTHORIZE, payload: user })
    }
    const _logout = () => {
        dispatch({ type: AuthSessionActionKind.DEAUTHORIZE, payload: null })
    }
    const _initialize = () => {
        dispatch({ type: AuthSessionActionKind.INITIALIZE, payload: null })
    }

    useEffect(() => {
        return onAuthStateChanged(Auth,
            (user) => {
                _initialize()
                if (user) {
                    setUserId(Analytics, user.uid)
                    _login(user)
                } else {
                    setUserId(Analytics, null)
                    _logout()
                }
            },
            (error) => {
                enqueueSnackbar(error.message, { variant: 'error' })
            }
        )
    }, [enqueueSnackbar])

    return (
        <AuthContext.Provider value={session}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(AuthContext)
}