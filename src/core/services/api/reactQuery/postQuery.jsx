import { useMutation } from "@tanstack/react-query";
import http from "../../interceptor";

export const postQuery = (queryKey, apiAddress, data) => {
    const { mutate, isError, isLoading} = useMutation({
        mutationKey:[queryKey],
        mutationFn: async() => await http.post(apiAddress, data)
    })

    if (isError) <div>"Fetching is onSuccessfull"</div>;
    if (isLoading) <div> "Loading" </div>

    return mutate;
}