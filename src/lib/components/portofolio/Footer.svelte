<script>
	import { icons } from '@icons/icons.js';
	const links = [
		{
			app: 'Github',
			link: '/',
			icon: 'Github'
		},
		{
			app: 'Instagram',
			link: '/',
			icon: 'Ig'
		},
		{
			app: 'Email',
			link: '/',
			icon: 'Email'
		},
		{
			app: 'WhatsApp',
			link: '/',
			icon: 'Wa'
		}
	];
</script>

<footer class="w-screen bg-sky-950 p-7 text-slate-50">
	<h3 class="text-3xl font-bold">FIDI HARTATO</h3>

	<article class="mt-5">
		<h3>Mari Terhubung</h3>
		<div class="mt-5 flex gap-3 text-sm">
			{#each links as link}
				<a href="/" class="hover:translate-y-2">
					<svelte:component this={icons[link.icon]} />
					{link.app}
				</a>
			{/each}
		</div>
	</article>
</footer>
