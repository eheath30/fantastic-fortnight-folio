import { request, gql } from "graphql-request";

const graphqlAPI = process.env.CMS_ENDPOINT

export const getPosts = async () => {
    const QUERY = gql`
    query Assets {
      posts {
        id
        title
        publishDate
        slug
        content {
          html
        }
        coverPhoto {
          url
        }
        author {
          name
          avatar {
            url
          }
        }
      }
    }
  `;
if (graphqlAPI !== undefined) {
  const result = await request(graphqlAPI, QUERY);
  return result.posts;
}
}

export const getPost = async (slug: any) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        id
      title
      slug
      publishDate
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
    }
  }
`;


  if (graphqlAPI !== undefined) {
  const result = await request(graphqlAPI, query, { slug });
  let post = result.post
  return post;
  }
};
