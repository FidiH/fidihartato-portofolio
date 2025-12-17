<script>
  import photo_profile from "$lib/assets/pp.png"
</script>

<section class="relative py-10 overflow-x-hidden">

  <div class="relative p-7 pl-14">
    <h1 class="text-6xl leading-12 font-bold">Fidi<br>Hartato</h1>
    <p class="text-sm mt-2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nobis eum rerum corrupti assumenda ex dignissimos commodi magni quas similique.
    </p>
    
    <!--cta-->
    <button
      class="py-2 px-5 mt-5 font-bold text-sm bg-sky-950 text-slate-50 rounded-xl"
      >Tentang saya</button>
    
    <!--hiasan-->
    <div class="w-4 h-32 bg-sky-950 absolute left-0 top-5 rounded-r-xl"></div>
  </div>

  <picture class="w-screen h-72 block relative">
    <!--gambar utama-->
    <img
    src={photo_profile}
    alt=""
    class="absolute grayscale -right-10 bottom-0 w-72"
    />
    <!--hiasan bawah gambar-->
  <div class="absolute bottom-0 right-0 w-[90%] h-20 bg-sky-950 rounded-l-xl -z-10"></div>
</picture>


</section>