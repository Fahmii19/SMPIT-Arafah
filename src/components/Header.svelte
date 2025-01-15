<script>
  import { activeRoute } from "../routes/store";
</script>

<nav class="bg-white shadow-md py-4">
  <div class="container mx-auto flex items-center justify-between px-4">
    <div class="flex items-center space-x-4">
      <img src="/assets/logo_arafah.png" alt="Logo" class="h-12 w-12" />
      <h1 class="text-blue-700 font-bold text-xl">SMPIT Arafah</h1>
    </div>
    <ul class="hidden md:flex space-x-6">
      {#each [{ name: "Beranda", route: "/" }, { name: "Galeri", route: "/galeri" }, { name: "Informasi", route: "/informasi" }, { name: "Kegiatan", route: "/kegiatan" }, { name: "Tenaga Pendidik", route: "/tenaga-pendidik" }, { name: "Kontak", route: "/kontak" }] as item}
        <li class="font-semibold transition-colors duration-200">
          <a
            href={item.route}
            class="hover:text-blue-600"
            class:text-blue-700={$activeRoute === item.route}
            class:text-gray-500={$activeRoute !== item.route}
          >
            {item.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  a.active {
    font-weight: bold;
  }
</style>
