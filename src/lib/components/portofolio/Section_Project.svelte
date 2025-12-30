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
			des: 'belajar local storage. studi kasus "to do list", dengan konsep Buat, Edit, Selesai, Buang. sesederhana itu. <br> 1. HTML 2.CSS 3.JAVASCRIPT',
			icon: 'Todolist',
			link: 'https://fidih.github.io/to-do-list-simple/'
		},
		{
			judul: 'LandingPage Nefafi',
			des: 'Menerapkan hasil pembelajaran dengan praktik seefesien mungkin, studi kasus landing page dengan konsep kesederhana untuk performa yang dioptimalkan <br> 1.sveltekit 2.TailwindCss 3.Vite',
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
					loading="lazy"
					src={gambar[project.icon]}
					alt={project.des}
					width="100%"
					height="100%"
				/>
				<div class="mb-14">
					<h3 class="py-2 text-xl font-semibold">{project.judul}</h3>
					<p class="text-sm">
						{@html project.des}.
<br>
						<a href={project.link} target="_blank" class="italic underline text-right block">lihat>></a>
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
