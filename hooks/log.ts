import {graphQLClient} from "@/clients/api"
import { getAllLogs } from "@/graphql/query/log"
import {useQuery} from '@tanstack/react-query'

export const useGetAllLogs=()=>{
    const query=useQuery({
        queryKey:["all-logs"],
        queryFn:()=>graphQLClient.request(getAllLogs)
    })
    return {...query,logs:query.data?.getAllLogs}
}