import { configureWunderGraphServer } from '@wundergraph/sdk/server';

export default configureWunderGraphServer(() => ({
	hooks: {
		queries: {
			Dragons: {
				mutatingPostResolve: async (hook) => {
					if (hook.response.errors) return hook.response;
					hook.response.data?.spacex_dragons?.push({
						name: process.env.foo || 'test',
						active: true,
					});
					return hook.response;
        },
      },
		},
		mutations: {},
	},
	graphqlServers: [],
}));
