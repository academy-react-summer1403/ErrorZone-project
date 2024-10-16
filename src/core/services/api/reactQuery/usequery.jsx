import { useQuery } from "@tanstack/react-query";

export const usequery = (queryKey, apiAddress) => {
    const { data, isError, isLoading } = useQuery({
        queryKey: [queryKey],
    })

    if (isError) alert("Fetching is onSuccessfull");
    if (isLoading) <div> "Loading" </div>

    return data;
}