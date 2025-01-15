<script>
  import { Link, useLocation } from "svelte-routing";

  // Get the current location (path)
  const location = useLocation();

  // Menu items data
  let menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Galeri", path: "/galeri" },
    { name: "Informasi", path: "/informasi" },
    { name: "Kegiatan", path: "/kegiatan" },
    { name: "Tenaga Pendidik", path: "/tenaga-pendidik" },
    { name: "Kontak", path: "/kontak" },
  ];

  // Active path to control the active menu item
  let activePath = location.pathname;
</script>

<div>
  <!-- Navbar -->
  <nav class="bg-white shadow-md py-4">
    <div class="container mx-auto flex items-center justify-between px-4">
      <div class="flex items-center space-x-4">
        <img
          src="/assets/logo_arafah.png"
          alt="SMPIT Arafah Logo"
          class="h-12 w-12"
        />
        <h1 class="text-blue-700 font-bold text-xl">SMPIT ARAFAH</h1>
      </div>
      <ul class="hidden md:flex space-x-6">
        {#each menuItems as item}
          <li
            class="font-semibold transition-colors duration-200"
            class:text-blue-700={activePath === item.path}
            class:text-gray-500={activePath !== item.path}
          >
            <Link to={item.path} class="hover:text-blue-600">
              {item.name}
            </Link>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
</div>
