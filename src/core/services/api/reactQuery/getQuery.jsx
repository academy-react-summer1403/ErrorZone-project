import { useQuery } from "@tanstack/react-query"
import http from "../../interceptor"

export const getQuery = (queryKey, apiAddress) => {
    const { data, isError, isLoading } = useQuery({
        queryKey: [queryKey],
        queryFn: async () => await http.get(apiAddress)
    })

    if (isError) alert("Fetching is onSuccessfull");
    if (isLoading) <div> "Loading" </div>

    return data;
}

export const getQueryFiltterByCount =  (queryKey, apiAddress, count) => {
    const { data, isError, isLoading } = useQuery({
        queryKey: [queryKey],
        queryFn: async () => {
            const res = await http.get(apiAddress)
            return res.filter((el) => el.id <= count);
        }
    })

    if (isError) alert("Fetching is onSuccessfull");
    if (isLoading) <div> "Loading" </div>

    return data;
}

export const getQueryNoApi = (queryKey, queryFn) => {
    const { data, isError, isLoading } = useQuery({
        queryKey: [queryKey],
        queryFn: () => queryFn
    })

    if (isError) alert("Fetching is onSuccessfull");
    if (isLoading) <div> "Loading" </div>

    return data;
}
