<script>
	// untuk js klient
	import { onMount } from 'svelte';

	// modul animasi
	import { animate, onScroll } from 'animejs';

	// import gambar
	import { gambar } from '$lib/assets/gambar.js';

	// js klient
	onMount(() => {
		// animasi bok projek, fade
		document.querySelectorAll('.geser-atas').forEach((el) => {
			animate(el, {
				opacity: [0, 1],
				duration: 490,
				// scroll ketika scrool mencapai 80% di layar
				autoplay: onScroll({
					enter: 'bottom 80%'
				})
			});
		});
	});

	// data yang ditampilkan
	let projects = [
		{
			judul: 'To Do List Simple',
			des: 'To Do List sederhana, mengutamakan fungsi dengan lokal penyimpanan',
			icon: 'Todolist',
			link: 'https://fidih.github.io/to-do-list-simple/'
		},
		{
			judul: 'LandingPage Nefafi',
			des: 'desain minimalits dan bersih, tampil dengan keterbacaan',
			icon: 'Nefafi',
			link: 'https://nefafi.pages.dev'
		}
	];
</script>

<section id="projek" class="p-7 pt-14 md:p-20">
	<!--judul -->
	<h2 class="text-3xl font-bold">Projek <br />Sederhana</h2>

	<div class="relative pt-10 md:columns-2 md:gap-5">
		<!--loop data yang akan ditampilkan-->
		{#each projects as project}
			<div class="group geser-atas bg sticky top-14 bg-slate-50">
				<img
					class="rounded-lg shadow grayscale group-hover:grayscale-0"
					src={gambar[project.icon]}
					alt={project.des}
				/>
				<div class="mb-14">
					<h3 class="py-2 text-xl font-semibold">{project.judul}</h3>
					<p class="text-sm">
						{project.des}.
						<a href={project.link} target="_blank" class="italic underline">lihat>></a>
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
