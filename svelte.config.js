import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	paths: {
		base: dev ? '' : '/github-as-blog-sandbox'
	},
	kit: {
		adapter: adapter({
			strict: false
		})
	}
};

export default config;
