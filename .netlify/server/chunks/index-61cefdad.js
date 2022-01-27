var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
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
  A: () => Actions,
  B: () => Button,
  C: () => Cell,
  D: () => Div,
  L: () => LayoutGrid,
  N: () => Navbar,
  S: () => Span$1,
  a: () => Card,
  b: () => Content,
  c: () => classMap,
  d: () => classAdderBuilder,
  e: () => Span,
  f: () => forwardEventsBuilder,
  g: () => exclude,
  h: () => A,
  p: () => prefixFilter,
  u: () => user,
  w: () => writable
});
var import_index_16b27e1b = __toModule(require("./index-16b27e1b.js"));
var import_firebase_2ec4c7b6 = __toModule(require("./firebase-2ec4c7b6.js"));
var import_app = __toModule(require("firebase/compat/app"));
var Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-1p9k53h{position:sticky;top:0;z-index:1;display:flex;flex-direction:row;justify-content:space-between;align-items:center;background-color:#000;height:3.5rem;padding:0px 10px}a.svelte-1p9k53h{text-decoration:none}strong.svelte-1p9k53h{font-size:30pt;color:#fff;transition:color 0.5s ease-in-out}strong.svelte-1p9k53h:hover{color:rgb(14, 102, 126);transition:color 0.5s ease-in-out}i.svelte-1p9k53h{font-size:30pt;color:#fff;transition:color 0.5s ease-in-out}i.svelte-1p9k53h:hover{color:rgb(14, 102, 126);transition:color 0.5s ease-in-out}",
  map: null
};
const Navbar = (0, import_index_16b27e1b.c)(($$result, $$props, $$bindings, slots) => {
  let { showIconProfile = true } = $$props;
  if ($$props.showIconProfile === void 0 && $$bindings.showIconProfile && showIconProfile !== void 0)
    $$bindings.showIconProfile(showIconProfile);
  $$result.css.add(css);
  return `<nav class="${"svelte-1p9k53h"}"><a href="${"/"}" class="${"svelte-1p9k53h"}"><strong class="${"svelte-1p9k53h"}">WPosts</strong></a>
	${showIconProfile ? `<i class="${"fas fa-user-circle svelte-1p9k53h"}"></i>` : `<div></div>`}
</nav>`;
});
const subscriber_queue = [];
function writable(value, start = import_index_16b27e1b.n) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if ((0, import_index_16b27e1b.f)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = import_index_16b27e1b.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_16b27e1b.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
const createUser = () => {
  const { subscribe, set } = writable(false);
  return {
    subscribe,
    setUser: (user2) => {
      set(user2);
    },
    current: async () => {
      const user2 = await import_app.default.getCurrentUser();
      set(user2);
    }
  };
};
const user = createUser();
function classMap(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
function exclude(obj, keys) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const cashIndex = name.indexOf("$");
    if (cashIndex !== -1 && keys.indexOf(name.substring(0, cashIndex + 1)) !== -1) {
      continue;
    }
    if (keys.indexOf(name) !== -1) {
      continue;
    }
    newObj[name] = obj[name];
  }
  return newObj;
}
const oldModifierRegex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder(component) {
  let $on;
  let events = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex);
    if (oldModifierMatch && console) {
      console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', eventType);
    }
    return () => {
      destructor();
    };
  };
  function forward(e) {
    (0, import_index_16b27e1b.g)(component, e);
  }
  return (node) => {
    const destructors = [];
    const forwardDestructors = {};
    $on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let handler = callback;
      let options = false;
      const oldModifierMatch = eventType.match(oldModifierRegex);
      const newModifierMatch = eventType.match(newModifierRegex);
      const modifierMatch = oldModifierMatch || newModifierMatch;
      if (eventType.match(/^SMUI:\w+:/)) {
        const newEventTypeParts = eventType.split(":");
        let newEventType = "";
        for (let i = 0; i < newEventTypeParts.length; i++) {
          newEventType += i === newEventTypeParts.length - 1 ? ":" + newEventTypeParts[i] : newEventTypeParts[i].split("-").map((value) => value.slice(0, 1).toUpperCase() + value.slice(1)).join("");
        }
        console.warn(`The event ${eventType.split("$")[0]} has been renamed to ${newEventType.split("$")[0]}.`);
        eventType = newEventType;
      }
      if (modifierMatch) {
        const parts = eventType.split(oldModifierMatch ? ":" : "$");
        eventType = parts[0];
        const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
        if (eventOptions.passive) {
          options = options || {};
          options.passive = true;
        }
        if (eventOptions.nonpassive) {
          options = options || {};
          options.passive = false;
        }
        if (eventOptions.capture) {
          options = options || {};
          options.capture = true;
        }
        if (eventOptions.once) {
          options = options || {};
          options.once = true;
        }
        if (eventOptions.preventDefault) {
          handler = (0, import_index_16b27e1b.p)(handler);
        }
        if (eventOptions.stopPropagation) {
          handler = (0, import_index_16b27e1b.h)(handler);
        }
      }
      const off = (0, import_index_16b27e1b.l)(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };
      destructors.push(destructor);
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = (0, import_index_16b27e1b.l)(node, eventType, forward);
      }
      return destructor;
    };
    for (let i = 0; i < events.length; i++) {
      $on(events[i][0], events[i][1]);
    }
    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
        for (let entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      }
    };
  };
}
function prefixFilter(obj, prefix) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.substring(0, prefix.length) === prefix) {
      newObj[name.substring(prefix.length)] = obj[name];
    }
  }
  return newObj;
}
const Card = (0, import_index_16b27e1b.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_16b27e1b.i)($$props, ["use", "class", "variant", "padded", "getElement"]);
  forwardEventsBuilder((0, import_index_16b27e1b.j)());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "raised" } = $$props;
  let { padded = false } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.padded === void 0 && $$bindings.padded && padded !== void 0)
    $$bindings.padded(padded);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${(0, import_index_16b27e1b.k)([
    {
      class: (0, import_index_16b27e1b.o)(classMap({
        [className]: true,
        "mdc-card": true,
        "mdc-card--outlined": variant === "outlined",
        "smui-card--padded": padded
      }))
    },
    (0, import_index_16b27e1b.q)($$restProps)
  ], {})}${(0, import_index_16b27e1b.d)("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const Div$1 = (0, import_index_16b27e1b.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_16b27e1b.i)($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder((0, import_index_16b27e1b.j)());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${(0, import_index_16b27e1b.k)([(0, import_index_16b27e1b.q)($$restProps)], {})}${(0, import_index_16b27e1b.d)("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const { Object: Object_1 } = import_index_16b27e1b.u;
const internals = {
  component: Div$1,
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
const ClassAdder = (0, import_index_16b27e1b.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_16b27e1b.i)($$props, ["use", "class", "component", "getElement"]);
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  const smuiClass = internals.class;
  const smuiClassMap = {};
  const smuiClassUnsubscribes = [];
  const contexts = internals.contexts;
  const props = internals.props;
  let { component = internals.component } = $$props;
  Object.entries(internals.classMap).forEach(([name, context]) => {
    const store = (0, import_index_16b27e1b.r)(context);
    if (store && "subscribe" in store) {
      smuiClassUnsubscribes.push(store.subscribe((value) => {
        smuiClassMap[name] = value;
      }));
    }
  });
  const forwardEvents = forwardEventsBuilder((0, import_index_16b27e1b.j)());
  for (let context in contexts) {
    if (contexts.hasOwnProperty(context)) {
      (0, import_index_16b27e1b.s)(context, contexts[context]);
    }
  }
  (0, import_index_16b27e1b.t)(() => {
    for (const unsubscribe of smuiClassUnsubscribes) {
      unsubscribe();
    }
  });
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${(0, import_index_16b27e1b.v)(component || import_index_16b27e1b.m, "svelte:component").$$render($$result, Object_1.assign({ use: [forwardEvents, ...use] }, {
      class: classMap(__spreadValues({
        [className]: true,
        [smuiClass]: true
      }, smuiClassMap))
    }, props, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const defaults = Object.assign({}, internals);
function classAdderBuilder(props) {
  return new Proxy(ClassAdder, {
    construct: function(target, args) {
      Object.assign(internals, defaults, props);
      return new target(...args);
    },
    get: function(target, prop) {
      Object.assign(internals, defaults, props);
      return target[prop];
    }
  });
}
const A$1 = (0, import_index_16b27e1b.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_16b27e1b.i)($$props, ["use", "href", "getElement"]);
  let { use = [] } = $$props;
  let { href = "javascript:void(0);" } = $$props;
  forwardEventsBuilder((0, import_index_16b27e1b.j)());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<a${(0, import_index_16b27e1b.k)([{ href: (0, import_index_16b27e1b.o)(href) }, (0, import_index_16b27e1b.q)($$restProps)], {})}${(0, import_index_16b27e1b.d)("this", element, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Button$1 = (0, import_index_16b27e1b.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_16b27e1b.i)($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder((0, import_index_16b27e1b.j)());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<button${(0, import_index_16b27e1b.k)([(0, import_index_16b27e1b.q)($$restProps)], {})}${(0, import_index_16b27e1b.d)("this", element, 0)}>${slots.default ? slots.default({}) : ``}</button>`;
});
const Span$1 = (0, import_index_16b27e1b.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_16b27e1b.i)($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder((0, import_index_16b27e1b.j)());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<span${(0, import_index_16b27e1b.k)([(0, import_index_16b27e1b.q)($$restProps)], {})}${(0, import_index_16b27e1b.d)("this", element, 0)}>${slots.default ? slots.default({}) : ``}</span>`;
});
const A = A$1;
const Button = Button$1;
const Div = Div$1;
const Span = Span$1;
var Content = classAdderBuilder({
  class: "smui-card__content",
  component: Div
});
classAdderBuilder({
  class: "mdc-card__media-content",
  component: Div
});
const Actions$1 = (0, import_index_16b27e1b.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_16b27e1b.i)($$props, ["use", "class", "fullBleed", "getElement"]);
  forwardEventsBuilder((0, import_index_16b27e1b.j)());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { fullBleed = false } = $$props;
  let element;
  (0, import_index_16b27e1b.s)("SMUI:button:context", "card:action");
  (0, import_index_16b27e1b.s)("SMUI:icon-button:context", "card:action");
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.fullBleed === void 0 && $$bindings.fullBleed && fullBleed !== void 0)
    $$bindings.fullBleed(fullBleed);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${(0, import_index_16b27e1b.k)([
    {
      class: (0, import_index_16b27e1b.o)(classMap({
        [className]: true,
        "mdc-card__actions": true,
        "mdc-card__actions--full-bleed": fullBleed
      }))
    },
    (0, import_index_16b27e1b.q)($$restProps)
  ], {})}${(0, import_index_16b27e1b.d)("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
classAdderBuilder({
  class: "mdc-card__action-buttons",
  component: Div
});
classAdderBuilder({
  class: "mdc-card__action-icons",
  component: Div
});
const Actions = Actions$1;
const InnerGrid = (0, import_index_16b27e1b.c)(($$result, $$props, $$bindings, slots) => {
  forwardEventsBuilder((0, import_index_16b27e1b.j)());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${(0, import_index_16b27e1b.d)("class", classMap({
    [className]: true,
    "mdc-layout-grid__inner": true
  }), 0)}${(0, import_index_16b27e1b.d)("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const LayoutGrid = (0, import_index_16b27e1b.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_16b27e1b.i)($$props, ["use", "class", "fixedColumnWidth", "align", "getElement"]);
  forwardEventsBuilder((0, import_index_16b27e1b.j)());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { fixedColumnWidth = false } = $$props;
  let { align = void 0 } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.fixedColumnWidth === void 0 && $$bindings.fixedColumnWidth && fixedColumnWidth !== void 0)
    $$bindings.fixedColumnWidth(fixedColumnWidth);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${(0, import_index_16b27e1b.k)([
    {
      class: (0, import_index_16b27e1b.o)(classMap({
        [className]: true,
        "mdc-layout-grid": true,
        "mdc-layout-grid--fixed-column-width": fixedColumnWidth,
        ["mdc-layout-grid--align-" + align]: align != null
      }))
    },
    (0, import_index_16b27e1b.q)(exclude($$restProps, ["innerGrid$"]))
  ], {})}${(0, import_index_16b27e1b.d)("this", element, 0)}>${(0, import_index_16b27e1b.v)(InnerGrid, "InnerGrid").$$render($$result, Object.assign(prefixFilter($$restProps, "innerGrid$")), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}
</div>`;
});
const Cell$1 = (0, import_index_16b27e1b.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_16b27e1b.i)($$props, ["use", "class", "align", "order", "span", "spanDevices", "getElement"]);
  forwardEventsBuilder((0, import_index_16b27e1b.j)());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { align = void 0 } = $$props;
  let { order = void 0 } = $$props;
  let { span = void 0 } = $$props;
  let { spanDevices = {} } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.order === void 0 && $$bindings.order && order !== void 0)
    $$bindings.order(order);
  if ($$props.span === void 0 && $$bindings.span && span !== void 0)
    $$bindings.span(span);
  if ($$props.spanDevices === void 0 && $$bindings.spanDevices && spanDevices !== void 0)
    $$bindings.spanDevices(spanDevices);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${(0, import_index_16b27e1b.k)([
    {
      class: (0, import_index_16b27e1b.o)(classMap(__spreadValues({
        [className]: true,
        "mdc-layout-grid__cell": true,
        ["mdc-layout-grid__cell--align-" + align]: align != null,
        ["mdc-layout-grid__cell--order-" + order]: order != null,
        ["mdc-layout-grid__cell--span-" + span]: span != null
      }, Object.fromEntries(Object.entries(spanDevices).map(([device, span2]) => [`mdc-layout-grid__cell--span-${span2}-${device}`, true])))))
    },
    (0, import_index_16b27e1b.q)($$restProps)
  ], {})}${(0, import_index_16b27e1b.d)("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const Cell = Cell$1;
