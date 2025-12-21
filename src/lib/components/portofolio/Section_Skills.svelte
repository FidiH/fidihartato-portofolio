<script>
	import { onMount } from 'svelte';
	import { animate, onScroll } from 'animejs';
	import { icons } from '@icons/icons.js';

	let skills = [
		{
			skill: 'HTML',
			present: 80,
			icon: 'Html'
		},
		{
			skill: 'CSS',
			present: 75,
			icon: 'Css'
		},
		{
			skill: 'Js',
			present: 50,
			icon: 'Js'
		},
		{
			skill: 'TailwindCss',
			present: 65,
			icon: 'Tailwindcss'
		},
		{
			skill: 'Sveltekit',
			present: 30,
			icon: 'Svelte'
		},
		{
			skill: 'Git',
			present: 70,
			icon: 'Git'
		},
		{
			skill: 'Desain',
			present: 50
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

		// animasi progress
		document.querySelectorAll('.progress').forEach((el) => {
			animate(el, {
				scaleX: [0, 1],
				autoplay: onScroll({
					enter: 'bottom 80%'
				})
			});
		});
	});
</script>

<section class="p-7">
	<h2 class="py-5 text-3xl font-bold">Keahlihan <br />Dasar</h2>

	{#each skills as skl}
		<div class="box group sticky top-5 mt-4 w-full grayscale-90 hover:grayscale-0">
			<p
				class="teks rounded-xl rounded-bl-none bg-slate-50 p-2 group-hover:bg-sky-950 group-hover:text-slate-50"
			>
				{skl.skill}|{skl.present}%
			</p>

			<div class="box-icon relative mt-1 flex h-8 items-center">
				<div
					class="icon absolute z-10 -mt-2 rounded-full bg-sky-950 p-2 group-hover:rounded-t-none"
				>
					<svelte:component this={icons[skl.icon]} />
				</div>
				<div
					style="width:{skl.present}%"
					class="progress my-4 ml-2 h-3 origin-left rounded-xl bg-sky-950"
				></div>
			</div>
		</div>
	{/each}
</section>
