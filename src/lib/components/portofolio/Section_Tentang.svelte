<script>
  import photo_profile from "$lib/assets/pp2.png"
</script>

<section class="overflow-x-hidden">

  <h2 class="text-3xl p-7 pb-3 font-bold">Tentang <br>Saya</h2>
  
  <div class="px-7 text-sm">
  <article class="my-2">
    <h3 class="text-lg font-semibold mb-2">singkat</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae non molestias facilis itaque corporis quia!
    </p>
  </article>
  <hr>
  <article class="my-2">
    <h3 class="text-lg font-semibold mb-2">pendidikan</h3>
    <ul class="list-disc pl-4">
      <li>Mozilla developers</li>
      <li>FreeCodeCamp</li>
      <li>Belajar dari YouTube</li>
      <li>Belajar dari Model AI</li>
    </ul>
  </article>
  <hr>
  <article class="my-2">
    <h3 class="text-lg font-semibold mb-2">Soft Skills</h3>
    <ul class="list-disc pl-4">
      <li>Kerja Tim</li>
      <li>Terorganisir</li>
    </ul>
  </article>
  </div>

  <picture class="w-screen h-72 block relative">
    <!--gambar utama-->
    <img
    src={photo_profile}
    alt=""
    class="absolute grayscale bottom-0 w-72"/>
  <!--hiasan bawah gambar-->
    <div class="absolute top-5 left-5 w-58 h-58 bg-sky-950 rounded-full -z-10"></div>
  </picture>
</section>