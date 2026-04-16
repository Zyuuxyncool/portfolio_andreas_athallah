# Modern Glass Portfolio

Web portfolio modern dengan dark glassmorphism dan mode toggle light/dark.

## Cara Menjalankan

### Prasyarat
- Node.js versi 18 atau lebih baru
- npm atau yarn

### Langkah-langkah

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka browser di `http://localhost:3000`

### Build untuk Production

```bash
npm run build
```

File hasil build ada di folder `dist/`.

## Fitur

- Dark glassmorphism mode (default)
- Light/white mode toggle
- Animasi scroll dengan Framer Motion
- Fully responsive
- Seksi: Hero, About, Projects, Experience, Contact

## Cara Kustomisasi

Edit data di file-file berikut:
- `src/components/sections/Hero.tsx` — Nama dan tagline
- `src/components/sections/About.tsx` — Bio dan skill
- `src/components/sections/Projects.tsx` — Proyek-proyek
- `src/components/sections/Experience.tsx` — Pengalaman kerja
- `src/components/sections/Contact.tsx` — Info kontak
