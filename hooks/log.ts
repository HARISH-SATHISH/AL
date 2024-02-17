
import {graphQLClient} from "@/clients/api"
import { getAllLogs } from "@/graphql/query/log"
import { getCurrentUser } from "@/graphql/query/user"
import {useQuery} from '@tanstack/react-query'
import  {Userdata} from "@/gql/graphql"

export const useGetAllLogs=()=>{
    const query=useQuery<any>({
        queryKey:["all-logs"],
        queryFn:async ()=>await graphQLClient.request(getAllLogs)
    })
    return {...query,logs:query.data?.getAllLogs}
}

