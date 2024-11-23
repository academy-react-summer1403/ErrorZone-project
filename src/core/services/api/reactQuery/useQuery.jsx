import { useQuery } from "@tanstack/react-query";

export const usequery = (queryKey, variable) => {
    const { data, isError, isLoading } = useQuery({
        queryKey: variable ? [queryKey, variable] : [queryKey],
    })

    if (isError) <div>"Fetching is onSuccessfull"</div>;
    if (isLoading) <div> "Loading" </div>;

    return data;
}