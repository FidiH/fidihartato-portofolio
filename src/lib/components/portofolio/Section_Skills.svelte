<script>
  let skills = [
  {
  skill: "HTML",
  present: 80
  },
  {
  skill: "CSS",
  present: 75
  },
  {
  skill: "Js",
  present: 50
  },
  {
  skill: "TailwindCss",
  present: 65
  },
  {
  skill: "Sveltekit",
  present: 30
  },
  {
  skill: "Git",
  present: 70
  },
  {
  skill: "Desain",
  present: 50
  },
  ]
</script>

<section class="p-7">

  <h2 class="text-3xl font-bold">Keahlihan <br>Dasar</h2>

  {#each skills as skl}
  <div class="w-full mt-3">
    <p>{skl.skill}|{skl.present}%</p>
    <div style="width: {skl.present}%" class="h-3 rounded-xl bg-sky-950 mb-4"></div>
  </div>
  {/each}

</section>