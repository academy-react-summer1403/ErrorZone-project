import { useQuery } from "@tanstack/react-query";

export const usequery = (queryKey, variable) => {
    const { data, isError, isLoading } = useQuery({
        queryKey: variable ? [queryKey, variable] : [queryKey],
    })

    if (isError) alert("Fetching is onSuccessfull");
    if (isLoading) <div> "Loading" </div>;

    return data;
}