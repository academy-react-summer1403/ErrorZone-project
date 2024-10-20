import { Mutation, QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";

const queryclient = useQueryClient();

export const updateQuery = (mutationKey) => {
  const { mutate, inError, isPending } = useMutation({
    mutationKey: [mutationKey],
    mutationFn: () => queryclient.invalidateQueries(),
  });
  
};
export default 
