<script>
	// icons dijadikan modular
	import { icons } from '@icons/icons.js';

	// data untuk di tampilkan
	const links = [
		{
			app: 'Github',
			link: 'https://github.com/fidih',
			icon: 'Github'
		},
		{
			app: 'Instagram',
			link: 'https://instagram.com/fidfulcin',
			icon: 'Ig'
		},
		{
			app: 'Email',
			link: 'mailto:fidihartato.pidi@gmail.com',
			icon: 'Email'
		},
		{
			app: 'WhatsApp',
			link: 'https://wa.me/6283116293051',
			icon: 'Wa'
		}
	];
</script>

<footer class="w-screen bg-sky-950 p-7 text-slate-50 md:px-20">
	<!--judul footer-->
	<h3 class="text-3xl font-bold">FIDI HARTATO</h3>

	<article class="mt-5">
		<h3>Mari Terhubung</h3>
		<div class="mt-5 flex gap-3 text-sm">
			<!--loop data yang ditampilkan-->
			{#each links as link}
				<a href={link.link} target="_blank" class="hover:translate-y-2">
					<!--render icoms-->
					<svelte:component this={icons[link.icon]} />
					{link.app}
				</a>
			{/each}
		</div>
	</article>
</footer>
