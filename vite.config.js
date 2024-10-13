export default {
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    https: false,
    port: 3000,
    strictPort: true,
    hmr: {
      host: 'localhost', // Anpassung an deine lokale Domain
      protocol: 'ws',
    },
    proxy: {
      '/': {
        target: 'https://kirby-starterkit.test',  // Falls deine Kirby-Seite HTTPS verwendet
        changeOrigin: true, // Sorgt dafür, dass der Host im Request-Header geändert wird
        secure: true,
      },
    },
  },
  build: {
    outDir: 'assets', // Der Pfad, wo die Dateien abgelegt werden, je nach deiner Kirby-Struktur
  },
  publicDir: 'assets',
};
