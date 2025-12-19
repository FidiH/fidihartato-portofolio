<script>

  import {gambar} from "$lib/assets/gambar.js"

  let projects = [
  {
  judul: "Desain Sederhana",
  des: "mengutamakan kebersihan dan keterbacaan dengan sudut pandang apa adanya",
  icon: "Desain1"
  },
  {
  judul: "To Do List Simple",
  des: "To Do List sederhana, mengutamakan fungsi dengan lokal penyimpanan",
  icon: "Todolist"
  },
  {
  judul: "LandingPage Nefafi",
  des: "desain minimalits dan bersih, tampil dengan keterbacaan",
  icon: "Nefafi"
  },
  ]

</script>

<section class="p-7 pt-14">

  <h2 class="font-bold text-3xl">Projek <br>Sederhana</h2>

  <div class="pt-10 relative">

    {#each projects as project}
    <div class="pb-10 sticky top-10 bg bg-slate-50">
      <img class="rounded-lg shadow grayscale-50 hover:grayscale-0" src={gambar[project.icon]} alt={project.des}>
      <div>
        <h3 class="font-semibold text-xl py-2">{project.judul}</h3>
        <p class="text-sm">
          {project.des}. <a href="" class="italic underline">lihat>></a>
        </p>
      </div>
    </div>
    {/each}

  </div>

</section>