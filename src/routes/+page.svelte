<script>
	// import file di folder src/lib/components/portofolio
	// alias @portofolio
	import Hero from '@portofolio/Hero.svelte';
	import Header from '@portofolio/Header.svelte';
	import Tentang from '@portofolio/Section_Tentang.svelte';
	import Skills from '@portofolio/Section_Skills.svelte';
	import Project from '@portofolio/Section_Project.svelte';
	import Footer from '@portofolio/Footer.svelte';
</script>

<!--komponent yang akan ditampilkan-->
<Header></Header>
<main>
	<Hero></Hero>
	<Tentang></Tentang>
	<Project></Project>
	<Skills></Skills>
</main>
<Footer></Footer>
