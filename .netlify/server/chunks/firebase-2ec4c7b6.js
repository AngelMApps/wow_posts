var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  a: () => auth
});
var import_app = __toModule(require("firebase/compat/app"));
var import_auth = __toModule(require("firebase/compat/auth"));
var import_firestore = __toModule(require("firebase/compat/firestore"));
const firebaseConfig = {
  apiKey: "AIzaSyAEKuAcsPi3fYcjr3_WCczmeuD-uXWXvZg",
  authDomain: "wposts.firebaseapp.com",
  projectId: "wposts",
  storageBucket: "wposts.appspot.com",
  messagingSenderId: "526356329334",
  appId: "1:526356329334:web:1711fc71b05720573ac057",
  measurementId: "G-WHPDND0REJ"
};
import_app.default.initializeApp(firebaseConfig);
const auth = import_app.default.auth();
import_app.default.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    import_app.default.auth().onAuthStateChanged((user) => {
      resolve(user);
    }, reject);
  });
};
import_app.default.firestore();
