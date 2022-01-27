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
  default: () => Register
});
var import_index_16b27e1b = __toModule(require("../../../chunks/index-16b27e1b.js"));
var import_firebase_2ec4c7b6 = __toModule(require("../../../chunks/firebase-2ec4c7b6.js"));
var import_Logo_82e2171a = __toModule(require("../../../chunks/Logo-82e2171a.js"));
var import_app = __toModule(require("firebase/compat/app"));
var import_auth = __toModule(require("firebase/compat/auth"));
var import_firestore = __toModule(require("firebase/compat/firestore"));
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-x5za1l.svelte-x5za1l{height:100vh;background:#006b3d;background:linear-gradient(90deg, #006b3d 0%, #35b6a5 48%, #005c69 100%)}h1.svelte-x5za1l.svelte-x5za1l{color:#fff;font-size:30pt;margin:0px 0px 25px 0px;text-align:center}.form-div.svelte-x5za1l.svelte-x5za1l{width:320px;height:420px;background:#1c5232;color:#fff;top:50%;left:50%;position:absolute;border-radius:5px;transform:translate(-50%, -50%);box-sizing:border-box;box-shadow:0px 4px 50px 10px #000;padding:70px 30px;display:flex;flex-direction:column;align-items:center}.form-div.svelte-x5za1l .avatar.svelte-x5za1l{width:4rem;height:4rem;border-radius:50%;box-shadow:1px 1px 20px 3px #000;position:absolute;top:-30px;left:calc(57% - 50px)}.inputs.svelte-x5za1l.svelte-x5za1l{border:1px solid #fff;background-color:transparent;color:#fff;border-radius:2px;height:2.5rem;padding:0px 10px;margin:5px 0px}.inputs.svelte-x5za1l.svelte-x5za1l::-webkit-input-placeholder{color:#fff}.inputs.svelte-x5za1l.svelte-x5za1l::-moz-placeholder{color:#fff}.button-submit.svelte-x5za1l.svelte-x5za1l{width:100%;border:1px solid transparent;background-color:rgba(25, 185, 76, 0.959);border-radius:2px;height:2.5rem;margin:5px 0px;cursor:pointer;font-size:20px;transition:border 1s, background-color 1s, color 1s;color:#000}.button-submit.svelte-x5za1l.svelte-x5za1l:hover{border:1px solid #fff;background-color:transparent;color:#fff;transition:border 1s, background-color 1s, color 1s}@media only screen and (max-width: 354px){.form-div.svelte-x5za1l.svelte-x5za1l{width:100%}.inputs.svelte-x5za1l.svelte-x5za1l{width:100%}}",
  map: null
};
const Register = (0, import_index_16b27e1b.c)(($$result, $$props, $$bindings, slots) => {
  let messageNotification = "";
  let showNotification = false;
  $$result.css.add(css);
  return `<div class="${"container svelte-x5za1l"}">${(0, import_index_16b27e1b.v)(import_Logo_82e2171a.N, "Notificacion").$$render($$result, {
    message: messageNotification,
    show: showNotification
  }, {}, {})}
	<div class="${"form-div svelte-x5za1l"}"><h1 class="${"svelte-x5za1l"}">WPosts</h1>
		<div class="${"avatar svelte-x5za1l"}">${(0, import_index_16b27e1b.v)(import_Logo_82e2171a.L, "Logo").$$render($$result, {}, {}, {})}</div>
		<input class="${"inputs svelte-x5za1l"}" type="${"email"}" id="${"email"}" name="${"email"}" size="${"30"}" placeholder="${"Email"}" required>
		<input class="${"inputs svelte-x5za1l"}" type="${"password"}" id="${"password"}" name="${"password"}" size="${"30"}" required placeholder="${"Password"}">
		<button class="${"button-submit svelte-x5za1l"}">register</button></div>
</div>`;
});
