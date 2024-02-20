import {graphql} from '../../gql'

export const getAllBlogs = graphql(`
query GetAllBlogs {
    getAllBlogs {
      author {
        id
      }
      content
      title
      id
    }
  }`)
