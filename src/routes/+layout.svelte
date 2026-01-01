<script>
  // import css
  import './layout.css';
  
  // 
  import icon from "$lib/assets/pp.webp"
  import graph from "$lib/assets/graph.webp"

  let { children } = $props();
</script>

<svelte:head>
  <!--head seperti html-->
  <link rel="icon" type="image/x-icon" href={icon}>
  <title>Fidi Hartato | Portofolio</title>
  <meta name="title" content="fidihartato | Portofolio Siswa TJKT SMK LPPM RI 2 Kedungreja">
  <meta name="description" content="Saya adalah siswa kelas XI SMK LPPM RI 2 Kedungreja, jurusan Teknik Jaringan Komputer dan Telekomunikasi. Selamat datang di portofolio digital saya.">
  <meta name="keywords" content="fidi, fidi hartato, fidi smk, Portofolio fidi, fidi lppm ri 2, TJKT, SMK LPPM RI 2 Kedungreja">
  <meta name="author" content="Fidi Hartato">
  <meta name="robots" content="index, follow">
  <meta name="language" content="Indonesian">
  <meta name="geo.region" content="ID">
  <meta name="revisit-after" content="7 days">

  <link rel="canonical" href="https://fidihartato.my.id/">
  <meta property="og:type" content="website">
  
  <meta property="og:url" content="https://fidihartato.my.id/"> <meta property="og:title" content="fidihartato | Portofolio">
  <meta property="og:description" content="Saya adalah siswa kelas XI SMK LPPM RI 2 Kedungreja, jurusan Teknik Jaringan Komputer dan Telekomunikasi.">
  <meta property="og:image" content={graph}> <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://fidihartato.my.id/">
  <meta property="twitter:title" content="fidihartato | Portofolio Siswa">
  <meta property="twitter:description" content="Saya adalah siswa kelas XI SMK LPPM RI 2 Kedungreja, jurusan Teknik Jaringan Komputer dan Telekomunikasi.">
  <meta property="twitter:image" content={graph}>

  <meta name="theme-color" content="#2faaff">

</svelte:head>

<!--merender semua yang dikirimkan page.svelte-->
{@render children()}