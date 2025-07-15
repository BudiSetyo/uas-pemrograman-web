# Katakan Tidak pada Narkoba - Web Edukasi & Kampanye

Aplikasi web edukasi dan kampanye anti-narkoba berbasis React, Vite, dan Tailwind CSS. Aplikasi ini memberikan informasi, edukasi, dan kampanye pencegahan narkoba dengan tampilan modern, responsif, serta fitur multimedia.

## Fitur Utama
- Penjelasan tentang narkoba dan bahayanya
- Video edukasi dari YouTube
- Pesan suara anti-narkoba (audio)
- Desain modern, responsif, dan mudah digunakan

## Struktur Folder
```
project-root/
  public/
    anti_narkoba.svg
    assets/
      audio/
        audio.mp3   # File audio pesan anti-narkoba (letakkan di sini)
  src/
    App.tsx        # Komponen utama aplikasi
    main.tsx       # Entry point React
    index.css      # Tailwind CSS
    components/    # Mengelola Components
    assets/        # Mengelola Assets
  index.html
  package.json
  vite.config.ts
  tsconfig.json
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
