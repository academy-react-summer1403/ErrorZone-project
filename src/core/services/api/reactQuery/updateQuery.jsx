// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import http from "../../interceptor";

// const queryclient = useQueryClient();

// export const updateQuery = (apiAdd, queryKey) => {
//     const { mutate, isError, isPending } = useMutation({
//       mutationFn: async () => await http.get(apiAdd),
//       // onSuccess: () => queryclient.invalidateQueries([queryKey]),
//       onSuccess: () => queryclient.setQueryData([queryKey], async() => await http.get(apiAdd))
//     });
//     if (isError) return <div>Error</div>;
//     if (isPending) return <div>Pending</div>;
//     return mutate;

// };
