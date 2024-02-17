import { graphql } from "../../gql";

export const getCurrentUser=graphql(`#graphql

 query GetCurrentUser($token:userdata!){
    getCurrentUser(token:$token){
      id
      email
      name
    }
 }
`)