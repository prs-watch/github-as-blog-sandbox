import adapter from '@sveltejs/adapter-static';

/** npm run build --dev */
const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			strict: false
		}),
		paths: {
			base: dev ? '' : '/github-as-blog-sandbox'
		}
	}
};

export default config;
