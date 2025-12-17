<script>
	import photo_profile from '$lib/assets/pp2.png';
</script>

<section class="overflow-x-hidden">
	<h2 class="p-7 pb-3 text-3xl font-bold">Tentang <br />Saya</h2>

	<div class="px-7 text-sm">
		<article class="my-2">
			<h3 class="mb-2 text-lg font-semibold">singkat</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae non molestias facilis
				itaque corporis quia!
			</p>
		</article>
		<hr />
		<article class="my-2">
			<h3 class="mb-2 text-lg font-semibold">pendidikan</h3>
			<ul class="list-disc pl-4">
				<li>Mozilla developers</li>
				<li>FreeCodeCamp</li>
				<li>Belajar dari YouTube</li>
				<li>Belajar dari Model AI</li>
			</ul>
		</article>
		<hr />
		<article class="my-2">
			<h3 class="mb-2 text-lg font-semibold">Soft Skills</h3>
			<ul class="list-disc pl-4">
				<li>Kerja Tim</li>
				<li>Terorganisir</li>
			</ul>
		</article>
	</div>

	<picture class="relative flex justify-center block h-72 w-screen">
		<!--gambar utama-->
		<img src={photo_profile} alt="" class="absolute bottom-0 w-72 grayscale" />
		<!--hiasan bawah gambar-->
		<div class="absolute top-5 -z-10 h-58 w-58 rounded-full bg-sky-950"></div>
		<div class="absolute -bottom-0 w-full h-8 bg-gradient-to-b from-transparent to-slate-50"></div>
	</picture>
</section>
