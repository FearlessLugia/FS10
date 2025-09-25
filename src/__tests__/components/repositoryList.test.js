import { render, fireEvent, screen, within } from '@testing-library/react-native'
import { RepositoryListContainer } from '../../components/RepositoryList'


describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd'
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4'
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd'
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4'
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ=='
          }
        ]
      }

      // Add your test code here
      render(<RepositoryListContainer repositories={repositories} />)

      // screen.debug()

      const repositoryItems = screen.getAllByTestId('repositoryItem')
      expect(repositoryItems.length).toBe(2)

      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems

      {
        const fullName = within(firstRepositoryItem).getByTestId('fullName')
        expect(fullName).toHaveTextContent('jaredpalmer/formik')
        const description = within(firstRepositoryItem).getByTestId('description')
        expect(description).toHaveTextContent('Build forms in React, without the tears')
        const language = within(firstRepositoryItem).getByTestId('language')
        expect(language).toHaveTextContent('TypeScript')
        const stargazersCount = within(firstRepositoryItem).getByTestId('stargazersCount')
        expect(stargazersCount).toHaveTextContent('21.9k')
        const forksCount = within(firstRepositoryItem).getByTestId('forksCount')
        expect(forksCount).toHaveTextContent('1.6k')
        const reviewCount = within(firstRepositoryItem).getByTestId('reviewCount')
        expect(reviewCount).toHaveTextContent('3')
        const ratingAverage = within(firstRepositoryItem).getByTestId('ratingAverage')
        expect(ratingAverage).toHaveTextContent('88')
      }

      {
        const fullName = within(secondRepositoryItem).getByTestId('fullName')
        expect(fullName).toHaveTextContent('async-library/react-async')
        const description = within(secondRepositoryItem).getByTestId('description')
        expect(description).toHaveTextContent('Flexible promise-based React data loader')
        const language = within(secondRepositoryItem).getByTestId('language')
        expect(language).toHaveTextContent('JavaScript')
        const stargazersCount = within(secondRepositoryItem).getByTestId('stargazersCount')
        expect(stargazersCount).toHaveTextContent('1.8k')
        const forksCount = within(secondRepositoryItem).getByTestId('forksCount')
        expect(forksCount).toHaveTextContent('69')
        const reviewCount = within(secondRepositoryItem).getByTestId('reviewCount')
        expect(reviewCount).toHaveTextContent('3')
        const ratingAverage = within(secondRepositoryItem).getByTestId('ratingAverage')
        expect(ratingAverage).toHaveTextContent('72')
      }
    })
  })
})