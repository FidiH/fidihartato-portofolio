<script>


// logic tampil menu 
let isMenuOpen = false
function toggleMenu(){
  isMenuOpen = !isMenuOpen
}
	
	let navLinkStyle = "w-fit block bg-sky-950 text-slate-50 transition-all hover:bg-slate-50 hover:text-slate-950"
	
// 	import {onMount} from "svelte"
// 	onMount(() => {
	  
// 	  setTimeout(() => {
// 	    info.classList.remove("sm:block")
// 	  }, 5000)
	  
	  
	  
// 	})
	
</script>

<!--<section id="info" class="hidden sm:block fixed left-0 top-3 px-5 py-1 pl-11 text-sm bg-sky-950 text-slate-50 rounded-r-lg">-->
<!--  <p>mode desktop</p>-->
<!--</section>-->

<header class="fixed z-50 w-screen">
  <!--btn tampil menu-->
	<button
	  on:click={toggleMenu}
		class="absolute right-0 cursor-pointer pt-3 pr-5 text-sm leading-4 font-semibold z-40 transition-all hover:tracking-widest md:top-6 md:right-6 md:text-base"
		>-NAVI<br />GASI-
	</button>
	
<nav class="absolute top-0 z-50 w-screen h-screen p-10 md:p-16 text-4xl underline bg-sky-950 leading-12 md:columns-2  {isMenuOpen ? 'right-0' : 'right-full'}">
  <button on:click={toggleMenu} class="absolute top-5 right-5 text-slate-50 text-xl hover:opacity-50 cursor-pointer md:top-9 md:right-9">Tutup</button>
  <a href="/" on:click={toggleMenu} class={navLinkStyle}>Beranda</a>
  <a href="#tentang" on:click={toggleMenu} class={navLinkStyle}>Tentang</a>
  <a href="#projek" on:click={toggleMenu} class={navLinkStyle}>Projek</a>
  <a href="#skill" on:click={toggleMenu}
  class={navLinkStyle}>Skill</a>
  <a href="https://wa.me/6283116293051" target="_blank" class={navLinkStyle}>WhatsApp</a>
  <a href="https://instagram.com/fidfulcin" target="_blank" class={navLinkStyle}>Instagram</a>
  <a href="https://github.com/fidih"  target="_blank" class={navLinkStyle}>GitHub</a>
  <a href="mailto:fidihartato.pidi@gmail.com" target="_blank" class={navLinkStyle}>Email</a>
</nav>
	
</header>