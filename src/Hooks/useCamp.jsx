import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCamp = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { refetch, data: camp = [] } = useQuery({
        queryKey: ['camp', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/addCamp?email=${user.email}`);
            return res.data;
        }
    })
    return [camp, refetch];
};

export default useCamp;