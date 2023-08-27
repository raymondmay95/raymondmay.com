import { PropsWithChildren, createContext, useContext, useReducer } from "react";
import { User, getAuth, onAuthStateChanged } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from "./config";

// -------------------
const app = initializeApp(firebaseConfig)
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
    isAutherized: boolean,
    isInitiated: boolean
}

const InitialState: AuthSessionState = {
    user: null,
    isAutherized: false,
    isInitiated: false
}

const AuthContext = createContext(InitialState)

function authReducer(session: AuthSessionState, action: AuthSessionAction) {
    switch (action.type) {
        case AuthSessionActionKind.AUTHORIZE:
            return {
                ...session,
                user: action.payload,
                isAutherized: true,
            };
        case AuthSessionActionKind.DEAUTHORIZE:
            return {
                ...session,
                user: null,
                isAutherized: false
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

    onAuthStateChanged(Auth,
        (user) => {
            _initialize()
            if (user) {
                _login(user)
            } else {
                session.isAutherized && _logout()
            }
        },
        (error) => {
            console.error('auth error:', error)
        }
    )

    return (
        <AuthContext.Provider value={session}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(AuthContext)
}