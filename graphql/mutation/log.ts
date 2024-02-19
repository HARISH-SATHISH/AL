import { graphql } from "../../gql";

export const createLog = graphql(`
mutation CreateLog($createLogPayload2: logdata) {
    createLog(payload: $createLogPayload2) {
      author {
        id
      }
      media
      note
      obj
    }
  }
  `)