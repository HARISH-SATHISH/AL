export const createBlog=`#graphql
mutation CreateBlog($payload: blogData!) {
    createBlog(payload: $payload) {
      title
      content
    }
  }

`