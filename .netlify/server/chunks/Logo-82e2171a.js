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
  L: () => Logo,
  N: () => Notifications
});
var import_index_16b27e1b = __toModule(require("./index-16b27e1b.js"));
var Notifications_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#snackbar.svelte-1rilfre{min-width:250px;margin-right:10px;background-color:rgb(0, 0, 0);color:rgb(255, 255, 255);text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;right:0%;bottom:80px}.animation-in.svelte-1rilfre{animation:svelte-1rilfre-fadein 0.5s, svelte-1rilfre-fadeout 0.5s 2.5s}.not-show.svelte-1rilfre{display:none}@-webkit-keyframes svelte-1rilfre-fadein{from{bottom:0;opacity:0}to{bottom:80px;opacity:1}}@keyframes svelte-1rilfre-fadein{from{bottom:0;opacity:0}to{bottom:80px;opacity:1}}@-webkit-keyframes svelte-1rilfre-fadeout{from{bottom:80px;opacity:1}to{bottom:0;opacity:0}}@keyframes svelte-1rilfre-fadeout{from{bottom:80px;opacity:1}to{bottom:0;opacity:0}}",
  map: null
};
const Notifications = (0, import_index_16b27e1b.c)(($$result, $$props, $$bindings, slots) => {
  let { message = "" } = $$props;
  let { show = false } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  $$result.css.add(css$1);
  return `<div><div id="${"snackbar"}" class="${(0, import_index_16b27e1b.e)((0, import_index_16b27e1b.w)(show ? "animation-in" : "not-show")) + " svelte-1rilfre"}">${(0, import_index_16b27e1b.e)(message)}</div>
</div>`;
});
var Logo_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-vr2uig{background-color:rgba(46, 97, 67, 0.959);width:4rem;height:4rem;border-radius:35px;display:flex;flex-direction:column;justify-content:center;align-items:center}strong.svelte-vr2uig{color:#fff;font-size:20pt}",
  map: null
};
const Logo = (0, import_index_16b27e1b.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"svelte-vr2uig"}"><strong class="${"svelte-vr2uig"}">WP</strong></div>



`;
});
