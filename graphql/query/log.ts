import { graphql } from "../../gql";

export const getAllLogs=graphql(`

query GetAllLogs {
    getAllLogs {
      id
      note
      obj
      author {
        imgUrl
      }
    }
  }
`)