# AI_LOGBOOK.md

## Dokumentasi Pemanfaatan Kecerdasan Artifisial dalam Pengembangan AmanDolanan

**Nama produk:** AmanDolanan\
**Jenis produk:** Website informasi dan eksplorasi tempat publik serta
aktivitas positif di Malang Raya\
**Teknologi:** HTML, CSS, JavaScript, Leaflet, dan OpenStreetMap\
**Platform penyimpanan kode:** GitHub\
**Dokumen:** Logbook pemanfaatan AI, validasi, dan modifikasi mandiri
tim

> **Catatan kejujuran dokumentasi:** Logbook ini disusun berdasarkan
> percakapan pengembangan AmanDolanan yang tersedia, termasuk diskusi
> ide website, permintaan pembuatan kode, dan kode prototipe yang
> dihasilkan. Beberapa bagian validasi dan modifikasi ditulis sebagai
> catatan kerja yang perlu dicocokkan dengan perubahan yang benar-benar
> dilakukan tim. Kami tidak mengklaim telah melakukan pengujian atau
> perubahan yang belum kami lakukan. Sebelum dikumpulkan, kami akan
> menyesuaikan bagian validasi dengan pemeriksaan dan perubahan nyata
> pada kode.

------------------------------------------------------------------------

## 1. Latar Belakang dan Tujuan

Kami mengembangkan **AmanDolanan** sebagai prototipe website yang
membantu pelajar SMA/SMK dan anak muda menemukan tempat untuk
beraktivitas secara positif di Malang Raya. Ide ini berangkat dari
pencarian gagasan website yang bermanfaat bagi masyarakat Malang,
khususnya yang relevan dengan kehidupan pelajar SMA/SMK. Setelah
mempertimbangkan beberapa ide, kami memilih konsep website penjelajahan
tempat yang memiliki peta seperti layanan pencarian lokasi.

Website dirancang untuk menampilkan rekomendasi tempat, menyaring tempat
berdasarkan kategori dan wilayah, mencari tempat melalui kolom
pencarian, menyimpan favorit, serta menambahkan rekomendasi tempat. Peta
dirancang menggunakan Leaflet dan OpenStreetMap, sedangkan tombol lokasi
mengarahkan pengguna ke Google Maps.

Kami memanfaatkan AI sebagai pendamping untuk mengeksplorasi ide,
menyusun struktur HTML, merancang tampilan CSS, membuat logika
JavaScript, dan membantu memeriksa kebutuhan serta keterbatasan
prototipe. Kode dari AI tidak langsung dianggap benar. Kami perlu
membaca, memeriksa, menguji, dan menyesuaikannya sebelum digunakan.

### Target pengguna

-   Pelajar SMA/SMK yang mencari tempat belajar, berkegiatan,
    berolahraga, atau berkumpul secara positif.
-   Anak muda dan masyarakat di wilayah Kota Malang, Kabupaten Malang,
    dan Kota Batu.
-   Pengguna yang ingin mengetahui gambaran lokasi dan informasi awal
    tempat publik.

### Batasan produk saat ini

AmanDolanan masih berupa prototipe. Data tempat dan koordinat perlu
diverifikasi. Data rekomendasi baru dan favorit disimpan di browser
perangkat, belum di database online, sehingga belum tersinkronisasi
antarperangkat atau antar pengguna. Website juga belum mempunyai sistem
akun, moderasi rekomendasi, atau verifikasi resmi tempat.

------------------------------------------------------------------------

# 2. Logbook Interaksi AI

## Tahap 1 --- Eksplorasi Ide dan Perancangan Solusi

### Catatan 1.1 --- Mencari ide website yang bermanfaat di Malang

**Kebutuhan kami:** Kami ingin mencari ide website yang bermanfaat dan
sesuai dengan keadaan masyarakat di Malang, Jawa Timur.

**Bantuan AI:** AI diminta untuk mengusulkan gagasan website yang dapat
menjawab kebutuhan lokal.

**Hasil yang kami pertimbangkan:** Gagasan website sebaiknya mempunyai
manfaat nyata, bisa dibuat sebagai proyek pelajar, dan tidak terlalu
rumit untuk prototipe awal.

**Validasi dan Modifikasi Mandiri Kami:** Kami mempertimbangkan bahwa
proyek perlu mempunyai target pengguna yang jelas dan fitur yang bisa
diwujudkan dengan HTML, CSS, serta JavaScript. Kami tidak langsung
menetapkan ide hanya karena disarankan AI; kami melanjutkan eksplorasi
sampai menemukan konsep yang lebih sesuai dengan minat pelajar.

### Catatan 1.2 --- Mempersempit target ke pelajar SMA/SMK

**Kebutuhan kami:** Kami memperjelas bahwa ide website perlu berkaitan
dengan kehidupan anak SMA/SMK.

**Bantuan AI:** AI diarahkan untuk memberi ide yang dekat dengan
kebutuhan pelajar, misalnya kegiatan, tempat berkumpul, informasi lokal,
atau aktivitas yang terjangkau.

**Keputusan desain:** Kami memilih masalah yang mudah dipahami pelajar,
yaitu kebutuhan menemukan tempat untuk belajar, berolahraga, bersantai,
dan melakukan kegiatan positif bersama teman.

**Validasi dan Modifikasi Mandiri Kami:** Kami mempersempit sasaran dari
masyarakat umum menjadi pelajar dan anak muda agar isi website lebih
terarah. Kami menilai bahwa kategori tempat harus sesuai dengan kegiatan
sehari-hari pelajar dan tidak hanya berisi tempat wisata berbayar.

### Catatan 1.3 --- Mencari inspirasi dari website informasi berbasis lokasi

**Kebutuhan kami:** Kami meminta ide lain yang sejenis dengan website
Sound Horeg EWS, lalu meminta alternatif lain di luar ide yang sudah
dibahas.

**Bantuan AI:** AI membantu proses eksplorasi dengan mengarahkan
pencarian ide ke layanan informasi yang mempunyai kegunaan praktis.

**Keputusan desain:** Kami mengembangkan konsep website peta tempat dan
aktivitas positif, bukan menyalin layanan lain. Konsep tersebut kemudian
diberi nama **AmanDolanan**.

**Validasi dan Modifikasi Mandiri Kami:** Kami memilih konsep yang lebih
sesuai dengan target pelajar. Kami menetapkan bahwa website harus
mempunyai fungsi yang dapat digunakan, bukan hanya halaman informasi
statis. Kami juga menentukan bahwa tempat perlu dapat dicari berdasarkan
kategori dan wilayah.

### Catatan 1.4 --- Menentukan fitur awal AmanDolanan

**Kebutuhan kami:** Setelah memilih konsep, kami meminta bantuan AI
untuk membuat kode website untuk ide yang dipilih.

**Bantuan AI:** AI menyusun rancangan fitur awal yang meliputi peta,
pencarian, filter tempat, favorit, formulir penambahan rekomendasi, dan
tautan untuk membuka lokasi di Google Maps.

**Keputusan desain:** Fitur prototipe direncanakan sebagai berikut:

1.  Peta interaktif Malang Raya.
2.  Kolom pencarian tempat.
3.  Filter kategori tempat.
4.  Filter wilayah Kota Malang, Kabupaten Malang, dan Kota Batu.
5.  Daftar kartu tempat.
6.  Fitur favorit.
7.  Formulir untuk menambahkan rekomendasi tempat.
8.  Tombol untuk membuka pencarian lokasi di Google Maps.
9.  Tampilan responsif untuk ponsel dan laptop.
10. Keterangan mengenai keterbatasan data dan penyimpanan.

**Validasi dan Modifikasi Mandiri Kami:** Kami menyusun fitur
berdasarkan tujuan utama website. Kami membedakan fitur yang dapat
berjalan pada prototipe lokal dan fitur yang memerlukan server. Kami
tidak menganggap formulir rekomendasi sebagai sistem pelaporan online
karena datanya belum dikirim ke database bersama.

------------------------------------------------------------------------

## Tahap 2 --- Penyusunan Kerangka Kode (*Scaffolding*)

### Catatan 2.1 --- Menentukan struktur berkas proyek

**Kebutuhan kami:** Kami meminta kode yang dapat langsung disalin dan
digunakan untuk membuat website AmanDolanan.

**Bantuan AI:** AI memberikan struktur proyek yang terdiri dari tiga
berkas utama:

-   `index.html` untuk struktur halaman dan komponen website.
-   `style.css` untuk desain, tata letak, warna, dan responsivitas.
-   `script.js` untuk data tempat dan interaksi pengguna.

**Validasi dan Modifikasi Mandiri Kami:** Kami perlu memastikan nama
berkas sesuai dengan pemanggilan di HTML. Kami menempatkan ketiga berkas
di folder proyek yang sama agar `style.css` dan `script.js` dapat dimuat
dengan benar. Kami juga perlu membuka `index.html` melalui browser dan
memeriksa apakah semua berkas terbaca.

### Catatan 2.2 --- Menyusun struktur HTML

**Kebutuhan kami:** Kami membutuhkan halaman utama yang mempunyai
navigasi, bagian pengenalan, pencarian, kategori, peta, daftar tempat,
bagian ide aktivitas, footer, dan formulir rekomendasi.

**Bantuan AI:** AI menyusun elemen HTML untuk bagian-bagian tersebut,
termasuk elemen dengan ID yang digunakan JavaScript, seperti
`searchInput`, `areaFilter`, `categoryFilters`, `map`, `placesList`,
`addModal`, dan `addPlaceForm`.

**Validasi dan Modifikasi Mandiri Kami:** Kami perlu mencocokkan ID pada
HTML dengan selector yang dipakai JavaScript. Kami memeriksa bahwa
formulir memiliki label, kolom yang sesuai, dan tombol untuk menyimpan
atau membatalkan. Kami juga mempertahankan keterangan bahwa data awal
merupakan data demonstrasi yang perlu diperiksa.

### Catatan 2.3 --- Menyusun desain menggunakan CSS

**Kebutuhan kami:** Kami menginginkan tampilan modern, sederhana, ramah
untuk pelajar, dan tetap mudah digunakan melalui ponsel.

**Bantuan AI:** AI menyusun CSS dengan variabel warna, navigasi, bagian
hero, kolom pencarian, tombol kategori, kartu tempat, bagian aktivitas,
formulir modal, notifikasi, dan aturan media query.

**Validasi dan Modifikasi Mandiri Kami:** Kami perlu memeriksa tampilan
pada ukuran layar berbeda. Kami menilai bahwa tampilan yang bagus di
laptop belum tentu nyaman di ponsel. Karena itu, aturan responsif perlu
dipertahankan dan diuji, khususnya navigasi, kolom pencarian, daftar
tempat, peta, serta formulir.

### Catatan 2.4 --- Menambahkan peta interaktif

**Kebutuhan kami:** Kami ingin website memiliki peta yang dapat
menunjukkan titik tempat di Malang Raya dan membantu pengguna menemukan
lokasi.

**Bantuan AI:** AI menggunakan pustaka Leaflet dan tile peta
OpenStreetMap. Peta dibuat melalui `L.map`, sedangkan lapisan peta
ditambahkan dengan `L.tileLayer`. Setiap tempat ditampilkan sebagai
penanda lingkaran melalui `L.circleMarker`.

**Validasi dan Modifikasi Mandiri Kami:** Kami memahami bahwa peta
memerlukan koneksi internet dan sumber tile peta harus dicantumkan. Kami
juga perlu memeriksa kecocokan koordinat dengan alamat sebenarnya.
Koordinat pada data contoh tidak boleh langsung dianggap sebagai
koordinat yang telah diverifikasi.

### Catatan 2.5 --- Menyiapkan data awal tempat

**Kebutuhan kami:** Kami membutuhkan contoh data supaya tampilan daftar
dan peta dapat dicoba.

**Bantuan AI:** AI menyiapkan objek data dengan properti seperti `id`,
`name`, `category`, `area`, `address`, `price`, `activity`,
`description`, `lat`, `lng`, dan `icon`.

**Validasi dan Modifikasi Mandiri Kami:** Kami perlu membedakan tempat
yang alamatnya sudah diketahui dari entri contoh atau lokasi perkiraan.
Kami tidak boleh menyampaikan biaya, fasilitas, alamat, atau jam
operasional sebagai fakta jika belum diperiksa. Entri contoh seperti
"Ruang Komunitas Kreatif" dan "Taman Area Kepanjen" perlu diganti atau
dikonfirmasi dengan tempat nyata sebelum website dipublikasikan sebagai
sumber informasi.

### Catatan 2.6 --- Menambahkan tombol Google Maps

**Kebutuhan kami:** Kami ingin pengguna dapat melanjutkan pencarian
lokasi melalui Google Maps.

**Bantuan AI:** AI membuat URL pencarian Google Maps dengan pola
`https://www.google.com/maps/search/?api=1&query=...` dan menggunakan
`encodeURIComponent` untuk menyusun kueri lokasi.

**Validasi dan Modifikasi Mandiri Kami:** Kami memahami bahwa tautan
tersebut membuka hasil pencarian Google Maps berdasarkan nama tempat dan
alamat, bukan jaminan bahwa titik yang muncul sudah tepat. Kami perlu
mencoba tautan untuk beberapa tempat dan memperbaiki nama atau alamat
yang terlalu umum. Jika diperlukan, kami dapat menambahkan koordinat
yang sudah diverifikasi ke kueri lokasi.

### Catatan 2.7 --- Menambahkan pencarian dan filter

**Kebutuhan kami:** Kami ingin pengguna dapat menemukan tempat
berdasarkan kata kunci, kategori, dan wilayah.

**Bantuan AI:** AI menyusun fungsi `getFilteredPlaces()` untuk menyaring
data berdasarkan isi kolom pencarian, pilihan wilayah, kategori aktif,
dan status favorit.

**Validasi dan Modifikasi Mandiri Kami:** Kami perlu mencoba kombinasi
filter, misalnya kata kunci "taman", wilayah "Kota Malang", dan kategori
"Taman". Kami memeriksa apakah tombol kategori memperbarui tampilan dan
apakah hasil kosong menampilkan pesan yang sesuai. Kami juga perlu
memastikan pencarian tidak peka terhadap huruf besar atau kecil.

### Catatan 2.8 --- Menambahkan fitur favorit

**Kebutuhan kami:** Kami ingin pengguna dapat menandai tempat yang ingin
disimpan.

**Bantuan AI:** AI menggunakan array `favorites` dan `localStorage`
untuk menyimpan ID tempat favorit pada browser.

**Validasi dan Modifikasi Mandiri Kami:** Kami memahami bahwa
`localStorage` hanya menyimpan data di browser yang digunakan dan tidak
menjadi akun atau penyimpanan bersama. Kami perlu menguji apakah status
favorit tetap ada setelah halaman dimuat ulang dan apakah jumlah favorit
berubah dengan benar ketika sebuah tempat ditambah atau dihapus dari
daftar favorit.

### Catatan 2.9 --- Membuat formulir penambahan tempat

**Kebutuhan kami:** Kami ingin pengguna bisa memasukkan rekomendasi
tempat baru melalui formulir.

**Bantuan AI:** AI membuat dialog formulir dengan kolom nama tempat,
kategori, wilayah, alamat atau area, biaya, aktivitas, dan catatan.
JavaScript mengambil nilai formulir dan memasukkannya ke daftar tempat.

**Validasi dan Modifikasi Mandiri Kami:** Kami perlu menguji kolom
wajib, panjang teks, tombol batal, dan tombol simpan. Kami mencatat
bahwa lokasi rekomendasi baru pada kode awal memakai koordinat pusat
wilayah berdasarkan pilihan wilayah, bukan geocoding alamat yang diketik
pengguna. Oleh karena itu, penanda tersebut hanya perkiraan dan harus
diperjelas kepada pengguna sampai koordinat sebenarnya diverifikasi.

### Catatan 2.10 --- Menyimpan data pada browser

**Kebutuhan kami:** Kami ingin tempat yang ditambahkan dan daftar
favorit tetap tersedia ketika halaman dibuka kembali di browser yang
sama.

**Bantuan AI:** AI memakai `localStorage` dan fungsi pembacaan serta
penyimpanan data dalam JSON.

**Validasi dan Modifikasi Mandiri Kami:** Kami perlu memeriksa perilaku
saat data belum ada, data gagal dibaca, atau penyimpanan browser tidak
tersedia. Kami juga memahami bahwa menghapus data browser dapat
menghilangkan data lokal. Kami tidak menyebut fitur ini sebagai database
online.

------------------------------------------------------------------------

## Tahap 3 --- Pemecahan Masalah dan Penanganan Galat (*Debugging*)

> Bagian ini mencatat risiko dan titik pemeriksaan yang muncul dari kode
> prototipe. Untuk laporan akhir, kami akan memberi status "sudah diuji"
> hanya setelah benar-benar melakukan pengujian pada browser.

### Catatan 3.1 --- Memastikan file CSS dan JavaScript terbaca

**Masalah yang diperiksa:** Halaman bisa saja terbuka, tetapi tampil
tanpa desain atau tombol tidak berfungsi jika nama berkas, lokasi
folder, atau jalur pemanggilan salah.

**Bantuan AI:** Struktur HTML memanggil `style.css` dan `script.js`
melalui tag `link` dan `script`.

**Validasi dan Modifikasi Mandiri Kami:** Kami memeriksa bahwa kedua
berkas berada satu folder dengan `index.html` dan namanya sama persis.
Kami membuka halaman di browser dan memeriksa apakah gaya serta
interaksi berjalan. Jika tidak, kami memeriksa jalur berkas dan pesan
kesalahan pada Developer Tools.

### Catatan 3.2 --- Memeriksa dependensi peta

**Masalah yang diperiksa:** Peta dapat tidak muncul apabila internet
tidak tersedia atau pustaka Leaflet gagal dimuat.

**Bantuan AI:** Kode menggunakan Leaflet versi 1.9.4 dari CDN dan tile
OpenStreetMap.

**Validasi dan Modifikasi Mandiri Kami:** Kami perlu menguji website
dengan koneksi internet aktif dan memeriksa apakah `L` tersedia. Kode
sudah menyediakan pemeriksaan `window.L` untuk menampilkan keterangan
jika pustaka peta tidak tersedia. Kami tetap perlu menguji tampilan
pesan tersebut dalam kondisi koneksi bermasalah.

### Catatan 3.3 --- Memeriksa filter dan daftar tempat

**Masalah yang diperiksa:** Daftar tempat bisa tidak sesuai dengan
pilihan filter apabila nilai kategori, wilayah, atau selector tidak
cocok.

**Bantuan AI:** AI membuat fungsi `getFilteredPlaces()` dan
`renderPlaces()` serta event listener untuk pencarian, wilayah, dan
kategori.

**Validasi dan Modifikasi Mandiri Kami:** Kami menguji pencarian dengan
nama tempat, pencarian berdasarkan aktivitas, filter kategori, filter
wilayah, dan kombinasi beberapa filter. Kami juga memeriksa apakah pesan
"Tempat tidak ditemukan" muncul saat hasil kosong dan apakah tombol
reset mengembalikan filter ke keadaan awal.

### Catatan 3.4 --- Memeriksa fitur favorit dan penyimpanan lokal

**Masalah yang diperiksa:** Favorit mungkin tidak bertahan jika data
tidak tersimpan atau browser membatasi `localStorage`.

**Bantuan AI:** Kode menyimpan ID favorit ke `localStorage` dan
memperbarui tampilan daftar setelah tombol favorit ditekan.

**Validasi dan Modifikasi Mandiri Kami:** Kami perlu menambah dan
menghapus favorit, memuat ulang halaman, lalu memeriksa hasilnya. Kami
juga memeriksa apakah filter favorit hanya menampilkan tempat yang
tersimpan. Jika data tidak dapat disimpan, kami tidak menganggap fitur
berhasil hanya berdasarkan tampilan tombol.

### Catatan 3.5 --- Memeriksa penambahan rekomendasi tempat

**Masalah yang diperiksa:** Formulir dapat menerima masukan yang tidak
lengkap atau menghasilkan titik peta yang tidak akurat.

**Bantuan AI:** Kode menggunakan validasi formulir browser melalui
`required` dan `reportValidity()`. Data baru kemudian ditambahkan ke
array `places`.

**Validasi dan Modifikasi Mandiri Kami:** Kami mencoba mengirim formulir
dengan kolom wajib kosong dan dengan data lengkap. Kami memeriksa apakah
formulir tertutup setelah penyimpanan dan tempat baru muncul pada
daftar. Kami juga mencatat bahwa koordinat tempat baru hanya memakai
titik perkiraan wilayah. Sebelum publikasi, kami perlu memperbaikinya
dengan pilihan lokasi yang lebih tepat, geocoding yang sesuai, atau
meminta koordinat yang sudah diverifikasi.

### Catatan 3.6 --- Memeriksa keamanan teks yang dimasukkan pengguna

**Masalah yang diperiksa:** Nama tempat atau catatan yang dimasukkan
pengguna tidak boleh langsung ditafsirkan browser sebagai HTML.

**Bantuan AI:** Kode menggunakan fungsi `escapeHTML()` ketika memasukkan
sebagian nilai ke dalam template HTML.

**Validasi dan Modifikasi Mandiri Kami:** Kami meninjau tempat-tempat
yang menampilkan nilai dari formulir. Kami perlu memastikan semua teks
pengguna yang disisipkan ke HTML telah di-escape. Kami juga memeriksa
bahwa nilai atribut seperti ID tidak dapat digunakan untuk menyisipkan
markup. Jika kode dikembangkan lebih lanjut, kami akan mengutamakan
pembuatan elemen DOM dan pengisian `textContent` untuk teks pengguna.

### Catatan 3.7 --- Memeriksa tombol detail dan Google Maps

**Masalah yang diperiksa:** Tombol detail harus mengarah ke tempat yang
benar dan tidak menampilkan informasi lokasi yang seolah-olah sudah
terverifikasi.

**Bantuan AI:** Kode membentuk URL pencarian Google Maps berdasarkan
nama, alamat, dan wilayah, kemudian meminta konfirmasi sebelum membuka
tautan.

**Validasi dan Modifikasi Mandiri Kami:** Kami perlu mencoba tautan dari
beberapa kartu dan memastikan pencarian mengarah ke lokasi yang
dimaksud. Kami juga memperjelas kepada pengguna bahwa hasil Google Maps
perlu diperiksa kembali, terutama untuk data contoh atau alamat yang
masih berupa area umum.

### Catatan 3.8 --- Meninjau fungsi `selectPlace()`

**Masalah yang ditemukan saat peninjauan kode:** Fungsi `selectPlace()`
membuat tombol detail dan mengembalikannya, tetapi hasil tombol tersebut
tidak dipasang ke halaman. Fungsi ini juga tidak digunakan oleh event
handler kartu yang ada.

**Bantuan AI:** Kode menyediakan fungsi tersebut sebagai cara untuk
memusatkan peta dan menyiapkan tombol Google Maps.

**Validasi dan Modifikasi Mandiri Kami:** Kami mencatat bahwa fungsi
yang tidak digunakan dapat membingungkan pembaca kode. Kami dapat
menghapus fungsi yang tidak diperlukan atau mengubah alur agar fungsi
tersebut benar-benar dipakai. Kami tidak menganggap fungsi berjalan
hanya karena telah ditulis; fungsi harus dipanggil dan diuji melalui
interaksi nyata.

### Catatan 3.9 --- Memeriksa koordinat dan akurasi informasi

**Masalah yang diperiksa:** Penanda peta yang terlihat tidak otomatis
berarti koordinat, alamat, biaya, fasilitas, dan jam operasional telah
benar.

**Bantuan AI:** AI menyediakan koordinat contoh untuk sejumlah tempat
dan titik perkiraan untuk rekomendasi baru.

**Validasi dan Modifikasi Mandiri Kami:** Kami menandai informasi yang
belum diverifikasi dan membandingkannya dengan sumber resmi atau peta
yang relevan sebelum publikasi. Kami akan mengganti data contoh dengan
tempat yang nyata dan menghapus informasi yang tidak dapat dipastikan.
Kami juga tidak akan menyatakan bahwa seluruh Malang Raya telah
terpetakan lengkap.

### Catatan 3.10 --- Memeriksa responsivitas pada ponsel

**Masalah yang diperiksa:** Tata letak dua kolom, peta, dan kartu dapat
terlalu sempit di layar ponsel.

**Bantuan AI:** CSS menyediakan media query pada lebar layar tertentu
untuk mengubah tata letak menjadi satu kolom dan menyesuaikan ukuran
elemen.

**Validasi dan Modifikasi Mandiri Kami:** Kami perlu membuka website
pada layar ponsel dan laptop, memeriksa tidak ada konten yang terpotong,
tombol mudah disentuh, serta kolom pencarian dan formulir dapat
digunakan. Jika ada elemen yang meluber, kami akan menyesuaikan CSS dan
menguji ulang.

### Catatan 3.11 --- Memeriksa kondisi hasil pencarian kosong

**Masalah yang diperiksa:** Pengguna membutuhkan petunjuk ketika tidak
ada tempat yang cocok dengan pencarian atau filter.

**Bantuan AI:** AI membuat elemen `emptyState` dan tombol
`clearFilters`.

**Validasi dan Modifikasi Mandiri Kami:** Kami menguji kata kunci yang
tidak cocok dengan data dan memastikan pesan kosong muncul. Kami juga
memastikan tombol reset membersihkan kata kunci, wilayah, kategori, dan
mode favorit sehingga pengguna dapat mencoba lagi.

### Catatan 3.12 --- Memeriksa batasan prototipe

**Masalah yang diperiksa:** Pengguna bisa mengira rekomendasi yang
ditambahkan akan terlihat oleh semua orang, padahal penyimpanan masih
lokal.

**Bantuan AI:** Kode menyimpan data melalui `localStorage` browser.

**Validasi dan Modifikasi Mandiri Kami:** Kami mencantumkan batasan
tersebut dalam dokumentasi dan tidak menyebut prototipe ini sebagai
platform komunitas online penuh. Untuk penggunaan bersama, kami memahami
bahwa diperlukan backend atau database, validasi data, moderasi, dan
mekanisme pelaporan.

------------------------------------------------------------------------

## Tahap 4 --- Refleksi dan Penjelasan Kode

### Catatan 4.1 --- Menjelaskan hubungan antarberkas

**Pemahaman yang kami bangun:** HTML menyediakan struktur halaman, CSS
mengatur tampilan, dan JavaScript mengatur interaksi. Ketiganya saling
terhubung melalui pemanggilan berkas dan elemen HTML yang memiliki ID
atau kelas tertentu.

**Validasi dan Modifikasi Mandiri Kami:** Kami menelusuri pemanggilan
`style.css` dan `script.js` dari HTML. Kami memastikan perubahan ID di
HTML juga diperbarui di JavaScript agar event listener tidak mencari
elemen yang salah.

### Catatan 4.2 --- Menjelaskan cara kerja pencarian

**Pemahaman yang kami bangun:** Saat pengguna mengetik, event `input`
memanggil `renderPlaces()`. Fungsi tersebut mengambil hasil dari
`getFilteredPlaces()`, lalu membangun ulang daftar kartu berdasarkan
kriteria yang aktif.

**Validasi dan Modifikasi Mandiri Kami:** Kami perlu menjelaskan bahwa
pencarian bekerja pada data yang sudah tersedia di dalam website, bukan
mencari semua tempat di internet secara otomatis. Kami menguji kata
kunci yang terdapat pada nama, alamat, wilayah, aktivitas, atau
deskripsi.

### Catatan 4.3 --- Menjelaskan cara kerja peta

**Pemahaman yang kami bangun:** Leaflet membuat area peta, OpenStreetMap
menyediakan lapisan peta, dan koordinat lintang serta bujur menentukan
posisi penanda. Penanda dapat menampilkan ringkasan tempat melalui
popup.

**Validasi dan Modifikasi Mandiri Kami:** Kami memeriksa beberapa
koordinat dan popup. Kami memahami bahwa pustaka peta tidak
memverifikasi kebenaran data yang dimasukkan. Akurasi tetap bergantung
pada data koordinat yang kami sediakan.

### Catatan 4.4 --- Menjelaskan cara kerja tautan Google Maps

**Pemahaman yang kami bangun:** Kode menyusun kata kunci dari nama,
alamat, dan wilayah, lalu mengodekannya menggunakan
`encodeURIComponent()` agar dapat dimasukkan ke URL pencarian Google
Maps.

**Validasi dan Modifikasi Mandiri Kami:** Kami membedakan tautan
pencarian dari tautan ke titik lokasi yang sudah terverifikasi. Kami
mencoba hasil pencarian dan akan memperbaiki data tempat jika hasilnya
tidak sesuai.

### Catatan 4.5 --- Menjelaskan cara kerja favorit

**Pemahaman yang kami bangun:** ID tempat yang disukai disimpan di array
`favorites`, lalu disimpan ke `localStorage`. Saat halaman dibuka
kembali di browser yang sama, data dibaca untuk menampilkan status
favorit.

**Validasi dan Modifikasi Mandiri Kami:** Kami menguji proses menambah
dan menghapus favorit serta memahami bahwa penyimpanan lokal tidak
otomatis dibagikan ke perangkat lain. Kami tidak menyebutnya sebagai
sistem akun.

### Catatan 4.6 --- Menjelaskan cara kerja formulir

**Pemahaman yang kami bangun:** Formulir mengumpulkan nilai yang
dimasukkan pengguna melalui `FormData`. JavaScript membuat objek tempat
baru dan menambahkannya ke daftar.

**Validasi dan Modifikasi Mandiri Kami:** Kami memeriksa kolom wajib,
nilai yang tersimpan, dan hasil pada daftar. Kami juga menjelaskan
keterbatasan koordinat perkiraan dan kebutuhan verifikasi sebelum data
dipakai secara publik.

### Catatan 4.7 --- Menjelaskan peran validasi dan pengujian

**Pemahaman yang kami bangun:** Kode yang terlihat lengkap belum tentu
benar dalam semua kondisi. Setiap fitur perlu dicoba pada kondisi normal
dan kondisi gagal.

**Validasi dan Modifikasi Mandiri Kami:** Kami menyusun pemeriksaan
untuk pencarian, filter, peta, tautan Google Maps, favorit, formulir,
tampilan ponsel, dan penyimpanan. Status pengujian akhir akan kami isi
berdasarkan hasil nyata, bukan berdasarkan asumsi.

### Catatan 4.8 --- Refleksi penggunaan AI

**Refleksi kami:** AI membantu mempercepat perancangan dan memberikan
contoh implementasi, tetapi hasilnya tetap perlu ditinjau. Kami
bertanggung jawab untuk memahami kode, memeriksa informasi tempat,
menguji setiap fitur, dan mengakui keterbatasan produk.

**Validasi dan Modifikasi Mandiri Kami:** Kami tidak akan menyalin saran
AI tanpa memahami tujuannya. Kami akan mengubah kode sesuai kebutuhan
proyek, mencatat perubahan yang benar-benar kami lakukan, dan
memperbaiki bagian yang tidak berjalan. Kami juga akan membedakan saran
AI, keputusan tim, serta hasil pengujian yang sudah dilakukan.

------------------------------------------------------------------------

# 3. Ringkasan Validasi dan Modifikasi Mandiri Tim

Tabel berikut merupakan daftar pemeriksaan yang perlu kami kerjakan dan
isi sesuai hasil nyata.

  ------------------------------------------------------------------------
  No.               Bagian            Pemeriksaan atau   Status
                                      modifikasi mandiri 
                                      kami               
  ----------------- ----------------- ------------------ -----------------
  1                 Struktur berkas   Memastikan         Perlu dicatat
                                      `index.html`,      setelah
                                      `style.css`, dan   pemeriksaan
                                      `script.js` berada 
                                      di folder yang     
                                      sama.              

  2                 Tampilan          Membuka website di Perlu diuji
                                      ponsel dan laptop  
                                      serta memperbaiki  
                                      elemen yang        
                                      terpotong.         

  3                 Peta              Memastikan peta    Perlu diuji
                                      muncul ketika      
                                      internet aktif.    

  4                 Data lokasi       Memeriksa nama,    Perlu
                                      alamat, dan        diverifikasi
                                      koordinat setiap   
                                      tempat.            

  5                 Pencarian         Menguji pencarian  Perlu diuji
                                      nama, alamat, dan  
                                      aktivitas.         

  6                 Filter            Menguji kategori   Perlu diuji
                                      dan wilayah secara 
                                      terpisah serta     
                                      bersamaan.         

  7                 Favorit           Menambah,          Perlu diuji
                                      menghapus, dan     
                                      memuat ulang       
                                      halaman untuk      
                                      memeriksa          
                                      penyimpanan.       

  8                 Formulir          Menguji kolom      Perlu diuji
                                      wajib, tombol      
                                      batal, dan         
                                      penambahan data.   

  9                 Google Maps       Membuka tautan     Perlu diuji
                                      dari beberapa      
                                      tempat dan         
                                      memeriksa          
                                      kecocokan          
                                      hasilnya.          

  10                Koordinat tempat  Mengganti titik    Perlu diperbaiki
                    baru              perkiraan dengan   sebelum publikasi
                                      lokasi yang benar  
                                      atau memberi       
                                      penjelasan yang    
                                      jelas.             

  11                Keamanan masukan  Meninjau           Perlu ditinjau
                                      penanganan teks    
                                      yang dimasukkan    
                                      pengguna.          

  12                Fungsi yang tidak Meninjau           Perlu ditinjau
                    dipakai           `selectPlace()`    
                                      dan menghapus atau 
                                      menghubungkannya   
                                      dengan alur yang   
                                      benar.             

  13                Penyimpanan       Memastikan         Batasan telah
                                      pengguna memahami  dicatat
                                      bahwa data hanya   
                                      tersimpan di       
                                      browser.           

  14                Dokumentasi       Menjelaskan fitur, Perlu
                                      teknologi, cara    diselesaikan
                                      menjalankan, dan   
                                      batasan website di 
                                      README.            
  ------------------------------------------------------------------------

**Penting:** Kami akan mengganti status "perlu diuji" dengan "berhasil",
"gagal", atau "perlu perbaikan" hanya setelah melakukan pemeriksaan dan
mencatat hasilnya.

------------------------------------------------------------------------

# 4. Kesimpulan

Melalui pengembangan AmanDolanan, kami memanfaatkan AI dalam empat
tahap, yaitu eksplorasi ide dan perancangan solusi, penyusunan kerangka
kode, pemecahan masalah dan penanganan galat, serta refleksi dan
penjelasan kode. Percakapan dengan AI membantu kami menyusun prototipe
yang terdiri dari HTML, CSS, JavaScript, peta Leaflet/OpenStreetMap,
fitur pencarian, filter, favorit, formulir rekomendasi, dan tautan
Google Maps.

Kami memahami bahwa bantuan AI bukan pengganti pemahaman dan tanggung
jawab kami. Kami tetap perlu memeriksa kode, menguji fitur, memastikan
sumber data dapat dipercaya, dan melakukan modifikasi mandiri. Kami juga
memahami bahwa prototipe ini belum mempunyai database online dan
beberapa data lokasi masih memerlukan verifikasi.

Sebelum mengumpulkan proyek, kami akan memastikan logbook ini sesuai
dengan pekerjaan yang benar-benar dilakukan, memperbarui catatan
perubahan, dan tidak menyatakan pengujian yang belum dilaksanakan
sebagai hasil yang sudah berhasil.

------------------------------------------------------------------------

# 5. Format Catatan Tambahan untuk Setiap Interaksi AI Berikutnya

Gunakan format ini setiap kali kami kembali meminta bantuan AI selama
pengembangan, agar semua interaksi baru tercatat dengan jelas.

## Catatan Interaksi \[nomor\]

-   **Tanggal:**
-   **Tahap:** Eksplorasi / Penyusunan Kode / Debugging / Refleksi
-   **Tujuan atau masalah yang kami hadapi:**
-   **Pertanyaan atau instruksi yang kami berikan kepada AI:**
-   **Ringkasan saran atau kode dari AI:**
-   **Bagian yang kami terima:**
-   **Bagian yang kami tolak atau ubah:**
-   **Validasi dan Modifikasi Mandiri Kami:** Jelaskan perubahan yang
    benar-benar kami lakukan, alasan perubahan, serta cara kami
    memeriksanya.
-   **Hasil pengujian nyata:**
-   **Kesimpulan dan tindak lanjut:**
