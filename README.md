# AmanDolanan — Jelajah Malang Raya

AmanDolanan adalah website interaktif untuk menjelajahi rekomendasi tempat berkegiatan di wilayah Malang Raya, meliputi Kota Malang, Kabupaten Malang, dan Kota Batu. Website ini membantu pengguna menemukan taman, tempat olahraga, ruang belajar, dan tempat berkegiatan komunitas.

📌 Tentang Proyek

AmanDolanan dirancang sebagai media informasi tempat berkegiatan yang mudah digunakan, dengan peta interaktif dan fitur pencarian berdasarkan nama tempat, wilayah, serta kategori.

Informasi tempat yang tersedia merupakan data awal demonstrasi. Pengguna disarankan memeriksa kembali alamat, biaya, fasilitas, dan jam operasional sebelum berkunjung.

🎯 Tujuan

- Mempermudah pencarian tempat berkegiatan di Malang Raya.
- Menampilkan lokasi tempat melalui peta interaktif.
- Mendorong kegiatan positif bersama teman dan komunitas.
- Menyediakan antarmuka yang sederhana dan responsif.

✨ Fitur Utama

- Peta interaktif: Menampilkan titik lokasi tempat di Malang Raya.
- Pencarian tempat: Mencari tempat berdasarkan kata kunci.
- Filter wilayah: Memilih Kota Malang, Kabupaten Malang, atau Kota Batu.
- Filter kategori: Memilih taman, olahraga, belajar, atau komunitas.
- Daftar tempat: Menampilkan nama, alamat, kategori, informasi biaya, dan deskripsi.
- Favorit: Menyimpan tempat pilihan dan menampilkan daftar favorit.
- Tambah rekomendasi: Menambahkan informasi tempat melalui formulir.
- Integrasi Google Maps: Membantu membuka pencarian lokasi tempat.
- Penyimpanan lokal: Menyimpan data tempat dan favorit menggunakan "localStorage" pada browser.

🛠️ Teknologi yang Digunakan

Teknologi| Kegunaan
HTML5| Membuat struktur dan elemen halaman website.
CSS3| Mengatur desain, warna, tata letak, dan responsivitas.
JavaScript (Vanilla)| Menangani pencarian, filter, favorit, formulir, dan interaksi pengguna.
Leaflet.js 1.9.4| Menampilkan dan mengelola peta interaktif.
OpenStreetMap| Menyediakan peta dasar dan data atribusi peta.
Google Fonts| Menggunakan font DM Sans dan Plus Jakarta Sans.
Web Storage API ("localStorage")| Menyimpan data tempat dan favorit secara lokal di browser.
Google Maps| Membuka pencarian lokasi tempat dari website.

Website menggunakan HTML, CSS, dan JavaScript tanpa framework frontend utama. Leaflet dimuat melalui CDN, sehingga koneksi internet diperlukan untuk memuat pustaka dan peta.

🚀 Cara Menjalankan Website

Opsi 1 — Membuka langsung

1. Unduh atau clone repository ini.
2. Buka folder proyek.
3. Buka file "index.html" menggunakan browser.
4. Pastikan perangkat terhubung ke internet agar peta dan pustaka eksternal dapat dimuat.

Opsi 2 — Menggunakan Visual Studio Code

1. Buka folder proyek di Visual Studio Code.
2. Pasang ekstensi Live Server jika belum tersedia.
3. Klik kanan file "index.html".
4. Pilih Open with Live Server.
5. Website akan terbuka di browser.

📖 Panduan Penggunaan

1. Mencari tempat

- Buka bagian Jelajah.
- Ketik nama tempat, alamat, aktivitas, atau kata kunci pada kotak pencarian.
- Daftar tempat akan menyesuaikan kata kunci yang dimasukkan.

2. Memfilter tempat

- Pilih wilayah melalui menu wilayah.
- Pilih kategori seperti taman, olahraga, belajar, atau komunitas.
- Gunakan pilihan semua kategori untuk menampilkan kembali kategori secara keseluruhan.

3. Melihat lokasi pada peta

- Buka bagian Peta tempat pilihan.
- Pilih tempat dari daftar atau gunakan tombol Lihat peta.
- Gunakan penanda pada peta untuk melihat informasi singkat lokasi.
- Jika tersedia, gunakan tombol Buka Google Maps untuk membuka pencarian lokasi di Google Maps.

4. Menyimpan favorit

- Tekan ikon hati pada kartu tempat untuk menambah atau menghapus favorit.
- Tekan tombol Favorit untuk menampilkan tempat yang telah disimpan.

5. Menambahkan tempat

- Tekan tombol Tambah Tempat atau tombol tambah rekomendasi.
- Isi nama tempat, kategori, wilayah, alamat, biaya, aktivitas, dan catatan.
- Tekan Simpan tempat.
- Data yang ditambahkan disimpan pada browser yang sedang digunakan.

Catatan: Penyimpanan lokal tidak otomatis menyinkronkan data antarperangkat atau antarbrowser. Menghapus data situs pada browser juga dapat menghapus data yang tersimpan.

🤖 Penggunaan AI dalam Pengembangan

AI generatif dapat digunakan sebagai asisten untuk membantu perencanaan, pembuatan kode, penjelasan teknologi, perbaikan tampilan, dan debugging.

Model AI: ChatGPT. Nama model spesifik yang digunakan pada sesi pengembangan sebelumnya perlu dikonfirmasi dari riwayat percakapan; tidak dicantumkan sebagai fakta jika belum terverifikasi.

Contoh prompt utama

Prompt berikut merupakan contoh dokumentasi yang mewakili kebutuhan proyek, bukan transkrip persis dari prompt awal yang pernah digunakan.

«Bertindaklah sebagai web developer yang membantu membuat website bernama AmanDolanan untuk menjelajahi tempat berkegiatan di Malang Raya, meliputi Kota Malang, Kabupaten Malang, dan Kota Batu.

Buat website menggunakan HTML, CSS, dan JavaScript murni. Gunakan Leaflet.js dengan OpenStreetMap untuk menampilkan peta interaktif dan penanda lokasi tempat.

Sediakan fitur pencarian, filter wilayah, filter kategori, daftar tempat beserta alamat dan informasi biaya, fitur favorit, serta formulir untuk menambahkan rekomendasi tempat. Gunakan localStorage untuk menyimpan data tempat dan favorit di browser.

Buat desain yang modern, ramah pengguna, responsif, dan mudah dipahami. Pisahkan kode ke dalam file index.html, style.css, dan script.js. Tambahkan komentar seperlunya, pastikan interaksi antarf fitur berfungsi, dan jelaskan cara menjalankan serta menguji website.

Gunakan data contoh yang diberi keterangan bahwa informasi lokasi perlu diverifikasi. Jangan mengklaim data demonstrasi sebagai data resmi yang sudah tervalidasi.»

Contoh prompt untuk debugging

«Periksa kode HTML, CSS, dan JavaScript website AmanDolanan. Cari penyebab fitur yang tidak berfungsi, jelaskan sumber masalahnya, lalu berikan perbaikan yang sesuai tanpa menghilangkan fitur lain yang sudah berjalan. Setelah memperbaiki kode, jelaskan cara menguji hasilnya.»

Contoh prompt untuk memperbaiki tampilan

«Perbaiki tampilan responsif website AmanDolanan agar nyaman digunakan pada ponsel, tablet, dan komputer. Pertahankan fitur peta Leaflet, pencarian, filter, favorit, serta formulir tambah tempat. Berikan perubahan kode yang jelas dan jelaskan bagian yang diubah.»

Penyesuaian Mandiri Siswa terhadap Respons AI

Pada proses pembuatan website AmanDolanan, AI memberikan solusi awal berupa penampilan nama lokasi pada daftar tempat wisata. Namun, fitur tersebut belum sepenuhnya memenuhi kebutuhan website.

Siswa kemudian melakukan penyesuaian dan pengembangan kode secara mandiri agar lokasi yang ditampilkan dapat diakses melalui Google Maps. Penyesuaian dilakukan dengan menambahkan tautan lokasi berdasarkan informasi tempat yang tersedia, sehingga pengguna dapat mengeklik nama atau tombol lokasi untuk membuka pencarian tempat di Google Maps.

Bentuk penyesuaian yang dilakukan:

- Meninjau kembali solusi awal yang diberikan AI.
- Menyesuaikan kode HTML dan JavaScript agar lokasi dapat diklik.
- Menambahkan tautan menuju Google Maps berdasarkan nama atau informasi lokasi.
- Menguji tautan untuk memastikan pengguna dapat membuka Google Maps.

Peran AI: Memberikan opsi solusi dan bantuan pengembangan kode.

Peran siswa: Mengevaluasi respons AI, menentukan penyesuaian yang dibutuhkan, mengubah kode secara mandiri, dan menguji hasilnya.

Hasil: Website tidak hanya menampilkan nama tempat, tetapi juga menyediakan akses menuju Google Maps agar pengguna lebih mudah mencari lokasi tujuan.

Proyek ini dikembangkan oleh Muhammad Abdul Anwar dan Naufal, kaduanya berasal dari SMAN 1 DAMPIT, kelas XI dengan kelas peminatan informatika tingkat lanjut.
