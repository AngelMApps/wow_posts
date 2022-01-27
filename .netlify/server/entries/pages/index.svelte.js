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
  default: () => Routes
});
var import_index_16b27e1b = __toModule(require("../../chunks/index-16b27e1b.js"));
var import_index_61cefdad = __toModule(require("../../chunks/index-61cefdad.js"));
var import_firebase_2ec4c7b6 = __toModule(require("../../chunks/firebase-2ec4c7b6.js"));
var import_app = __toModule(require("firebase/compat/app"));
var import_auth = __toModule(require("firebase/compat/auth"));
var import_firestore = __toModule(require("firebase/compat/firestore"));
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1oqgg4b{height:100%;background-color:transparent}img.svelte-1oqgg4b{height:50px;width:50px;border-radius:99px}hr.svelte-1oqgg4b{color:#000;background-color:#000;border:none;height:1px;display:block;unicode-bidi:isolate;margin-block-start:0px;margin-block-end:0px;margin-inline-start:0px;margin-inline-end:0px;overflow:hidden}",
  map: null
};
const Routes = (0, import_index_16b27e1b.c)(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = (0, import_index_16b27e1b.a)(import_index_61cefdad.u, (value) => $user = value);
  let posts = [];
  $$result.css.add(css);
  $$unsubscribe_user();
  return `${$user === null ? `<p>CARGANGO...</p>` : `${$user != false ? `${(0, import_index_16b27e1b.v)(import_index_61cefdad.N, "Navbar").$$render($$result, {}, {}, {})}
	<main class="${"svelte-1oqgg4b"}">${(0, import_index_16b27e1b.v)(import_index_61cefdad.L, "LayoutGrid").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_16b27e1b.b)(posts, (p, i) => {
        return `${(0, import_index_16b27e1b.v)(import_index_61cefdad.C, "Cell").$$render($$result, { order: posts.length + 1 - i }, {}, {
          default: () => {
            return `<div class="${"card-container"}">${(0, import_index_16b27e1b.v)(import_index_61cefdad.a, "Card").$$render($$result, {}, {}, {
              default: () => {
                return `${(0, import_index_16b27e1b.v)(import_index_61cefdad.b, "Content").$$render($$result, { style: "word-wrap: break-word;" }, {}, {
                  default: () => {
                    return `${p.text[0] == "#" ? `<span style="${"color: #3498DB;"}">${(0, import_index_16b27e1b.e)(p.text.split(" ")[0])}</span>` : `<span style="${"color: #000;"}">${(0, import_index_16b27e1b.e)(p.text.split(" ")[0])}</span>`}
								<span style="${"color: #000;"}">${(0, import_index_16b27e1b.e)(p.text.slice(p.text.split(" ")[0].length, p.text.length))}</span>
								<br>
								<br>
								<hr class="${"svelte-1oqgg4b"}">
							`;
                  }
                })}
							${(0, import_index_16b27e1b.v)(import_index_61cefdad.A, "Actions").$$render($$result, {
                  style: "display: flex;flex-direction:row;justify-content: space-between;"
                }, {}, {
                  default: () => {
                    return `<div style="${"display: flex; flex-direction: row; align-items: center;"}"><img${(0, import_index_16b27e1b.d)("src", p.avatar, 0)} alt="${"avatar"}" class="${"svelte-1oqgg4b"}">
									<div style="${"display: flex; flex-direction: column; justify-content: center; margin-left: 5px;"}"><strong>${(0, import_index_16b27e1b.e)(p.name)}</strong>
										<span>${(0, import_index_16b27e1b.e)(new Date(p.created).toLocaleDateString())}</span>
									</div></div>
							`;
                  }
                })}
						`;
              }
            })}</div>
				`;
          }
        })}`;
      })}`;
    }
  })}</main>` : ``}`}`;
});
