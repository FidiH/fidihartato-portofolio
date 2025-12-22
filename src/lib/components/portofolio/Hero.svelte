<script>
	import { onMount } from 'svelte';
	import { animate, onScroll } from 'animejs';

	import photo_profile from '$lib/assets/pp.png';

	onMount(() => {
		animate('#foto', {
			delay: 500,
			height: '25rem',
			easing: 'easeOutQuad'
		});
		animate('#hiasan1', {
			width: '1rem',
			delay: 2000,
			easing: 'easeOutQuad'
		});
		animate('#hiasan2', {
			width: '90%',
			easing: 'easeOutQuad'
		});
		animate('.text', {
			opacity: [0, 1],
			delay: 1000,
			easing: 'easeOutQuad'
		});
	});
</script>

<section class="relative h-screen overflow-hidden py-10">
	<div class="relative px-7 pt-7 pl-14">
		<div class="text opacity-0">
			<h1>
			  <span class="text-sm">Hai, Saya</span> <br>
			  <span class="text-6xl leading-12 font-bold">FIDI<br />HARTATO</span>
			</h1>
			<p class="mt-2 text-sm">
				Hal yang terkadang terlihat besar dan kompleks itu sebenarnya Berawal dari hal yang sangat sederhana yang di kembangkan.
			</p>

			<!--cta-->
			<a
				href="#tentang"
				class="absolute z-30 mt-4 block w-fit cursor-pointer rounded-xl bg-sky-950 px-3 py-2 text-sm font-bold text-slate-50 transition-all hover:translate-y-2"
				>Tentang saya</a
			>
		</div>

		<!--hiasan-->
		<div id="hiasan1" class="absolute top-3 left-0 h-32 w-0 rounded-r-xl bg-sky-950"></div>
	</div>

	<picture class="relative block h-96 w-screen">
		<!--gambar utama-->
		<img
			id="foto"
			src={photo_profile}
			alt=""
			class="peer absolute -right-10 bottom-0 h-0 grayscale transition-all"
		/>
		<!--hiasan bawah gambar-->
		<div
			id="hiasan2"
			class="absolute right-0 bottom-0 -z-10 h-16 w-[0%] rounded-l-xl bg-sky-950 peer-hover:h-20"
		></div>
	</picture>
</section>
