/* ===== DATA PROJECT (edit di sini; dipakai index.html & project.html) =====
   gallery: taruh gambar di folder img/ lalu tulis path-nya.
   Boleh string "img/a.png" atau {src:"img/a.png", caption:"Halaman login"} */
const PROJECTS = [
  {
    slug: "e-pkl", title: "E-PKL", type: "Website & Aplikasi", year: "2026", color: "var(--pink)",
    roles: ["Web Developer"],
    desc: "Website & Aplikasi E-PKL dengan antarmuka responsif yang terhubung ke basis data untuk penyimpanan dan pengelolaan informasi.",
    long: "Cooming Soon",
    fitur: ["Cooming Soon"],
    tags: ["Web", "aplikasi", "Responsif", "Database"],
    gallery: [ 
    ],
    demo: "", repo: ""
  },
  {
    slug: "k-rent", title: "K-Rent", type: "Aplikasi", year: "2026", color: "var(--purple)",
    roles: ["UI/UX Designer", "Front-End Developer"],
    desc: "Platform penyewaan pakaian. Merancang UI/UX, tata letak, dan alur navigasi yang intuitif, lalu mengimplementasikannya.",
    long: "K-Rent adalah platform penyewaan pakaian (Project Based Learning). Aku memegang dua peran: merancang desain UI/UX, lalu mengimplementasikannya sebagai Front-End Developer.",
    fitur: ["Desain antarmuka (UI) dan pengalaman pengguna (UX)", "Tata letak dan alur navigasi yang intuitif", "Tampilan konsisten dan responsif sesuai rancangan desain"],
    tags: ["UI/UX", "Front-End", "Penyewaan Pakaian"],
    gallery: [
      "img/k-ren1.png", "img/k-rent2.png", "img/k-rent3.png", "img/k-rent4.png", "img/krent9.png", "img/krent6.png", "img/k-ren7.png", "img/ki-rent8.png"      // "img/krent-1.png",
    ],
    demo: "https://youtu.be/Qjdz0zdgMBQ?si=yArIOrh8Hd4A-WCH", repo: ""
  },
  {
    slug: "kusuma-care", title: "Kusuma Care", type: "Website", year: "2025", color: "var(--mint)",
    roles: ["Web Developer", "Database Developer"],
    desc: "Website Kusuma Care lengkap dengan perancangan database: tabel, atribut, relasi, dan pengelolaan data yang konsisten.",
    long: "Kusuma Care dikerjakan sebagai Project Based Learning. Aku merancang website sekaligus struktur basis datanya.",
    fitur: ["Perancangan tabel, atribut, dan relasi antar tabel", "Integrasi website dengan basis data", "Pengelolaan data demi integritas dan konsistensi"],
    tags: ["Web", "Database", "Relasi Tabel"],
    gallery: [ "img/kusuma 1.jpeg", "img/kusuma2.jpeg", "img/kusuma 3.jpeg", "img/kusuma lagi.jpeg", "img/admin kusuma 2.jpeg", "img/admin kusuma 3.jpeg", "img/admin kusuma 4.jpeg", "img/admin kusuma.jpeg"      // "img/kusuma-1.png",
    ],
    demo: "https://youtu.be/C5V2dOYPpnM", repo: ""
  }
];
