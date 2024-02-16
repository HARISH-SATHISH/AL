import { graphql } from "../../gql";

export const getAllLogs=graphql(`

query GetAllLogs {
    getAllLogs {
      note
      obj
      author {
        imgUrl
      }
    }
  }
`)