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
					enter: 'bottom 10%'
				})
			});
		});
	});

	// data yang ditampilkan
	let projects = [
		{
			judul: 'Simple To Do List',
			des: 'Project ini merupakan aplikasi web sederhana yang saya buat untuk melatih interaksi dasar menggunakan JavaScript. Fitur yang dibuat meliputi pengolahan data sederhana dan manipulasi elemen. Melalui project ini, saya belajar memahami alur logika, struktur kode, dan interaksi pengguna. <br> Teknologi: HTML, CSS, JavaScript',
			icon: 'Todolist',
			link: 'https://fidih.github.io/to-do-list-simple/'
		},
		{
			judul: 'Simple Landing Page',
			des: 'Project ini fokus pada tampilan visual yang sederhana dan rapi.menekankan pada penggunaan warna, tipografi, dan spacing agar tampilan tetap nyaman digunakan tanpa elemen berlebihan. Dari project ini, saya belajar bahwa desain yang baik tidak harus rumit. <br> Teknologi: Sveltekit, TailwindCss',
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
			<div class="group geser-atas sticky top-14 bg-slate-50 pb-7">
				<img
					class="rounded-lg shadow grayscale group-hover:grayscale-0"
					loading="lazy"
					src={gambar[project.icon]}
					alt={project.des}
					width="100%"
					height="100%"
				/>
				<div class="mb-14">
					<h3 class="pt-5 pb-2 text-xl font-semibold">{project.judul}</h3>
					<p class="text-sm relative">
						{@html project.des}.
<br>
						<a href={project.link} target="_blank" class="italic underline absolute mt-5 right-0 text-right block">lihat>></a>
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
