// core module
import path from 'path';

import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	resolve: {
		// alias path
		alias: {
			'@portofolio': path.resolve('./src/lib/components/portofolio'),
			'@icons': path.resolve('./src/lib/components/icons'),
		}
	}
});
