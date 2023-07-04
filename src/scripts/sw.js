import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './manifest-icons/manifesticon-512x512.png',
  './manifest-icons/manifesticon-384x385.png',
  './manifest-icons/manifesticon-192x192.png',
  './manifest-icons/manifesticon-152x152.png',
  './manifest-icons/manifesticon-144x144.png',
  './manifest-icons/manifesticon-128x128.png',
  './manifest-icons/manifesticon-96x96.png',
  './manifest-icons/manifesticon-72x72.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './manifest.json',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
