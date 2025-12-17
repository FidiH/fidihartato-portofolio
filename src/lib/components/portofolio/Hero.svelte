<script>
	import photo_profile from '$lib/assets/pp.png';
</script>

<section class="relative overflow-x-hidden py-10">
	<div class="relative px-7 pt-7 pl-14">
		<h1 class="text-6xl leading-12 font-bold">FIDI<br />HARTATO</h1>
		<p class="mt-2 text-sm">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nobis eum rerum corrupti
			assumenda ex dignissimos commodi magni quas similique.
		</p>

		<!--cta-->
		<a
			href="#tentang"
			class="mt-4 block w-fit rounded-xl bg-sky-950 px-4 py-2 text-sm font-bold text-slate-50"
			>Tentang saya</a
		>

		<!--hiasan-->
		<div class="absolute top-3 left-0 h-32 w-4 rounded-r-xl bg-sky-950"></div>
	</div>

	<picture class="relative block h-72 w-screen">
		<!--gambar utama-->
		<img src={photo_profile} alt="" class="absolute -right-10 bottom-0 w-72 grayscale" />
		<!--hiasan bawah gambar-->
		<div class="absolute right-0 bottom-0 -z-10 h-20 w-[90%] rounded-l-xl bg-sky-950"></div>
	</picture>
</section>
