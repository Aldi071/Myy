# Website Kenangan Kita - Cerita Cinta Kami

Website romantis yang dibuat untuk merayakan kenangan indah bersama pasangan. Didesain dengan elegan menggunakan warna-warna lembut dan penuh fitur interaktif.

## Fitur Utama

### 🎨 Desain Elegan
- Warna tema lembut (rose gold, dusty pink, cream)
- Font Playfair Display untuk judul elegan
- Font Inter untuk teks biasa
- Background Vanta.js dengan efek burung bergerak

### 📱 Responsif & Modern
- Fully responsive design untuk semua perangkat
- Animasi fade-in yang smooth saat scroll
- Timeline perjalanan cinta yang interaktif
- Gallery foto dengan card design

### ✨ Animasi & Efek
- **Scroll Animations**: Setiap elemen muncul dengan animasi fade-in
- **Hover Effects**: Card mengangkat saat di-hover
- **Floating Hearts**: Hati-hati kecil berjatuhan secara acak
- **Gradient Text**: Judul dengan efek gradient bergerak
- **Progress Bar**: Indikator scroll di bagian atas

### 📸 Konten
- **Timeline Perjalanan Cinta**: 5 momen spesial dengan foto dan deskripsi
- **Gallery Foto**: 6 foto kenangan dengan card design
- **Pesan Personal**: Section dengan quotes romantis
- **Statistik Cinta**: Counter hari bersama dan simbol cinta

## Struktur File

```
/
├── index.html      # File utama website
├── script.js       # JavaScript untuk animasi dan interaktivitas
├── README.md       # Dokumentasi ini
└── resources/      # Folder untuk assets (jika ada)
```

## Teknologi yang Digunakan

- **HTML5**: Struktur website
- **Tailwind CSS**: Framework CSS untuk styling
- **JavaScript**: Animasi dan interaktivitas
- **Vanta.js**: Background animasi 3D
- **Three.js**: Library untuk Vanta.js
- **Google Fonts**: Playfair Display & Inter

## Cara Menggunakan

1. **Buka Website**: Buka file `index.html` di browser
2. **Scroll Down**: Nikmati animasi saat scroll
3. **Hover Effects**: Arahkan kursor ke card untuk efek hover
4. **Mobile Friendly**: Dapat diakses dari perangkat mobile

## Customization

### Mengubah Warna Tema
Edit file `index.html` pada bagian CSS:
```css
--primary-color: #d4a574;  /* Warna utama */
--secondary-color: #e8b4b8; /* Warna sekunder */
--accent-color: #f9f2f2;   /* Warna aksen */
```

### Menambahkan Timeline
Tambahkan item baru di bagian timeline:
```html
<div class="timeline-item flex items-center">
    <div class="w-1/2 pr-8 text-right">
        <div class="memory-card rounded-2xl p-6">
            <div class="text-sm text-rose-400 font-medium mb-2">TANGGAL</div>
            <h3 class="text-2xl font-semibold mb-3" style="color: #d4a574;">JUDUL</h3>
            <p class="text-gray-600">DESKRIPSI KENANGAN</p>
        </div>
    </div>
    <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-rose-400 rounded-full border-4 border-white shadow-lg"></div>
    <div class="w-1/2 pl-8">
        <img src="URL_GAMBAR" alt="ALT_TEXT" class="rounded-2xl shadow-lg w-full h-48 object-cover">
    </div>
</div>
```

### Menambahkan Foto di Gallery
Tambahkan card baru di bagian gallery:
```html
<div class="memory-card rounded-2xl overflow-hidden fade-in">
    <img src="URL_GAMBAR" alt="ALT_TEXT" class="w-full h-64 object-cover">
    <div class="p-6">
        <h3 class="text-xl font-semibold mb-2" style="color: #d4a574;">JUDUL</h3>
        <p class="text-gray-600">DESKRIPSI FOTO</p>
    </div>
</div>
```

## Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile Browsers

## Performance

- **Optimized Images**: Semua gambar di-optimize untuk web
- **Lazy Loading**: Animasi hanya berjalan saat elemen terlihat
- **Smooth Animations**: 60fps animations menggunakan CSS transforms
- **Mobile Optimized**: Touch-friendly dan responsive

## Credits

- **Images**: Unsplash, Pexels (via image search API)
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Animations**: Vanta.js, Custom CSS
- **Icons**: Heroicons, Custom SVG

## License

Personal use only. Dibuat untuk keperluan kenang-kenangan pribadi.

---

💝 *Dibuat dengan cinta untuk orang yang paling berarti* 💝