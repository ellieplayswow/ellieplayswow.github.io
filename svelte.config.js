import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
            pages: 'build',
            assets: 'build'
        }),
        //paths: {
        //    base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
        //},
        prerender: {
            entries: ['*']
        },
        alias: {
            '$posts': 'src/posts',
            '$posts/*': 'src/posts/*',
            '$com': 'src/components',
            '$com/*': 'src/components/*',
        }
	},

    preprocess: [mdsvex({ extensions: ['.md'] })],
    extensions: [".svelte", ".md"]
};

export default config;
