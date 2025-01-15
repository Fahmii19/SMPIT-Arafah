<script>
  import { Link, useLocation } from "svelte-routing";
  import { onDestroy } from "svelte";

  // Mendapatkan lokasi (path) saat ini
  const location = useLocation();

  // Data menu
  let menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Galeri", path: "/galeri" },
    { name: "Informasi", path: "/informasi" },
    { name: "Kegiatan", path: "/kegiatan" },
    { name: "Tenaga Pendidik", path: "/tenaga-pendidik" },
    { name: "Kontak", path: "/kontak" },
  ];

  // Active path untuk menentukan menu yang aktif
  let activePath;

  // Berlangganan ke perubahan lokasi
  const unsubscribe = location.subscribe((loc) => {
    activePath = loc.pathname;
  });

  // Membersihkan langganan ketika komponen di-destroy
  onDestroy(() => {
    unsubscribe();
  });
</script>

<div>
  <!-- Navbar -->
  <nav class="bg-white shadow-md py-4">
    <div class="container mx-auto flex items-center justify-between px-4">
      <!-- Logo dan Judul -->
      <div class="flex items-center space-x-4">
        <img
          src="/assets/logo_arafah.png"
          alt="SMPIT Arafah Logo"
          class="h-12 w-12"
        />
        <h1 class="text-blue-700 font-bold text-xl">SMPIT ARAFAH</h1>
      </div>

      <!-- Menu -->
      <ul class="hidden md:flex space-x-6">
        {#each menuItems as item}
          <li>
            <Link
              to={item.path}
              class="font-semibold transition-colors duration-200
                     {activePath === item.path
                ? 'text-blue-700 underline'
                : 'text-gray-500 hover:text-blue-600'}"
            >
              {item.name}
            </Link>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
</div>
