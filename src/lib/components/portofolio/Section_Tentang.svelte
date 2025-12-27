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
		<article class="my-5">
			<h3 class="geser mb-2 text-lg font-semibold">singkat</h3>
			<p class="geser pb-2">
				Saya siswa kelas 11 di smk LPPM RI 2 KEDUNGREJA, mengambil jurusan teknik jaringan komputer dan teknologi, namun saya memilih jurusan tersebut bukan karena minat melainkan karena penasaran pada jaringan.
			</p>
			<p class="geser pb-2">
				Saya adalah seorang Autodidact Learner. Sekitar 95% pengetahuan teknis yang saya miliki saat ini adalah hasil dari eksplorasi mandiri melalui internet, mulai dari membedah video YouTube, membaca artikel teknis, hingga berdiskusi intens dengan AI untuk menyusun modul belajar yang sistematis.
			</p>
		</article>
		<hr class="geser" />
		<article class="my-5">
			<h3 class="geser mb-2 text-lg font-semibold">Filosofi Belajar</h3>
			<p class="geser pb-2">Saya percaya Bagi saya, ilmu itu gratis dan tersebar luas. Batasannya hanyalah seberapa jauh kita mau mencari. Saya tidak hanya mengonsumsi konten, tapi menyaring dan merakitnya menjadi pemahaman yang utuh.
			</p>
		</article>
		<hr class="geser" />
		<article class="my-5">
			<h3 class="geser mb-2 text-lg font-semibold">Soft Skills</h3>
			<p class="geser">
        Karena terbiasa melakukan hal sendiri mulai dari menyiap modul dan sumber ini membuat saya memilih pola pikir yang terorganisir agar memudahkan proses, Meskipun saya suka belajar sendiri, saya tetep bisa diajak kerja bareng dalam tim.
			</p>
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
