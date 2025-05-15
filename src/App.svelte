<script>
  import { Router, Route } from "svelte-routing";
  import { onMount, onDestroy } from "svelte";
  import { activeRoute } from "./routes/store";

  import Home from "./pages/Home.svelte";
  import Galeri from "./pages/Galeri.svelte";
  import Informasi from "./pages/Informasi.svelte";
  import Ekstrakurikuler from "./pages/Ekstrakurikuler.svelte";
  import TenagaPendidik from "./pages/TenagaPendidik.svelte";
  import Kontak from "./pages/Kontak.svelte";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";

  let unlisten;

  onMount(() => {
    // Set awal saat mount
    activeRoute.set(window.location.pathname);

    // Update saat popstate (navigasi back/forward)
    const updateRoute = () => activeRoute.set(window.location.pathname);
    window.addEventListener("popstate", updateRoute);

    // Cleanup listener
    unlisten = () => window.removeEventListener("popstate", updateRoute);
  });

  onDestroy(() => {
    if (unlisten) unlisten();
  });
</script>

<main>
  <Router>
    <Header />
    <Route path="/" component={Home} />
    <Route path="/galeri" component={Galeri} />
    <Route path="/informasi" component={Informasi} />
    <Route path="/ekstrakurikuler" component={Ekstrakurikuler} />
    <Route path="/tenaga-pendidik" component={TenagaPendidik} />
    <Route path="/kontak" component={Kontak} />
    <Footer />
  </Router>
</main>

<style>
  /* Tambah style global jika perlu */
</style>
