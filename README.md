# Katakan Tidak pada Narkoba - Web Edukasi & Kampanye

Aplikasi web edukasi dan kampanye anti-narkoba berbasis React + Vite + Tailwind CSS.

## Fitur Utama
- Penjelasan tentang narkoba dan bahayanya
- Tabel jenis narkoba dan efeknya
- Video edukasi dari YouTube
- Pesan suara anti-narkoba (audio)
- Form dukungan gerakan anti-narkoba
- Sumber daya tambahan (tautan ke BNN)
- Desain modern, responsif, dan mudah digunakan

## Struktur Folder
```
project-root/
  public/
    assets/
      audio/
        audio.mp3   # File audio pesan anti-narkoba
  src/
    App.tsx        # Komponen utama aplikasi
    main.tsx       # Entry point React
    index.css      # Tailwind CSS
  index.html
  package.json
  tailwind.config.js
  vite.config.ts
  ...
```

## Cara Menjalankan
1. Pastikan Node.js & npm sudah terpasang.
2. Clone repo ini dan masuk ke folder project.
3. Install dependensi:
   ```bash
   npm install
   ```
4. Jalankan aplikasi:
   ```bash
   npm run dev
   ```
5. Buka browser ke `http://localhost:5173` (atau port yang tertera di terminal).

## Catatan Penting
- File audio harus diletakkan di `public/assets/audio/audio.mp3` agar dapat diputar.
- Untuk mengganti video edukasi, ubah link YouTube pada bagian Video Edukasi di `App.tsx`.
- Untuk mengganti pesan suara, ganti file audio di folder `public/assets/audio/`.

## Stack Teknologi
- React
- Vite
- Tailwind CSS
- Lucide React Icons

## Lisensi
Aplikasi ini dibuat untuk tujuan edukasi dan kampanye sosial. Silakan gunakan dan modifikasi sesuai kebutuhan.
