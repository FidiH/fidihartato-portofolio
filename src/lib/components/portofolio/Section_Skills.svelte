<script>
  import {icons} from "@icons/icons.js"
  let skills = [{
  skill: "HTML",
  present: 80,
  icon: "Html"
  }, {
  skill: "CSS",
  present: 75,
  icon: "Css"
  }, {
  skill: "Js",
  present: 50,
  icon: "Js"
  }, {
  skill: "TailwindCss",
  present: 65,
  icon: "Tailwindcss"
  }, {
  skill: "Sveltekit",
  present: 30,
  icon: "Svelte"
  }, {
  skill: "Git",
  present: 70,
  icon: "Git"
  }, {
  skill: "Desain",
  present: 50,
  },
  ]
</script>

<section class="p-7">

  <h2 class="text-3xl font-bold py-5">Keahlihan <br>Dasar</h2>

  {#each skills as skl}
  <div class="w-full mt-7">
    <p >{skl.skill}|{skl.present}%</p>

    <div class="relative h-8 flex mt-1 items-center">
      <div class="absolute bg-sky-950 rounded-full p-2 ">
        <svelte:component this={icons[skl.icon]} />
      </div>
      <div style="width: {skl.present}%" class="h-3 rounded-xl bg-sky-950 my-4"></div>
    </div>
  </div>
  {/each}

</section>