<script>
	import { onMount } from 'svelte';
	import { animate, onScroll } from 'animejs';

	import photo_profile from '$lib/assets/pp2.webp';

	onMount(() => {
		// animasi teks
		document.querySelectorAll('.geser').forEach((el) => {
			animate(el, {
				translateX: ['-250%', 0],
				duration: 490,
				autoplay: onScroll({
					enter: 'bottom 85%'
				})
			});
		});

		//animasi hiasan-bola
		animate('.hiasan-bola', {
			scale: [0.5, 1],
			duration: 490,
			autoplay: onScroll({
				enter: 'bottom 85%'
			})
		});
	});
</script>

<section id="tentang" class=" overflow-x-hidden p-7 md:p-20">
	<h2 class="geser pb-3 text-3xl font-bold">Tentang <br />Saya</h2>

	<div class="relative flex-row-reverse md:flex">
		<div class="text-sm md:px-4 md:text-base">

				<p class="geser pb-4">
					Walaupun saya berasal dari jurusan Teknik Jaringan komputer dan telekomunikasi, saya juga tertarik mengeksplorasi dunia web development dan desain.
				</p>
				<p class="geser pb-4">
					Saya menikmati proses mengubah ide menjadi tampilan baik itu website atau desain yang rapi dan mudah dilihat.
				</p>
				<p class="geser pb-4">
					Melalui berbagai project kecil, saya terus belajar mengembangkan kemampuan dasar tentang web dan desain dengan pendekatan yang sederhana dan fungsional.
				</p>

		</div>

		<picture class="w-screen md:mt-5">
			<div class="group relative m-auto flex h-72 w-72 justify-center">
				<!--gambar utama-->
				<img
					src={photo_profile}
					alt="foto profile"
					width="400"
					height="500"
					class="absolute bottom-0 -z-40 w-full grayscale group-hover:grayscale-0"
				/>
				<!--hiasan bawah gambar-->
				<div
					class="hiasan-bola absolute top-5 -z-50 size-1 h-58 w-58 rounded-full bg-sky-950 group-hover:scale-110 md:h-[70%] md:w-[70%]"
				></div>
				<div
					class="absolute -bottom-0 h-8 w-full bg-gradient-to-b from-transparent to-slate-50"
				></div>
			</div>
		</picture>
	</div>
</section>
