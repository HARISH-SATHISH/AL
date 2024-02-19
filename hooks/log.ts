
import {graphQLClient} from "@/clients/api"
import { getAllLogs } from "@/graphql/query/log"
import { getCurrentUser } from "@/graphql/query/user"
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import  {Logdata, Userdata} from "@/gql/graphql"
import { createLog } from "@/graphql/mutation/log"

export const useGetAllLogs=()=>{
    const query=useQuery<any>({
        queryKey:["all-logs"],
        queryFn:async ()=>await graphQLClient.request(getAllLogs)
    })
    return {...query,logs:query.data?.getAllLogs}
}


export const useCreateLog=()=>{
    const queryclient=useQueryClient()
    const mutation=useMutation({
      mutationFn: (payload:Logdata)=>graphQLClient.request(createLog,{createLogPayload2:payload}),
      
      onSuccess:async (payload)=>{
     
       window.alert("log created")
  }})
    return mutation
  }