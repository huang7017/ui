'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1e873ea186e4f23c3b0a86876c8b9d91",
"version.json": "cef7ca268a5641c2d638b41b5dd2cef3",
"index.html": "5ef871b5f463d7772bff4c9afa59daf0",
"/": "5ef871b5f463d7772bff4c9afa59daf0",
"main.dart.js": "f49efb871aa90537ac0c9812b0c07d3d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9ff2d08cde31b5913f2900dc7795296f",
"assets/AssetManifest.json": "4429067a3d351634b48b25ff17ad7c94",
"assets/NOTICES": "55be4c64917071e94ee53cdfa0bb7f68",
"assets/FontManifest.json": "76db848cf78839df44fbc820c1390b55",
"assets/AssetManifest.bin.json": "24bc07b248b182bdabfdc7726f0c2cfc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/widgetbook/assets/logo.png": "445292cbfde4f60d5b3dca36d0d6dfb2",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/packages/amplify_auth_cognito_dart/lib/src/workers/workers.min.js.map": "1d2af1f0a021761b289f4bf0fed87242",
"assets/packages/amplify_auth_cognito_dart/lib/src/workers/workers.min.js": "77727e3a27ad3662c8fe30922a27626e",
"assets/packages/amplify_secure_storage_dart/lib/src/worker/workers.min.js.map": "9b2bffbaa129cc1c87dc497827f159bd",
"assets/packages/amplify_secure_storage_dart/lib/src/worker/workers.min.js": "c21f04e68a1c1dcfecfad44bcd2e8953",
"assets/packages/hems_installer/inApp_data/live_monitor_2.json": "764e8b1b336f766f31d53751db37a47a",
"assets/packages/hems_installer/inApp_data/live_monitor_3.json": "0affddadfbc67dc7575b71f59d057434",
"assets/packages/hems_installer/inApp_data/device_health_check_list.json": "e7e0bdf562d864adb8591c92da4ecd46",
"assets/packages/hems_installer/inApp_data/live_monitor_4.json": "fc76b03b68d42d72cb59d9d1c69bfb3b",
"assets/packages/hems_installer/inApp_data/live_monitor_5.json": "da8705540d3db25e38ec6272bcdb9ee3",
"assets/packages/hems_installer/inApp_data/new/pcs/current.json": "37ef9c17b1a4b5831e50d3640c146275",
"assets/packages/hems_installer/inApp_data/new/pcs/pcs.json": "3b3e92c70d9d4b2714790a87b4b58031",
"assets/packages/hems_installer/inApp_data/new/device/device_health_check_list.json": "862200bf88345c1520a9f4a1f28d739f",
"assets/packages/hems_installer/inApp_data/device_health_check_detail_battery.json": "bdf45706a130302f5b9f13190ca29b94",
"assets/packages/hems_installer/inApp_data/device_health_check_detail_inverter.json": "6c118af659f113000f1ed4f9b8953313",
"assets/packages/hems_installer/inApp_data/device_health_check_detail_ipc.json": "6abd4a5f1d74624832de218d9a576c4f",
"assets/packages/hems_installer/inApp_data/live_monitor_1.json": "ed3ecc1271168866893d62edadf9eadc",
"assets/packages/hems_installer/assets/images/image_ios_connectwifi.png": "d2f2861cbaec1d196d7721bb9c48a388",
"assets/packages/hems_installer/assets/images/image_ipc.png": "57841d87fb58297048d788db1ed14bd5",
"assets/packages/hems_installer/assets/images/image_battery.png": "487e5407b1cecaeecb525d39fa78d9a3",
"assets/packages/hems_installer/assets/images/2.0x/image_ipc.png": "a80e6f1dbd52e5233d159bc8725d24cf",
"assets/packages/hems_installer/assets/images/2.0x/image_battery.png": "a0bdce6c40533ec5cb3979fd3d499b67",
"assets/packages/hems_installer/assets/images/2.0x/image_unknownDevice.png": "b18476a484b6e2d0327eebe9e03f5801",
"assets/packages/hems_installer/assets/images/2.0x/image_inverter.png": "c717c316f6e7d8eec6fec7d7d9611419",
"assets/packages/hems_installer/assets/images/2.0x/image_cableConnect.png": "5a408deed6b3af276067bbf24ba4e3ff",
"assets/packages/hems_installer/assets/images/2.0x/image_scanqrcode.png": "3a03ead920ec73e28a257ce917c697c3",
"assets/packages/hems_installer/assets/images/2.0x/image_ev.png": "1bd60086cbc08cd83b1853eec9b37882",
"assets/packages/hems_installer/assets/images/image_unknownDevice.png": "18e5a6468659f3e7e6e254fafa634b60",
"assets/packages/hems_installer/assets/images/image_ios_ev_wifi_on.png": "b793d825f1c8bacb0654fa989ac312e9",
"assets/packages/hems_installer/assets/images/image_ios_close_mobileData.png": "8eb170ca5f8712039046ea7070192b1d",
"assets/packages/hems_installer/assets/images/3.0x/image_ipc.png": "b8af72b945223df1afb1296082e9314e",
"assets/packages/hems_installer/assets/images/3.0x/image_battery.png": "b2f48d2ee4b25714fa9b30bc71696248",
"assets/packages/hems_installer/assets/images/3.0x/image_unknownDevice.png": "111026fe9db7a3a606bfb64b85f12c34",
"assets/packages/hems_installer/assets/images/3.0x/image_inverter.png": "c717c316f6e7d8eec6fec7d7d9611419",
"assets/packages/hems_installer/assets/images/3.0x/image_cableConnect.png": "60ba12b546bc372b8fdd5251cdcd7fb4",
"assets/packages/hems_installer/assets/images/3.0x/image_scanqrcode.png": "10dda338f69ac2a25c79a9454afed849",
"assets/packages/hems_installer/assets/images/3.0x/image_ev.png": "1bd60086cbc08cd83b1853eec9b37882",
"assets/packages/hems_installer/assets/images/image_android_connectwifi.png": "e5c1094eaa96d1b84c12c673d3880464",
"assets/packages/hems_installer/assets/images/image_android_wifi_off.png": "3c2bbfb9f96b7e002ab9f143a1f82702",
"assets/packages/hems_installer/assets/images/image_inverter.png": "c717c316f6e7d8eec6fec7d7d9611419",
"assets/packages/hems_installer/assets/images/image_ios_wifi_off.png": "6c610ee7cc126abdd1538583c9a17bf3",
"assets/packages/hems_installer/assets/images/image_cableConnect.png": "e3805ea4e2cc48f5ca2c6c64acd480c5",
"assets/packages/hems_installer/assets/images/terahive_log.png": "62ac53925ff53e4c0022e82aaad44ca2",
"assets/packages/hems_installer/assets/images/image_android_ev_wifi_on.png": "fa0ea9d784bec8bbf410099eab3b102f",
"assets/packages/hems_installer/assets/images/image_scanqrcode.png": "1faea44a84f086eb2e0ad4d09952e4bb",
"assets/packages/hems_installer/assets/images/image_wifi_off.png": "9967b678041b5ee626d7bbc806d19c81",
"assets/packages/hems_installer/assets/images/image_android_close_mobileData.png": "265dd67c7c196dc4ad69dab1cb0efbf9",
"assets/packages/hems_installer/assets/images/lottie_background_morning.png": "cded659f3d846454581e20621ac42f5b",
"assets/packages/hems_installer/assets/images/image_ev.png": "1bd60086cbc08cd83b1853eec9b37882",
"assets/packages/hems_installer/assets/house+weather+power%2520(9).json": "035a76efabccaac823d74933e7be6239",
"assets/packages/hems_installer/assets/icons/icon_expand.svg": "c8c94cc238d3a227ae492fdf13754cec",
"assets/packages/hems_installer/assets/icons/icon_close_circle.svg": "35737c9d286ec0aa849cc136db99de84",
"assets/packages/hems_installer/assets/icons/icon_user.svg": "e2240fa75519b5d4d4b6330b54b09a17",
"assets/packages/hems_installer/assets/animations/checkmark.json": "514416c4092a9a247be89d229e1a2cc9",
"assets/packages/hems_installer/assets/countries_states_cities.json": "b258b49aac8ccb9e2e757f69bcd9564c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e510f4cad9d2bbe34b0292f8a0e682fe",
"assets/fonts/MaterialIcons-Regular.otf": "4f6921e7b5f2036acf94433af316ae3d",
"assets/assets/images/image_ios_connectwifi.png": "d2f2861cbaec1d196d7721bb9c48a388",
"assets/assets/images/image_ipc.png": "57841d87fb58297048d788db1ed14bd5",
"assets/assets/images/image_battery.png": "487e5407b1cecaeecb525d39fa78d9a3",
"assets/assets/images/2.0x/image_ipc.png": "a80e6f1dbd52e5233d159bc8725d24cf",
"assets/assets/images/2.0x/image_battery.png": "a0bdce6c40533ec5cb3979fd3d499b67",
"assets/assets/images/2.0x/image_unknownDevice.png": "b18476a484b6e2d0327eebe9e03f5801",
"assets/assets/images/2.0x/image_inverter.png": "c717c316f6e7d8eec6fec7d7d9611419",
"assets/assets/images/2.0x/image_cableConnect.png": "5a408deed6b3af276067bbf24ba4e3ff",
"assets/assets/images/2.0x/image_scanqrcode.png": "3a03ead920ec73e28a257ce917c697c3",
"assets/assets/images/2.0x/image_ev.png": "1bd60086cbc08cd83b1853eec9b37882",
"assets/assets/images/image_unknownDevice.png": "18e5a6468659f3e7e6e254fafa634b60",
"assets/assets/images/image_ios_ev_wifi_on.png": "b793d825f1c8bacb0654fa989ac312e9",
"assets/assets/images/image_ios_close_mobileData.png": "8eb170ca5f8712039046ea7070192b1d",
"assets/assets/images/3.0x/image_ipc.png": "b8af72b945223df1afb1296082e9314e",
"assets/assets/images/3.0x/image_battery.png": "b2f48d2ee4b25714fa9b30bc71696248",
"assets/assets/images/3.0x/image_unknownDevice.png": "111026fe9db7a3a606bfb64b85f12c34",
"assets/assets/images/3.0x/image_inverter.png": "c717c316f6e7d8eec6fec7d7d9611419",
"assets/assets/images/3.0x/image_cableConnect.png": "60ba12b546bc372b8fdd5251cdcd7fb4",
"assets/assets/images/3.0x/image_scanqrcode.png": "10dda338f69ac2a25c79a9454afed849",
"assets/assets/images/3.0x/image_ev.png": "1bd60086cbc08cd83b1853eec9b37882",
"assets/assets/images/image_android_connectwifi.png": "e5c1094eaa96d1b84c12c673d3880464",
"assets/assets/images/image_android_wifi_off.png": "3c2bbfb9f96b7e002ab9f143a1f82702",
"assets/assets/images/image_inverter.png": "c717c316f6e7d8eec6fec7d7d9611419",
"assets/assets/images/image_ios_wifi_off.png": "6c610ee7cc126abdd1538583c9a17bf3",
"assets/assets/images/image_cableConnect.png": "e3805ea4e2cc48f5ca2c6c64acd480c5",
"assets/assets/images/terahive_log.png": "62ac53925ff53e4c0022e82aaad44ca2",
"assets/assets/images/image_android_ev_wifi_on.png": "fa0ea9d784bec8bbf410099eab3b102f",
"assets/assets/images/image_scanqrcode.png": "1faea44a84f086eb2e0ad4d09952e4bb",
"assets/assets/images/image_wifi_off.png": "9967b678041b5ee626d7bbc806d19c81",
"assets/assets/images/image_android_close_mobileData.png": "265dd67c7c196dc4ad69dab1cb0efbf9",
"assets/assets/images/lottie_background_morning.png": "cded659f3d846454581e20621ac42f5b",
"assets/assets/images/image_ev.png": "1bd60086cbc08cd83b1853eec9b37882",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
