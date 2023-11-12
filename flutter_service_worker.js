'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMITMESSAGE": "f1c404692bf816981ed196ee5bbd6db5",
".git/COMMIT_EDITMSG": "4b121aada7ef21034f2a8e12b53cdc10",
".git/config": "d20e7c8c185b6241c5bb9f8e4e63a413",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "baa5642a1e7348667dbeca3253a1c60d",
".git/fork-settings": "3f6998df4232a31770facb15b143db9c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4104dfc389288128fba1bfdf06f10666",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6f67ebefafa462c1d980999315a7008c",
".git/logs/refs/heads/main": "de9d6122da82bd055f6bb43ebd8e6419",
".git/logs/refs/remotes/origin/main": "75cdc0d9bd92e756698b32c9ffb25d82",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/05/25c1964a8672dab87811c14f29b3e4cfa0cb21": "a49e24c1afccf86bb7b06a3deba07b21",
".git/objects/08/bb8ba49e92e938e5003c45f65c2524aba0e47b": "96f216fda5c2c40617e935869929f476",
".git/objects/0a/1046ff4bd122d10b46a182e427f632fb5c086d": "6257e9b47aab18bda01da159c9ef56db",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/2d/d8e9a47278de837fe9c91d620ed95768acd902": "91d67ff68b09a3dd3e6eb7c1c6f07bad",
".git/objects/2e/28250a078fc64c73f9381aa7d57169570f9bf5": "5f1a7ad7803e274f6c9ead921ced78cf",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/43/f07e28ca57d8363d694716bed20b7db63981b1": "8b99edc81d4ee9aeeb0661a732d6b7b6",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/50/d6da76a841f18610e9cd50671677410a67a7ea": "dc6b39180165c416e3d00d0527f3462f",
".git/objects/59/39a02b74452622bd596cead6f1a3149579a840": "1e7d471b77899be258d2e731ae27fe04",
".git/objects/74/baad63a7c58e33b4582444b782eb160b856639": "8099b8aa70c09219bc6f87ac76eed66c",
".git/objects/7f/fe0d920d2790c7907f2d3fd98a7a5e28ada91e": "04b3788b621749451b72ca1843347964",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/082c8de090865264d37594e396c4d6c0099fe4": "5117224fcb2873172ee6cba59c00a7ee",
".git/objects/8c/5307059a71aabd3f38b33b9a859c886993ae8b": "55c212043544e9ca645d263ffaf05e93",
".git/objects/8c/a8e73004450ff9329bff45658d748b5a440d50": "7625cb6a249ed868322c6ec0ec84c5b2",
".git/objects/94/656f91682f28b3eb3fd63470bbeb45c5f39228": "4db0977a14d0ba7a84b4409ecb93a974",
".git/objects/95/cfb8fbcda8552f3ec3295b8ec394bf31a70661": "a445db053a955dfb3e3e28d797484c29",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/97/2581caae901637c8f1aa453d12ea5f9090a6d0": "96faf7301d20c5e43d478aa0200942af",
".git/objects/a5/feda21f417e93f394ce6b843197d62d521a52e": "279166db86f4faacdd2b21f2c82e0731",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ae/f72dd703483eb89c557d1e0e2432579293a4a2": "12187d63313e5aded5e1dc788b1c1de0",
".git/objects/b1/ddd80b07eaee8ea5db1dac3fd25b15fcabe4e3": "d94e83299703d047d1ae6ef3e9665465",
".git/objects/b2/1d11bb5ad4b292b1f37f482144b58a821c893e": "81db23663a05284141890234ff693028",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c8/2dca75d45063a31b5d621f4a948142bdf64970": "96f13101d44de1de3f2b0f84e5d9b590",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ae522ed7642f8815de3808a78a557cf9e7f009": "c79ba68d3269de9bd97735c99e3a2865",
".git/objects/e5/7ce6785ced7834269e260a8b79eb4520b02d01": "9b12ed4e07847e68468964aa8f2e5ad0",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/main": "e27d6e7f806af65844208b69549f47f2",
".git/refs/remotes/origin/main": "e27d6e7f806af65844208b69549f47f2",
"assets/AssetManifest.bin": "dfdac9e363ed63753be0d3fa51071306",
"assets/AssetManifest.json": "277f0490e1f7a7fc0d3177cbff7db0c0",
"assets/FontManifest.json": "6f5744f40eb3064f030b4e03a74f67a5",
"assets/fonts/MaterialIcons-Regular.otf": "71cb29021dbe12af867598aa99a52b1c",
"assets/NOTICES": "de23eb93153d7b14dcfd28a0da38ff69",
"assets/packages/golden_toolkit/fonts/Roboto-Regular.ttf": "ac3f799d5bbaf5196fab15ab8de8431c",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d6e6eb0873d1c9b2f5449331ef8e3e72",
"/": "d6e6eb0873d1c9b2f5449331ef8e3e72",
"main.dart.js": "6254ee160f88b97669ed0a95c8136583",
"manifest.json": "bf9f34e9e76869d1676e1e3225cc5c6c",
"version.json": "ef0d29ec5c5f68741178c39c83861048"};
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
