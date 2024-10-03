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
