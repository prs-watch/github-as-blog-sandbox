import adapter from '@sveltejs/adapter-static';

/** npm run build --dev */
const dev = process.argv.includes('dev');

console.log(dev ? '' : '/github-as-blog-sandbox');

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
