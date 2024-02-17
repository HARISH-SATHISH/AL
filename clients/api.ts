import {GraphQLClient} from 'graphql-request'

export const graphQLClient =new GraphQLClient("http://localhost:8000/graphql")


// import { GraphQLClient} from 'graphql-request'

// const isclient= typeof window !== "undefined"

// export const graphqlClient=new GraphQLClient("http://localhost:8000/graphql",{
//     headers: () => ({
//       Authorization: isclient? `Bearer ${window.localStorage.getItem("__twitter_token")}`
//         : "",
//     }),
//   }
// )