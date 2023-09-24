'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c245494e58960ac5d6308d0331e021f3",
"assets/AssetManifest.json": "9a3899157a384d560ea3976bf462c37d",
"assets/assets/fonts/poppins/Poppins-Black.ttf": "0573b9231a8316427ad6e751b52e87a4",
"assets/assets/fonts/poppins/Poppins-BlackItalic.ttf": "3fb21c8084013f3d0176bc98bcf76e60",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-BoldItalic.ttf": "09775bde3e9448b38c063b746e21cb6b",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/assets/fonts/poppins/Poppins-ExtraBoldItalic.ttf": "29f7dd016eeed2bcd79ba482eb3f27ec",
"assets/assets/fonts/poppins/Poppins-ExtraLight.ttf": "86a2f13e91ac85080ebaeaab9463b9f1",
"assets/assets/fonts/poppins/Poppins-ExtraLightItalic.ttf": "05139b6509a2baa8f188fbade78fc3ed",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-LightItalic.ttf": "1eaf3af47612e6163a2e27e847c6ac7d",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-MediumItalic.ttf": "1749e4b603749026393f64506a3bcbbe",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/Poppins-SemiBoldItalic.ttf": "378a091bc1b1e6e6d6327beb6bfb07b9",
"assets/assets/fonts/poppins/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/assets/fonts/poppins/Poppins-ThinItalic.ttf": "c93e22e98b7a8d58f83ce42b278815eb",
"assets/assets/images/dot.png": "29c310cf9ce531815fb405672e163cd1",
"assets/assets/images/image1.png": "c20024426e3cb468077da1f986aef9fc",
"assets/assets/images/image2.png": "231d9b7a867e15658a038ab7d236704d",
"assets/assets/images/image3.png": "0f83986c56aca9464836d06bc333265d",
"assets/assets/images/image4.jpg": "fc2a8c349bd219f6fa76008f1e430693",
"assets/assets/images/image5.jpg": "4405015ceabe02780c3fdfa21a46d771",
"assets/assets/images/img-1.png": "f2cbdb3f348b5611aabedcf028192599",
"assets/assets/images/img-2.png": "f98f8af50e27024fbd3e1db2e1ade674",
"assets/assets/images/img-3.png": "042279ff17bebbe411bd08c23edc14a4",
"assets/assets/images/raster/avatar-1.png": "038abc501087aefce746e3cb7fb8494b",
"assets/assets/images/raster/avatar-2.png": "0fe16aa5bd1c9033f32d71ddb993c91f",
"assets/assets/images/raster/avatar-3.png": "53437fa458fc601e4b96c25c2e1507f9",
"assets/assets/images/raster/avatar-4.png": "6140a06fa0ab4908aa8a935f951cd8d2",
"assets/assets/images/raster/avatar-5.png": "bd608d7293941c6df8b9acd5b36faa7f",
"assets/assets/images/raster/avatar-6.png": "b45be2fdfb522cc3687cd2701afb1a97",
"assets/assets/images/raster/avatar-7.png": "46ddd2bad19579e222454be61d251fee",
"assets/assets/images/raster/avatar-8.png": "8d36c0d6cea93a38a175c21a01ccc6d0",
"assets/assets/images/raster/logo-1.png": "4405015ceabe02780c3fdfa21a46d771",
"assets/assets/images/raster/logo-2.png": "fc2a8c349bd219f6fa76008f1e430693",
"assets/assets/images/raster/logo-3.png": "0f83986c56aca9464836d06bc333265d",
"assets/assets/images/raster/logo-4.png": "17732192a654a5626f85479374fa7af0",
"assets/assets/images/raster/thumbnail.png": "72618c0111de43858c6df58cbd5dfe38",
"assets/assets/images/splash.png": "4330dcd59c375462e3dd0f35f76306d5",
"assets/assets/images/student_profile.jpeg": "d3a636bfc7b542b4da5de98b3f9b4624",
"assets/assets/images/vector/boarding1.png": "868457580ddf5f3ed2b4a0b681f0e841",
"assets/assets/images/vector/boarding2.png": "612219034cb7793ad145f388542853bb",
"assets/assets/images/vector/boarding3.png": "6cd011b6d63e58923e6ef1bb49111e1c",
"assets/assets/images/vector/boarding4.png": "29a72613f18045da1b3954ace27b0611",
"assets/assets/images/vector/class.svg": "7be45d1ca75b02c5dba311936fd0127a",
"assets/assets/images/vector/happy-2%2520(copy%25201).png": "bf5170fdad8b2d38cd42072669d55360",
"assets/assets/images/vector/happy-2.svg": "bf5170fdad8b2d38cd42072669d55360",
"assets/assets/images/vector/happy.svg": "0fdd229a2a0b16b64d866d6ba7a892c9",
"assets/assets/images/vector/how.svg": "d6ec7e4357ddaff75d2ffe1b2a535f0d",
"assets/assets/images/vector/splash1.png": "d2d50379e1f471f8d16147f89d4aa4bc",
"assets/assets/images/vector/splash2.png": "347063156fd4891a7eb1710ea48f2b9e",
"assets/assets/images/vector/splash3.png": "0fa138771b8ce2fdaa6e6e6750a4fc94",
"assets/assets/images/vector/wavy-bus.svg": "a0a4c269539613572cbaec495a537bc6",
"assets/assets/kurikulummerdeka.mp4": "be48b7be2f92168a761aaa9bb875f180",
"assets/assets/logo.png": "8e5bd922a61f3bb65a38f12fe11dc50f",
"assets/assets/videopra.mp4": "ab0d54d82ac966a3ad2a41adb3a5f342",
"assets/FontManifest.json": "6d119dd35c1a3395ee55e7ee6027885a",
"assets/fonts/MaterialIcons-Regular.otf": "042853e021d0347dc5b05839e7984729",
"assets/NOTICES": "1744ba6d4a3abeccb8e7b2e4f780487c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "b3cfd6832181cbaa3c98988c49d34641",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8f49a9f17139667e4aac297132247f2d",
"/": "8f49a9f17139667e4aac297132247f2d",
"main.dart.js": "1a637a23b556726e7f0245be4e3daf9e",
"manifest.json": "6d03a55da5a1e70b1fc04ee56d9fc0ae",
"version.json": "3dd825741cd7115895dfffafcdd06914"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
