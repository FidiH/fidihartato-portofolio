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
				Saya siswa kelas 11 di smk aaa, mengambil jurusan teknik jaringan komputer dan teknologi, namun saya memilih jurusan tersebut bukan karena minat melainkan karena penasaran pada jaringan.
			</p>
			<p class="geser pb-2">
				Disisi lain saya juga mencari hal-hal lain, bisa di katakan hampir 95% hal-hal yang saya tahu berawal dari belajar otodidak dan learning path lewat internet.
			</p>
		</article>
		<hr class="geser" />
		<article class="my-5">
			<h3 class="geser mb-2 text-lg font-semibold">Jalur belajar (Pendidikan)</h3>
			<p class="geser pb-2">Saya percaya bahwa ilmu tersebar luas dan gratis di internet bagi siapa pun yang mau mencarinya.
			</p>
			<p class="geser pb-2">Kalau ada yang bikin saya penasaran, saya langsung search tutorialnya di YouTube. Kalau video kurang detail, saya ulik di artikel yang bertebaran.
			</p>
			<p class="geser pb-2">Di era sekarang, saya nggak cuma baca. Saya gabungin referensi dari YouTube dan artikel tadi buat dijadiin bahan diskusi bareng AI. Saya bikin prompt sendiri supaya bisa dapet modul belajar yang pas dan sistematis buat saya pahami.
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
