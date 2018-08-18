"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(cb) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        var publicUrl = new URL(process.env.PUBLIC_URL, window.location.toString());
        if (publicUrl.origin !== window.location.origin) {
            return;
        }
        window.addEventListener('load', function () {
            var swUrl = process.env.PUBLIC_URL + "/service-worker.js";
            if (!isLocalhost) {
                registerValidSW(swUrl, cb);
            }
            else {
                checkValidServiceWorker(swUrl, cb);
            }
        });
    }
}
function registerValidSW(swUrl, cb) {
    navigator.serviceWorker
        .register(swUrl)
        .then(function (registration) {
        registration.onupdatefound = function () {
            var installingWorker = registration.installing;
            if (installingWorker) {
                installingWorker.onstatechange = function () {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            console.log('New content is available; please refresh.');
                            if (cb) {
                                cb();
                            }
                        }
                        else {
                            console.log('Content is cached for offline use.');
                        }
                    }
                };
            }
        };
    })
        .catch(function (error) {
        console.error('Error during service worker registration:', error);
    });
}
function checkValidServiceWorker(swUrl, cb) {
    fetch(swUrl)
        .then(function (response) {
        if (response.status === 404 ||
            response.headers.get('content-type').indexOf('javascript') === -1) {
            navigator.serviceWorker.ready.then(function (registration) {
                registration.unregister().then(function () {
                    window.location.reload();
                });
            });
        }
        else {
            registerValidSW(swUrl, cb);
        }
    })
        .catch(function () {
        console.log('No internet connection found. App is running in offline mode.');
    });
}
function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function (registration) {
            registration.unregister();
            console.log('unregistered service worker');
        });
    }
}
exports.default = {
    register: register,
    unregister: unregister,
};
