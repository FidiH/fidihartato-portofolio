<script>
	import { onMount } from 'svelte';
	import { animate, onScroll } from 'animejs';
	import { icons } from '@icons/icons.js';

	let skills = [
		{
			skill: 'HTML',
			paham: 'Struktur dasar semantik dan form',
			icon: 'Html'
		},
		{
			skill: 'CSS',
			paham: 'Dasar flexbox',
			icon: 'Css'
		},
		{
			skill: 'Js',
			paham: 'Dasar DOM',
			icon: 'Js'
		},
		{
			skill: 'TailwindCss',
			paham: 'Dasar flexbox',
			icon: 'Tailwindcss'
		},
		{
			skill: 'Sveltekit',
			paham: 'Routing, Component',
			icon: 'Svelte'
		},
		{
			skill: 'Git',
			paham: 'Commit, Add, Merge, Branch',
			icon: 'Git'
		},
		{
			skill: 'Desain (minimalits)',
			paham: 'typographi, shape, element',
			icon: 'Hat'
		}
	];

	onMount(() => {
		// box muncul
		document.querySelectorAll('.box').forEach((el) => {
			// muncul kan warna
			animate(el, {
				filter: ['grayscale(100%)', 'grayscale(0)'],
				autoplay: onScroll({
					enter: 'bottom 70%'
				})
			});
			// side up
			animate(el, {
				translateY: [100, 0],
				opacity: [0, 1],
				autoplay: onScroll({
					enter: 'bottom top'
				})
			});
			//#####
		});
		//###
	});
</script>

<section id="skill" class="p-7 md:columns-2 md:px-20">
	<h2 class="pb-5 text-3xl font-bold md:p-0">Keahlihan <br />Dasar dikembangkan</h2>

	{#each skills as skl}
		<div class="box group mt-7 flex items-start rounded-lg bg-sky-950/5 hover:bg-sky-950/20">
			<!--icons-->
			<div class="h-full rounded-lg bg-sky-950 p-3 group-hover:bg-sky-950/50 group-hover:shadow-xl">
				<svelte:component this={icons[skl.icon]} />
			</div>
			<!--pemahaman-->
			<p class="p-4 pl-4 text-sm">
				<strong class="text-lg">{skl.skill}</strong><br />
				{skl.paham}
			</p>
		</div>
	{/each}
</section>
