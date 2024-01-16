import { useContext } from "react";
import { AuthContext } from "../components/pages/Providers/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;