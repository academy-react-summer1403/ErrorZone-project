import { useQuery } from "@tanstack/react-query"

export const usequeryy = (queryKey) => {
    const {data, isLoading, isError} = useQuery({
        queryKey: [queryKey]
    })

    if(isLoading) return <div>loading ...</div>;
    if(isError) return <div>Error</div>;

    return data;
}