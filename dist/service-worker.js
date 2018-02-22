importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "c71e9d14c001dfa0661a10424db23f89"
  },
  {
    "url": "static/css/app.12e7a816766a1a4c8403b68d67765291.css",
    "revision": "81c27f1c20494bcc41d872fc3450a807"
  },
  {
    "url": "static/js/app.870baafa69a1ed5fdf21.js",
    "revision": "1bf85e121bd8e64bc4e02eea5484b14e"
  },
  {
    "url": "static/js/manifest.5771fff2ba9145fa24d0.js",
    "revision": "f41453d24269983545fa956da3b5b618"
  },
  {
    "url": "static/js/vendor.75d5093cbe73348fb7a2.js",
    "revision": "35377c42fea31cfde585cbdb6789a62f"
  },
  {
    "url": "static/sw.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "my-pwa",
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
