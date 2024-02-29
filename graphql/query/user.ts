import { graphql } from "../../gql";

export const getCurrentUser=graphql(`#graphql

 query GetCurrentUser($token:userdata!){
    getCurrentUser(token:$token){
      id
      email
      name
    }
 },
 
`)

export const getAllUser =graphql(
  `
  query GetAllUser {
    getAllUser {
      id
      logs {
        id
      }
      blogs {
        id
      }
    }
   
  }
  `
)


export const verifyMod=graphql(`#graphql
query VerifyMod($payload: cred) {
  verifyMod(payload: $payload) {
    id
  }
}
`)