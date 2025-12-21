<script>
	import { onMount } from 'svelte';
	import { animate, onScroll } from 'animejs';

	import photo_profile from '$lib/assets/pp2.png';

	onMount(() => {
		// animasi teks
		document.querySelectorAll('.geser').forEach((el) => {
			animate(el, {
				translateX: ['-150%', 0],
				autoplay: onScroll({
					enter: 'bottom 85%'
				})
			});
		});

		//animasi hiasan-bola
		animate('.hiasan-bola', {
			scale: [0.5, 1],
			autoplay: onScroll({
				enter: 'bottom 85%'
			})
		});
	});
</script>

<section class="container overflow-x-hidden">
	<h2 class="geser p-7 pb-3 text-3xl font-bold">Tentang <br />Saya</h2>

	<div class="px-7 text-sm">
		<article class="my-2">
			<h3 class="geser mb-2 text-lg font-semibold">singkat</h3>
			<p class="geser">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae non molestias facilis
				itaque corporis quia!
			</p>
		</article>
		<hr />
		<article class="my-2">
			<h3 class="geser mb-2 text-lg font-semibold">pendidikan</h3>
			<ul class="geser list-disc pl-4">
				<li>Mozilla developers</li>
				<li>FreeCodeCamp</li>
				<li>Belajar dari YouTube</li>
				<li>Belajar dari Model AI</li>
			</ul>
		</article>
		<hr />
		<article class="my-2">
			<h3 class="geser mb-2 text-lg font-semibold">Soft Skills</h3>
			<ul class="geser list-disc pl-4">
				<li>Kerja Tim</li>
				<li>Terorganisir</li>
			</ul>
		</article>
	</div>

	<picture class="relative block flex h-72 w-screen justify-center">
		<!--gambar utama-->
		<img
			src={photo_profile}
			alt=""
			class="peer absolute bottom-0 w-72 grayscale hover:grayscale-50"
		/>
		<!--hiasan bawah gambar-->
		<div
			class="hiasan-bola absolute top-5 -z-10 size-1 h-58 w-58 rounded-full bg-sky-950 peer-hover:scale-110"
		></div>
		<div class="absolute -bottom-0 h-8 w-full bg-gradient-to-b from-transparent to-slate-50"></div>
	</picture>
</section>
