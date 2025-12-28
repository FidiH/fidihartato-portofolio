<script>
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
  <title>Fidi hartato portofolio</title>
  <meta name="description" content="portofolio fidi hartato, eksplore hal dan tampilkan">
  <meta name="keywords" content="portofolio, smk lppm ri 2 kedungreja, siswa, fidi, fidi hartato, fidi smk">
  <meta name="author" content="Fidi Hartato">
</svelte:head>

{@render children()}
