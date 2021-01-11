import { Query } from './generated/graphql'

export interface GraphQLResult {
    data?: Query
}

/**
 * A simple function to query the GraphQL backend.
 *
 * Example usage:
 * ```ts
 * queryApi(`
 *   query($name: String!) {
 *       repository(name: $name) {
 *           name
 *       }
 *   }
 * `, {
 *     name: "sourcegraph"
 * })
 * ```
 *
 * @param query The [GraphQL query string](https://graphql.org/learn/queries/).
 * @param variables Object with values for any [`$`-variables](https://graphql.org/learn/queries/#variables) used in the query.
 * @returns The result object with the `data` property.
 */
export async function queryApi(
    query: string,
    variables: { [name: string]: any }
): Promise<GraphQLResult> {
    const response = await fetch('https://mini-git.sgdev.org/graphql/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
    })
    return response.json()
}
