<script>
  import { Router, Route } from "svelte-routing";
  import { activeRoute } from "./routes/store"; // Import store to manage active route
  import { onMount } from "svelte";

  // Import your page components
  import Home from "./pages/Home.svelte";
  import Galeri from "./pages/Galeri.svelte";
  import Informasi from "./pages/Informasi.svelte";
  import Kegiatan from "./pages/Kegiatan.svelte";
  import TenagaPendidik from "./pages/TenagaPendidik.svelte";
  import Kontak from "./pages/Kontak.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";

  // Listen for page navigation events to update the active route
  onMount(() => {
    activeRoute.set(window.location.pathname); // Set initial active route
  });

  // Listen for route changes to update active route dynamically
  window.addEventListener("popstate", () => {
    activeRoute.set(window.location.pathname);
  });
</script>

<main>
  <Router>
    <Header />
    <Route path="/" component={Home} />
    <Route path="/galeri" component={Galeri} />
    <Route path="/informasi" component={Informasi} />
    <Route path="/kegiatan" component={Kegiatan} />
    <Route path="/tenaga-pendidik" component={TenagaPendidik} />
    <Route path="/kontak" component={Kontak} />
    <Footer />
  </Router>
</main>

<style>
  /* Add custom styles if needed */
</style>
