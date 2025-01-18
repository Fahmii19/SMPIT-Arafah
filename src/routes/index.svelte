<script>
  import { Router, Route } from "svelte-routing";
  import Home from "../pages/Home.svelte";
  import Galeri from "../pages/Galeri.svelte";
  import Informasi from "../pages/Informasi.svelte";
  import Kegiatan from "../pages/Ekstrakurikuler.svelte";
  import TenagaPendidik from "../pages/TenagaPendidik.svelte";
  import Kontak from "../pages/Kontak.svelte";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="author" content="SMPIT ARAFAH" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="SMPIT ARAFAH" />
</svelte:head>

<Router>
  <div class="bg-gray-100 min-h-screen">
    <Header />
    <Route path="/" component={Home} />
    <Route path="/galeri" component={Galeri} />
    <Route path="/informasi" component={Informasi} />
    <Route path="/kegiatan" component={Kegiatan} />
    <Route path="/tenaga-pendidik" component={TenagaPendidik} />
    <Route path="/kontak" component={Kontak} />
    <Footer />
  </div>
</Router>
