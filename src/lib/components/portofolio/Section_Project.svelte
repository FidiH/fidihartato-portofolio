<script>
  import {onMount} from "svelte"
  import {animate, onScroll} from "animejs"
	import { gambar } from '$lib/assets/gambar.js';
  
  onMount(() => {
    
    // animasi bok projek 
    document.querySelectorAll(".geser-atas").forEach(el => {
      animate(el, {
        scale: [0,1],
        autoplay: onScroll({
          enter: "bottom 80%",
        })
      })
      
    })
    
    
  })
  
  
	let projects = [
		{
			judul: 'Desain Sederhana',
			des: 'mengutamakan kebersihan dan keterbacaan dengan sudut pandang apa adanya',
			icon: 'Desain1'
		},
		{
			judul: 'To Do List Simple',
			des: 'To Do List sederhana, mengutamakan fungsi dengan lokal penyimpanan',
			icon: 'Todolist'
		},
		{
			judul: 'LandingPage Nefafi',
			des: 'desain minimalits dan bersih, tampil dengan keterbacaan',
			icon: 'Nefafi'
		}
	];
</script>

<section class="p-7 pt-14">
	<h2 class="text-3xl font-bold">Projek <br />Sederhana</h2>

	<div class="relative pt-10">
		{#each projects as project}
			<div class="geser-atas bg sticky aspect-[4/5] top-14 bg-slate-50">
				<img
					class="rounded-lg shadow grayscale-50 hover:grayscale-0"
					src={gambar[project.icon]}
					alt={project.des}
				/>
				<div>
					<h3 class="py-2 text-xl font-semibold">{project.judul}</h3>
					<p class="text-sm">
						{project.des}. <a href="" class="italic underline">lihat>></a>
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
