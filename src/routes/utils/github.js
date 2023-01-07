/**
 * utils for manage Github data.
 */
// Note: targets specific FILE for SvelteKit static adapter
import { ApolloClient, InMemoryCache } from '@apollo/client/core/core.cjs';
import 'cross-fetch/dist/node-polyfill.js';
import { GH_API_TOKEN } from '$env/static/private';

// consts
const APOLLO = new ApolloClient({
	uri: 'https://api.github.com/graphql',
	headers: { authorization: `Bearer ${GH_API_TOKEN}` },
	cache: new InMemoryCache()
});

// util method to execute GraphQL query
export const executeQuery = async (q) => {
	return await APOLLO.query({ query: q });
};
