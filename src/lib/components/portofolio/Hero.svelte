<script>
	import { onMount } from 'svelte';
	import { animate } from 'animejs';

	import photo_profile from '$lib/assets/pp.webp';

	onMount(() => {
		animate('#foto', {
			height: '25rem',
		});
		animate('#hiasan1', {
			translateX: ["-110%", 0],
		});
		animate('#hiasan2', {
			translateX: ["150%", 0],
			delay: 100,
		});
		animate('.text', {
			opacity: [0, 1],
			duration: 490,
		});
	});
</script>

<section class="relative overflow-hidden py-10 md:flex">
	<div class="relative px-7 pt-7 pl-14 md:pl-20">
		<!--teks utama-->
		<div class="text opacity-0">
			<h1>
			  <span class="text-sm md:text-base">Hai, Saya</span> <br>
			  <span class="text-6xl leading-12 font-bold">FIDI<br />HARTATO</span>
			</h1>
			<p class="mt-2 text-sm md:text-base">
				Hal yang terkadang terlihat besar dan kompleks itu sebenarnya Berawal dari hal yang sangat sederhana yang di kembangkan.
			</p>
			<!--cta-->
			<a
				href="#tentang"
				class="absolute z-30 mt-4 block w-fit cursor-pointer rounded-xl bg-sky-950 px-3 py-2 text-sm font-bold text-slate-50 transition-all hover:translate-y-2 md:text-base"
				>Tentang saya</a
			>
		</div>

		<!--hiasan-->
		<div id="hiasan1" class="absolute top-3 left-0 h-32 w-7 rounded-r-xl bg-sky-950 md:"></div>
	</div>
	<picture class="relative block h-96 w-screen">
		<!--gambar utama-->
		<img
			id="foto"
			src={photo_profile}
			alt=""
			class="peer absolute -right-10 bottom-0 h-0 grayscale transition-all md:right-10"
		/>
		<!--hiasan bawah gambar-->
		<div
			id="hiasan2"
			class="absolute right-0 bottom-0 -z-10 h-16 w-[90%] rounded-l-xl bg-sky-950 peer-hover:h-20 md:w-[150%]"
		></div>
	</picture>
</section>
