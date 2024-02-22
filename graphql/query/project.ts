import { graphql } from "@/gql";

export const getAllProject=graphql(`

query GetAllProject {
    getAllProject {
      id
      title
      desc
      location
      modId
    }
  }
`)