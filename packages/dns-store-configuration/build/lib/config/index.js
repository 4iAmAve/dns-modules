"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_persist_1 = require("redux-persist");
var history_1 = require("history");
var connected_react_router_1 = require("connected-react-router");
var redux_thunk_1 = require("redux-thunk");
var storage_1 = require("redux-persist/lib/storage");
var IS_DEV = process.env.NODE_ENV === 'development';
var BASENAME = process.env.BASENAME || '';
exports.history = history_1.createBrowserHistory({
    basename: BASENAME
});
var persistConfig = function (id, whitelist) { return ({
    key: 'data',
    keyPrefix: id + "-",
    storage: storage_1.default,
    whitelist: whitelist,
}); };
var middlewares = [
    redux_thunk_1.default,
    connected_react_router_1.routerMiddleware(exports.history),
];
var noop = function (f) { return f; };
var composeEnhancers = noop;
if (IS_DEV && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}
else {
    composeEnhancers = redux_1.compose;
}
var persistedReducer = function (id, rootReducer, whitelist) {
    return redux_persist_1.persistReducer(persistConfig(id, whitelist), rootReducer(exports.history));
};
exports.configureStore = function (storeConfig) {
    var _a = storeConfig.id, id = _a === void 0 ? 'store' : _a, initialState = storeConfig.initialState, rootReducer = storeConfig.rootReducer, _b = storeConfig.whitelist, whitelist = _b === void 0 ? [] : _b;
    var store = redux_1.createStore(persistedReducer(id, rootReducer, whitelist), initialState, composeEnhancers(redux_1.applyMiddleware.apply(void 0, middlewares)));
    var persistor = redux_persist_1.persistStore(store);
    return { store: store, persistor: persistor };
};
