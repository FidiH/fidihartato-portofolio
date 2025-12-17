<script>
	import Wa from './icons/wa.svelte';
	import Ig from './icons/ig.svelte';
	import Email from './icons/email.svelte';
	import Github from './icons/github.svelte';
</script>

<footer class="w-screen bg-sky-950 p-7 text-slate-50">
	<h3 class="text-3xl font-bold">FIDI HARTATO</h3>

	<article class="mt-5">
		<h3>Mari Terhubung</h3>
		<div class="mt-5 flex gap-3 text-sm">
			<a href="">
				<Github></Github>
				Github
			</a>
			<a href="">
				<Ig></Ig>
				Instagram
			</a>
			<a href="">
				<Email></Email>
				Email
			</a>
			<a href="">
				<Wa></Wa>
				WhatsApp
			</a>
		</div>
	</article>
</footer>
