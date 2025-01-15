<script>
  import { Link } from "svelte-routing";
</script>

<div>
  <!-- Hero Section -->
  <section class="relative">
    <img
      src="/assets/slider_arafah1.jpeg"
      alt="SMPIT Arafah"
      class="w-full h-[630px] object-cover"
    />
    <div class="absolute inset-0 bg-black opacity-40"></div>
    <div class="w-full absolute bottom-10 text-white px-4 grid grid-cols-3">
      <div class="px-2">
        <h1 class="text-3xl md:text-4xl font-bold leading-tight">
          Membangun Generasi Unggul dan Berakhlak Mulia
        </h1>
      </div>

      <div class="px-10">
        <p class="mt-1 text-sm md:text-base">
          Kami Membentuk Generasi Cerdas dan Berkarakter Islami. Bergabunglah
          bersama kami untuk masa depan yang lebih cerah!
        </p>
      </div>

      <div class="flex justify-end">
        <div>
          <button
            class="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white text-sm md:text-base"
            >Selengkapnya</button
          >
        </div>
      </div>
    </div>
  </section>

  <!-- Welcome Section -->
  <section
    class="py-32 px-4 md:px-16 lg:px-32 bg-gray-100 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16"
  >
    <div class="relative w-full border lg:w-7/12">
      <!-- Red Background Layer -->
      <div
        class="absolute w-[39em] -right-8 top-12 h-[12em] bg-[#E8E8E8] z-0 rounded-lg"
      ></div>

      <!-- Image Layer -->
      <img
        src="/assets/tentang_arafah.jpg"
        alt="School Building"
        class="relative w-full rounded-lg shadow-lg z-10"
      />
    </div>
    <div class="w-full lg:w-1/2 text-center lg:text-left">
      <div class="w-full grid grid-cols-3">
        <div class="col-span-2">
          <h2 class="text-2xl md:text-3xl font-bold text-[#60697B]">
            Selamat Datang di SMPIT ARAFAH Kota Depok
          </h2>
        </div>
        <div class="flex justify-center">
          <img class="" src="/assets/logo_akre.png" />
        </div>
      </div>

      <p class="mt-4 text-gray-600 font-semibold text-sm md:text-base">
        Terakreditasi "A" | Sekolah Unggul, Religius, dan Kreatif
      </p>
      <p class="text-gray-600 mt-4 text-sm md:text-base">
        Media informasi seputar program dan kegiatan SMPIT ARAFAH hadir untuk
        turut andil dalam mendukung pola tarbiyah yang menyimbangkan antara
        dunia dan akhirat melalui: Pendidikan Siswa Pintar, Organisatoris,
        Akhlak Al Karimah, Tahfidz, serta Entrepreneur.
      </p>
    </div>
  </section>

  <!-- Character Building Section -->
  <section class="py-20 bg-white text-center relative">
    <h2
      class="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-700 mb-6"
    >
      "Kami Tidak Hanya Mengajar, Kami Membangun Karakter"
    </h2>
    <p class="text-gray-700 max-w-3xl mx-auto text-sm md:text-base lg:text-lg">
      SMPIT ARAFAH Kota Depok adalah sekolah unggulan terakreditasi 'A' yang
      mengedepankan pendidikan Islami untuk mencetak generasi cerdas, berakhlak
      mulia, dan kreatif. Dengan kurikulum modern yang dipadukan dengan
      nilai-nilai keagamaan, kami berkomitmen membentuk siswa berprestasi dan
      berkarakter. Di sini, pendidikan tidak hanya soal ilmu, tetapi juga
      inspirasi dan pembentukan karakter.
    </p>
    <p
      class="mt-4 text-gray-700 max-w-3xl mx-auto text-sm md:text-base lg:text-lg"
    >
      Bergabunglah bersama kami untuk masa depan gemilang anak Anda!
    </p>

    <!-- Decorative Squares -->
    <div class="absolute left-52 top-12 w-4 h-4 bg-blue-600 rounded-sm"></div>
    <div class="absolute right-52 top-16 w-4 h-4 bg-red-300 rounded-sm"></div>
    <div
      class="absolute left-52 bottom-12 w-6 h-6 bg-blue-700 rounded-sm"
    ></div>
    <div
      class="absolute right-52 bottom-12 w-5 h-5 bg-red-300 rounded-sm"
    ></div>
  </section>

  <!-- Chairman's Welcome Section -->
  <section
    class="py-14 px-4 md:px-16 lg:px-32 bg-gray-100 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16"
  >
    <!-- Profile Image with Caption -->
    <div class="w-full lg:w-1/3 text-center lg:text-left">
      <div class="relative inline-block rounded-lg shadow-lg overflow-hidden">
        <img
          src="/assets/kepala_yayasan.png"
          alt="Dra. H. Kokom Komariah"
          class="w-full h-auto rounded-lg"
        />
        <div
          class="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white py-2 text-sm text-center font-semibold"
        >
          Dra. H. Kokom Komariah<br />
          Ketua Yayasan Bina Insan Kita Depok
        </div>
      </div>
    </div>

    <!-- Message and Stats -->
    <div class="w-full lg:w-2/3">
      <h3 class="text-2xl font-bold text-gray-800">Sambutan Ketua Yayasan</h3>
      <p class="text-gray-600 mt-4 text-sm md:text-base lg:text-lg">
        Assalamu'alaikum Warahmatullahi Wabarakaatuh. Selamat datang di website
        SMPIT Arafah Kota Depok. Sebagai sekolah Islam terpadu, kami hadir untuk
        memberikan informasi seputar program unggulan dan kegiatan sekolah.
        Semoga website ini memudahkan Anda dalam mengenal visi kami untuk
        membentuk generasi yang berakhlak, cerdas, dan berprestasi.
      </p>

      <!-- Statistics Section -->
      <div
        class="mt-8 flex justify-around md:justify-start md:space-x-12 text-center text-gray-800"
      >
        <div class="flex items-center space-x-2">
          <div class="flex flex-col items-center text-center">
            <h4 class="text-4xl font-bold">295</h4>
            <p class="text-sm font-semibold md:text-base">Peserta Didik</p>
          </div>
          <!-- Orange Divider and Plus Symbol -->
          <div class="flex flex-row items-center -mt-3">
            <span class="text-black text-lg font-bold">+</span>
            <span class="w-[2.5px] h-4 bg-orange-500 -mt-8 ml-1"></span>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <div class="flex flex-col items-center text-center">
            <h4 class="text-4xl font-bold">29</h4>
            <p class="text-sm font-semibold md:text-base">Guru Tendik</p>
          </div>
          <!-- Orange Divider and Plus Symbol -->
          <div class="flex flex-row items-center -mt-3">
            <span class="text-black text-lg font-bold">+</span>
            <span class="w-[2.5px] h-4 bg-orange-500 -mt-8 ml-1"></span>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <div class="flex flex-col items-center text-center">
            <h4 class="text-4xl font-bold">52</h4>
            <p class="text-sm font-semibold md:text-base">Kelas</p>
          </div>
          <!-- Orange Divider and Plus Symbol -->
          <div class="flex flex-row items-center -mt-3">
            <span class="text-black text-lg font-bold">+</span>
            <span class="w-[2.5px] h-4 bg-orange-500 -mt-8 ml-1"></span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Extracurricular Section -->
  <section class="py-12 px-4 md:px-16 lg:px-32 bg-white text-center">
    <!-- Section Title and Description -->
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Ekstrakulikuler</h2>
    <p
      class="text-gray-600 mb-8 text-sm md:text-base lg:text-lg max-w-2xl mx-auto"
    >
      Selain belajar mengajar, SMPIT Arafah juga memiliki berbagai macam
      ekstrakulikuler guna mewadahi minat & bakat siswa dan siswi. Aktivitas ini
      diharapkan dapat membangun motivasi, kreatifitas dan kemampuan siswa dalam
      bidang non akademik.
    </p>

    <!-- Extracurricular Activities Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Activity Item -->
      <div class="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src="/assets/pramuka.jpg"
          alt="Pramuka"
          class="w-full h-full object-cover"
        />
        <p
          class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-2 text-sm font-semibold"
        >
          PRAMUKA
        </p>
      </div>
      <div class="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src="./assets/tari.jpg"
          alt="Tari Tradisional"
          class="w-full h-full object-cover"
        />
        <p
          class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-2 text-sm font-semibold"
        >
          TARI TRADISIONAL
        </p>
      </div>
      <div class="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src="./assets/marawis.jpg"
          alt="Marawis"
          class="w-full h-full object-cover"
        />
        <p
          class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-2 text-sm font-semibold"
        >
          MARAWIS
        </p>
      </div>
      <!-- Repeat for other rows of activities if needed -->
      <div class="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src="./assets/senilukis.jpg"
          alt="seni lukis"
          class="w-full h-full object-cover"
        />
        <p
          class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-2 text-sm font-semibold"
        >
          SENI LUKIS
        </p>
      </div>
      <div class="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src="./assets/tenismeja.jpg"
          alt="Tari Tradisional"
          class="w-full h-full object-cover"
        />
        <p
          class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-2 text-sm font-semibold"
        >
          Tenis Meja
        </p>
      </div>
      <div class="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src="./assets/futsal.jpg"
          alt="Futsal"
          class="w-full h-full object-cover"
        />
        <p
          class="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-2 text-sm font-semibold"
        >
          Futsal
        </p>
      </div>
    </div>

    <!-- Button -->
    <button
      class="mt-10 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white text-sm md:text-base"
      >Selengkapnya</button
    >
  </section>

  <!--  -->
</div>
