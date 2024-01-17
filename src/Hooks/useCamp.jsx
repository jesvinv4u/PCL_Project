import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCamp = () => {
    const axiosSecure = useAxiosSecure();
    const { data: camp = [] } = useQuery({
        queryKey: ['camp'],
        queryFn: async () => {
            const res = await axiosSecure.get('/addCamp');
            return res.data;
        }
    })
    return [camp];
};

export default useCamp;