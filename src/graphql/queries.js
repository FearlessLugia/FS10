import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  {
    repositories {
      edges {
        node {
          id
          forksCount
          fullName
          description
          language
          ownerAvatarUrl
          ratingAverage
          reviewCount
          stargazersCount
        }
      }
    }
  }
`

export const ME = gql`
  {
    me {
      id
      username
    }
  }
`

export const GET_REPOSITORY = gql`
  query Repository($id: ID!){
    repository(id: $id) {
      id
      forksCount
      fullName
      description
      language
      ownerAvatarUrl
      ratingAverage
      reviewCount
      stargazersCount
      url
    }
  }
`