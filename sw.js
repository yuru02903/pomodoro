if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let l={};const o=e=>i(e,a),f={module:{uri:a},exports:l,require:o};s[a]=Promise.all(n.map((e=>f[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"19f69cf738be604ec2ea8c45c6f675ae"},{url:"android-chrome-512x512.png",revision:"858d8dbf387b8deb9c0bfcc834c9aefd"},{url:"apple-touch-icon.png",revision:"f2a6a7c524331ffbf16782f75f33cb93"},{url:"assets/HomeView-6ebd9a97.js",revision:null},{url:"assets/index-42d80fc2.js",revision:null},{url:"assets/index-9389998b.css",revision:null},{url:"assets/list-69e389da.js",revision:null},{url:"assets/ListView-1cfd68d9.css",revision:null},{url:"assets/ListView-8cf2aa9d.js",revision:null},{url:"assets/materialdesignicons-webfont-48d3eec6.woff",revision:null},{url:"assets/materialdesignicons-webfont-861aea05.eot",revision:null},{url:"assets/materialdesignicons-webfont-bd725a7a.ttf",revision:null},{url:"assets/materialdesignicons-webfont-e52d60f6.woff2",revision:null},{url:"assets/settings-93b73ea5.js",revision:null},{url:"assets/SettingsView-52847e58.css",revision:null},{url:"assets/SettingsView-592160db.js",revision:null},{url:"assets/tomato-fe6b03eb.png",revision:null},{url:"assets/VInput-e7eb76b1.js",revision:null},{url:"assets/VInput-fe8650e4.css",revision:null},{url:"assets/VRow-89bd8ebb.js",revision:null},{url:"favicon-16x16.png",revision:"5f42e6d6323691040f911461bba73f5f"},{url:"favicon-32x32.png",revision:"787892edbac19bdd4a310c095ae5295f"},{url:"favicon.ico",revision:"a0db394a7a6abf19629dfff2fc3cfb30"},{url:"index.html",revision:"4fc17801771ff2b8028df0e299a68acd"},{url:"mstile-150x150.png",revision:"55ae468f803236014059065cb785fc19"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"safari-pinned-tab.svg",revision:"3f43a66b0ad2d4f3cb9d8d75656a2459"},{url:"splashscreens/ipad_splash.png",revision:"1a5fd4a0d9063af66a978f46edb885e8"},{url:"splashscreens/ipadpro1_splash.png",revision:"b05c527e11fed153163e204e419904a8"},{url:"splashscreens/ipadpro2_splash.png",revision:"63611e8bb7120a01f472547179e8e6dd"},{url:"splashscreens/ipadpro3_splash.png",revision:"5a99f37ae157d0ae73651dd76df34752"},{url:"splashscreens/iphone5_splash.png",revision:"2f3fea0b0e4d4788e6a1178699ca8e94"},{url:"splashscreens/iphone6_splash.png",revision:"106c3a3237e946f583e967a6758dfe4d"},{url:"splashscreens/iphoneplus_splash.png",revision:"9ca93e7cb99d47a6b3284bd2e8607ff9"},{url:"splashscreens/iphonex_splash.png",revision:"b96ebe2ae46f6df9dd7d8c6c5b47e521"},{url:"splashscreens/iphonexr_splash.png",revision:"863053c7370dd853330a78c9438a380e"},{url:"splashscreens/iphonexsmax_splash.png",revision:"a9042aff4c2ba3d2b704c8632c0d454f"},{url:"./android-chrome-192x192.png",revision:"19f69cf738be604ec2ea8c45c6f675ae"},{url:"./android-chrome-512x512.png",revision:"858d8dbf387b8deb9c0bfcc834c9aefd"},{url:"manifest.webmanifest",revision:"20d3fedf5d424126bcf77a45e95cf2a8"}],{ignoreURLParametersMatching:[/.*/]}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
