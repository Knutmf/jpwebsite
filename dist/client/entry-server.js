import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import * as React from "react";
import React__default, { Component, useState, useEffect, useRef } from "react";
import fastCompare from "react-fast-compare";
import invariant from "invariant";
import shallowEqual from "shallowequal";
import { stripBasename, UNSAFE_warning, UNSAFE_invariant, matchPath, joinPaths, Action } from "@remix-run/router";
import { UNSAFE_NavigationContext, useHref, useNavigate, useLocation, useResolvedPath, createPath, UNSAFE_DataRouterStateContext, UNSAFE_useRouteId, UNSAFE_RouteContext, UNSAFE_DataRouterContext, parsePath, Router, Routes, Route } from "react-router";
import "react-dom";
import { FaBars, FaFacebook, FaTwitter, FaInstagram, FaTwitch, FaPatreon, FaDiscord } from "react-icons/fa";
import { SiKofi, SiTeespring, SiSpotify } from "react-icons/si";
var TAG_NAMES = /* @__PURE__ */ ((TAG_NAMES2) => {
  TAG_NAMES2["BASE"] = "base";
  TAG_NAMES2["BODY"] = "body";
  TAG_NAMES2["HEAD"] = "head";
  TAG_NAMES2["HTML"] = "html";
  TAG_NAMES2["LINK"] = "link";
  TAG_NAMES2["META"] = "meta";
  TAG_NAMES2["NOSCRIPT"] = "noscript";
  TAG_NAMES2["SCRIPT"] = "script";
  TAG_NAMES2["STYLE"] = "style";
  TAG_NAMES2["TITLE"] = "title";
  TAG_NAMES2["FRAGMENT"] = "Symbol(react.fragment)";
  return TAG_NAMES2;
})(TAG_NAMES || {});
var SEO_PRIORITY_TAGS = {
  link: { rel: ["amphtml", "canonical", "alternate"] },
  script: { type: ["application/ld+json"] },
  meta: {
    charset: "",
    name: ["generator", "robots", "description"],
    property: [
      "og:type",
      "og:title",
      "og:url",
      "og:image",
      "og:image:alt",
      "og:description",
      "twitter:url",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "twitter:image:alt",
      "twitter:card",
      "twitter:site"
    ]
  }
};
var VALID_TAG_NAMES = Object.values(TAG_NAMES);
var REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HTML_TAG_MAP = Object.entries(REACT_TAG_MAP).reduce(
  (carry, [key, value]) => {
    carry[value] = key;
    return carry;
  },
  {}
);
var HELMET_ATTRIBUTE = "data-rh";
var HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate",
  PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
};
var getInnermostProperty = (propsList, property) => {
  for (let i = propsList.length - 1; i >= 0; i -= 1) {
    const props = propsList[i];
    if (Object.prototype.hasOwnProperty.call(props, property)) {
      return props[property];
    }
  }
  return null;
};
var getTitleFromPropsList = (propsList) => {
  let innermostTitle = getInnermostProperty(
    propsList,
    "title"
    /* TITLE */
  );
  const innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
  if (Array.isArray(innermostTitle)) {
    innermostTitle = innermostTitle.join("");
  }
  if (innermostTemplate && innermostTitle) {
    return innermostTemplate.replace(/%s/g, () => innermostTitle);
  }
  const innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || void 0;
};
var getOnChangeClientState = (propsList) => getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || (() => {
});
var getAttributesFromPropsList = (tagType, propsList) => propsList.filter((props) => typeof props[tagType] !== "undefined").map((props) => props[tagType]).reduce((tagAttrs, current) => ({ ...tagAttrs, ...current }), {});
var getBaseTagFromPropsList = (primaryAttributes, propsList) => propsList.filter((props) => typeof props[
  "base"
  /* BASE */
] !== "undefined").map((props) => props[
  "base"
  /* BASE */
]).reverse().reduce((innermostBaseTag, tag) => {
  if (!innermostBaseTag.length) {
    const keys = Object.keys(tag);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const lowerCaseAttributeKey = attributeKey.toLowerCase();
      if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
        return innermostBaseTag.concat(tag);
      }
    }
  }
  return innermostBaseTag;
}, []);
var warn = (msg) => console && typeof console.warn === "function" && console.warn(msg);
var getTagsFromPropsList = (tagName, primaryAttributes, propsList) => {
  const approvedSeenTags = {};
  return propsList.filter((props) => {
    if (Array.isArray(props[tagName])) {
      return true;
    }
    if (typeof props[tagName] !== "undefined") {
      warn(
        `Helmet: ${tagName} should be of type "Array". Instead found type "${typeof props[tagName]}"`
      );
    }
    return false;
  }).map((props) => props[tagName]).reverse().reduce((approvedTags, instanceTags) => {
    const instanceSeenTags = {};
    instanceTags.filter((tag) => {
      let primaryAttributeKey;
      const keys2 = Object.keys(tag);
      for (let i = 0; i < keys2.length; i += 1) {
        const attributeKey = keys2[i];
        const lowerCaseAttributeKey = attributeKey.toLowerCase();
        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === "rel" && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === "rel" && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        }
        if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === "innerHTML" || attributeKey === "cssText" || attributeKey === "itemprop")) {
          primaryAttributeKey = attributeKey;
        }
      }
      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }
      const value = tag[primaryAttributeKey].toLowerCase();
      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }
      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }
      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }
      return false;
    }).reverse().forEach((tag) => approvedTags.push(tag));
    const keys = Object.keys(instanceSeenTags);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const tagUnion = {
        ...approvedSeenTags[attributeKey],
        ...instanceSeenTags[attributeKey]
      };
      approvedSeenTags[attributeKey] = tagUnion;
    }
    return approvedTags;
  }, []).reverse();
};
var getAnyTrueFromPropsList = (propsList, checkedTag) => {
  if (Array.isArray(propsList) && propsList.length) {
    for (let index = 0; index < propsList.length; index += 1) {
      const prop = propsList[index];
      if (prop[checkedTag]) {
        return true;
      }
    }
  }
  return false;
};
var reducePropsToState = (propsList) => ({
  baseTag: getBaseTagFromPropsList([
    "href"
    /* HREF */
  ], propsList),
  bodyAttributes: getAttributesFromPropsList("bodyAttributes", propsList),
  defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
  encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: getAttributesFromPropsList("htmlAttributes", propsList),
  linkTags: getTagsFromPropsList(
    "link",
    [
      "rel",
      "href"
      /* HREF */
    ],
    propsList
  ),
  metaTags: getTagsFromPropsList(
    "meta",
    [
      "name",
      "charset",
      "http-equiv",
      "property",
      "itemprop"
      /* ITEM_PROP */
    ],
    propsList
  ),
  noscriptTags: getTagsFromPropsList("noscript", [
    "innerHTML"
    /* INNER_HTML */
  ], propsList),
  onChangeClientState: getOnChangeClientState(propsList),
  scriptTags: getTagsFromPropsList(
    "script",
    [
      "src",
      "innerHTML"
      /* INNER_HTML */
    ],
    propsList
  ),
  styleTags: getTagsFromPropsList("style", [
    "cssText"
    /* CSS_TEXT */
  ], propsList),
  title: getTitleFromPropsList(propsList),
  titleAttributes: getAttributesFromPropsList("titleAttributes", propsList),
  prioritizeSeoTags: getAnyTrueFromPropsList(propsList, HELMET_PROPS.PRIORITIZE_SEO_TAGS)
});
var flattenArray = (possibleArray) => Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
var checkIfPropsMatch = (props, toMatch) => {
  const keys = Object.keys(props);
  for (let i = 0; i < keys.length; i += 1) {
    if (toMatch[keys[i]] && toMatch[keys[i]].includes(props[keys[i]])) {
      return true;
    }
  }
  return false;
};
var prioritizer = (elementsList, propsToMatch) => {
  if (Array.isArray(elementsList)) {
    return elementsList.reduce(
      (acc, elementAttrs) => {
        if (checkIfPropsMatch(elementAttrs, propsToMatch)) {
          acc.priority.push(elementAttrs);
        } else {
          acc.default.push(elementAttrs);
        }
        return acc;
      },
      { priority: [], default: [] }
    );
  }
  return { default: elementsList, priority: [] };
};
var without = (obj, key) => {
  return {
    ...obj,
    [key]: void 0
  };
};
var SELF_CLOSING_TAGS = [
  "noscript",
  "script",
  "style"
  /* STYLE */
];
var encodeSpecialCharacters = (str, encode = true) => {
  if (encode === false) {
    return String(str);
  }
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var generateElementAttributesAsString = (attributes) => Object.keys(attributes).reduce((str, key) => {
  const attr = typeof attributes[key] !== "undefined" ? `${key}="${attributes[key]}"` : `${key}`;
  return str ? `${str} ${attr}` : attr;
}, "");
var generateTitleAsString = (type, title, attributes, encode) => {
  const attributeString = generateElementAttributesAsString(attributes);
  const flattenedTitle = flattenArray(title);
  return attributeString ? `<${type} ${HELMET_ATTRIBUTE}="true" ${attributeString}>${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>` : `<${type} ${HELMET_ATTRIBUTE}="true">${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>`;
};
var generateTagsAsString = (type, tags, encode = true) => tags.reduce((str, t) => {
  const tag = t;
  const attributeHtml = Object.keys(tag).filter(
    (attribute) => !(attribute === "innerHTML" || attribute === "cssText")
  ).reduce((string, attribute) => {
    const attr = typeof tag[attribute] === "undefined" ? attribute : `${attribute}="${encodeSpecialCharacters(tag[attribute], encode)}"`;
    return string ? `${string} ${attr}` : attr;
  }, "");
  const tagContent = tag.innerHTML || tag.cssText || "";
  const isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
  return `${str}<${type} ${HELMET_ATTRIBUTE}="true" ${attributeHtml}${isSelfClosing ? `/>` : `>${tagContent}</${type}>`}`;
}, "");
var convertElementAttributesToReactProps = (attributes, initProps = {}) => Object.keys(attributes).reduce((obj, key) => {
  const mapped = REACT_TAG_MAP[key];
  obj[mapped || key] = attributes[key];
  return obj;
}, initProps);
var generateTitleAsReactComponent = (_type, title, attributes) => {
  const initProps = {
    key: title,
    [HELMET_ATTRIBUTE]: true
  };
  const props = convertElementAttributesToReactProps(attributes, initProps);
  return [React__default.createElement("title", props, title)];
};
var generateTagsAsReactComponent = (type, tags) => tags.map((tag, i) => {
  const mappedTag = {
    key: i,
    [HELMET_ATTRIBUTE]: true
  };
  Object.keys(tag).forEach((attribute) => {
    const mapped = REACT_TAG_MAP[attribute];
    const mappedAttribute = mapped || attribute;
    if (mappedAttribute === "innerHTML" || mappedAttribute === "cssText") {
      const content = tag.innerHTML || tag.cssText;
      mappedTag.dangerouslySetInnerHTML = { __html: content };
    } else {
      mappedTag[mappedAttribute] = tag[attribute];
    }
  });
  return React__default.createElement(type, mappedTag);
});
var getMethodsForTag = (type, tags, encode = true) => {
  switch (type) {
    case "title":
      return {
        toComponent: () => generateTitleAsReactComponent(type, tags.title, tags.titleAttributes),
        toString: () => generateTitleAsString(type, tags.title, tags.titleAttributes, encode)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => convertElementAttributesToReactProps(tags),
        toString: () => generateElementAttributesAsString(tags)
      };
    default:
      return {
        toComponent: () => generateTagsAsReactComponent(type, tags),
        toString: () => generateTagsAsString(type, tags, encode)
      };
  }
};
var getPriorityMethods = ({ metaTags, linkTags, scriptTags, encode }) => {
  const meta = prioritizer(metaTags, SEO_PRIORITY_TAGS.meta);
  const link = prioritizer(linkTags, SEO_PRIORITY_TAGS.link);
  const script = prioritizer(scriptTags, SEO_PRIORITY_TAGS.script);
  const priorityMethods = {
    toComponent: () => [
      ...generateTagsAsReactComponent("meta", meta.priority),
      ...generateTagsAsReactComponent("link", link.priority),
      ...generateTagsAsReactComponent("script", script.priority)
    ],
    toString: () => (
      // generate all the tags as strings and concatenate them
      `${getMethodsForTag("meta", meta.priority, encode)} ${getMethodsForTag(
        "link",
        link.priority,
        encode
      )} ${getMethodsForTag("script", script.priority, encode)}`
    )
  };
  return {
    priorityMethods,
    metaTags: meta.default,
    linkTags: link.default,
    scriptTags: script.default
  };
};
var mapStateOnServer = (props) => {
  const {
    baseTag,
    bodyAttributes,
    encode = true,
    htmlAttributes,
    noscriptTags,
    styleTags,
    title = "",
    titleAttributes,
    prioritizeSeoTags
  } = props;
  let { linkTags, metaTags, scriptTags } = props;
  let priorityMethods = {
    toComponent: () => {
    },
    toString: () => ""
  };
  if (prioritizeSeoTags) {
    ({ priorityMethods, linkTags, metaTags, scriptTags } = getPriorityMethods(props));
  }
  return {
    priority: priorityMethods,
    base: getMethodsForTag("base", baseTag, encode),
    bodyAttributes: getMethodsForTag("bodyAttributes", bodyAttributes, encode),
    htmlAttributes: getMethodsForTag("htmlAttributes", htmlAttributes, encode),
    link: getMethodsForTag("link", linkTags, encode),
    meta: getMethodsForTag("meta", metaTags, encode),
    noscript: getMethodsForTag("noscript", noscriptTags, encode),
    script: getMethodsForTag("script", scriptTags, encode),
    style: getMethodsForTag("style", styleTags, encode),
    title: getMethodsForTag("title", { title, titleAttributes }, encode)
  };
};
var server_default = mapStateOnServer;
var instances = [];
var isDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var HelmetData = class {
  instances = [];
  canUseDOM = isDocument;
  context;
  value = {
    setHelmet: (serverState) => {
      this.context.helmet = serverState;
    },
    helmetInstances: {
      get: () => this.canUseDOM ? instances : this.instances,
      add: (instance) => {
        (this.canUseDOM ? instances : this.instances).push(instance);
      },
      remove: (instance) => {
        const index = (this.canUseDOM ? instances : this.instances).indexOf(instance);
        (this.canUseDOM ? instances : this.instances).splice(index, 1);
      }
    }
  };
  constructor(context, canUseDOM) {
    this.context = context;
    this.canUseDOM = canUseDOM || false;
    if (!canUseDOM) {
      context.helmet = server_default({
        baseTag: [],
        bodyAttributes: {},
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }
  }
};
var defaultValue = {};
var Context = React__default.createContext(defaultValue);
var HelmetProvider = class _HelmetProvider extends Component {
  static canUseDOM = isDocument;
  helmetData;
  constructor(props) {
    super(props);
    this.helmetData = new HelmetData(this.props.context || {}, _HelmetProvider.canUseDOM);
  }
  render() {
    return /* @__PURE__ */ React__default.createElement(Context.Provider, { value: this.helmetData.value }, this.props.children);
  }
};
var updateTags = (type, tags) => {
  const headElement = document.head || document.querySelector(
    "head"
    /* HEAD */
  );
  const tagNodes = headElement.querySelectorAll(`${type}[${HELMET_ATTRIBUTE}]`);
  const oldTags = [].slice.call(tagNodes);
  const newTags = [];
  let indexToDelete;
  if (tags && tags.length) {
    tags.forEach((tag) => {
      const newElement = document.createElement(type);
      for (const attribute in tag) {
        if (Object.prototype.hasOwnProperty.call(tag, attribute)) {
          if (attribute === "innerHTML") {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === "cssText") {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
          } else {
            const attr = attribute;
            const value = typeof tag[attr] === "undefined" ? "" : tag[attr];
            newElement.setAttribute(attribute, value);
          }
        }
      }
      newElement.setAttribute(HELMET_ATTRIBUTE, "true");
      if (oldTags.some((existingTag, index) => {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }
  oldTags.forEach((tag) => tag.parentNode?.removeChild(tag));
  newTags.forEach((tag) => headElement.appendChild(tag));
  return {
    oldTags,
    newTags
  };
};
var updateAttributes = (tagName, attributes) => {
  const elementTag = document.getElementsByTagName(tagName)[0];
  if (!elementTag) {
    return;
  }
  const helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
  const helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  const attributesToRemove = [...helmetAttributes];
  const attributeKeys = Object.keys(attributes);
  for (const attribute of attributeKeys) {
    const value = attributes[attribute] || "";
    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }
    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }
    const indexToSave = attributesToRemove.indexOf(attribute);
    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }
  for (let i = attributesToRemove.length - 1; i >= 0; i -= 1) {
    elementTag.removeAttribute(attributesToRemove[i]);
  }
  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};
var updateTitle = (title, attributes) => {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }
  updateAttributes("title", attributes);
};
var commitTagChanges = (newState, cb) => {
  const {
    baseTag,
    bodyAttributes,
    htmlAttributes,
    linkTags,
    metaTags,
    noscriptTags,
    onChangeClientState,
    scriptTags,
    styleTags,
    title,
    titleAttributes
  } = newState;
  updateAttributes("body", bodyAttributes);
  updateAttributes("html", htmlAttributes);
  updateTitle(title, titleAttributes);
  const tagUpdates = {
    baseTag: updateTags("base", baseTag),
    linkTags: updateTags("link", linkTags),
    metaTags: updateTags("meta", metaTags),
    noscriptTags: updateTags("noscript", noscriptTags),
    scriptTags: updateTags("script", scriptTags),
    styleTags: updateTags("style", styleTags)
  };
  const addedTags = {};
  const removedTags = {};
  Object.keys(tagUpdates).forEach((tagType) => {
    const { newTags, oldTags } = tagUpdates[tagType];
    if (newTags.length) {
      addedTags[tagType] = newTags;
    }
    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  if (cb) {
    cb();
  }
  onChangeClientState(newState, addedTags, removedTags);
};
var _helmetCallback = null;
var handleStateChangeOnClient = (newState) => {
  if (_helmetCallback) {
    cancelAnimationFrame(_helmetCallback);
  }
  if (newState.defer) {
    _helmetCallback = requestAnimationFrame(() => {
      commitTagChanges(newState, () => {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};
var client_default = handleStateChangeOnClient;
var HelmetDispatcher = class extends Component {
  rendered = false;
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(nextProps, this.props);
  }
  componentDidUpdate() {
    this.emitChange();
  }
  componentWillUnmount() {
    const { helmetInstances } = this.props.context;
    helmetInstances.remove(this);
    this.emitChange();
  }
  emitChange() {
    const { helmetInstances, setHelmet } = this.props.context;
    let serverState = null;
    const state = reducePropsToState(
      helmetInstances.get().map((instance) => {
        const props = { ...instance.props };
        delete props.context;
        return props;
      })
    );
    if (HelmetProvider.canUseDOM) {
      client_default(state);
    } else if (server_default) {
      serverState = server_default(state);
    }
    setHelmet(serverState);
  }
  // componentWillMount will be deprecated
  // for SSR, initialize on first render
  // constructor is also unsafe in StrictMode
  init() {
    if (this.rendered) {
      return;
    }
    this.rendered = true;
    const { helmetInstances } = this.props.context;
    helmetInstances.add(this);
    this.emitChange();
  }
  render() {
    this.init();
    return null;
  }
};
var Helmet = class extends Component {
  static defaultProps = {
    defer: true,
    encodeSpecialCharacters: true,
    prioritizeSeoTags: false
  };
  shouldComponentUpdate(nextProps) {
    return !fastCompare(without(this.props, "helmetData"), without(nextProps, "helmetData"));
  }
  mapNestedChildrenToProps(child, nestedChildren) {
    if (!nestedChildren) {
      return null;
    }
    switch (child.type) {
      case "script":
      case "noscript":
        return {
          innerHTML: nestedChildren
        };
      case "style":
        return {
          cssText: nestedChildren
        };
      default:
        throw new Error(
          `<${child.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
        );
    }
  }
  flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren) {
    return {
      ...arrayTypeChildren,
      [child.type]: [
        ...arrayTypeChildren[child.type] || [],
        {
          ...newChildProps,
          ...this.mapNestedChildrenToProps(child, nestedChildren)
        }
      ]
    };
  }
  mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren) {
    switch (child.type) {
      case "title":
        return {
          ...newProps,
          [child.type]: nestedChildren,
          titleAttributes: { ...newChildProps }
        };
      case "body":
        return {
          ...newProps,
          bodyAttributes: { ...newChildProps }
        };
      case "html":
        return {
          ...newProps,
          htmlAttributes: { ...newChildProps }
        };
      default:
        return {
          ...newProps,
          [child.type]: { ...newChildProps }
        };
    }
  }
  mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
    let newFlattenedProps = { ...newProps };
    Object.keys(arrayTypeChildren).forEach((arrayChildName) => {
      newFlattenedProps = {
        ...newFlattenedProps,
        [arrayChildName]: arrayTypeChildren[arrayChildName]
      };
    });
    return newFlattenedProps;
  }
  warnOnInvalidChildren(child, nestedChildren) {
    invariant(
      VALID_TAG_NAMES.some((name) => child.type === name),
      typeof child.type === "function" ? `You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.` : `Only elements types ${VALID_TAG_NAMES.join(
        ", "
      )} are allowed. Helmet does not support rendering <${child.type}> elements. Refer to our API for more information.`
    );
    invariant(
      !nestedChildren || typeof nestedChildren === "string" || Array.isArray(nestedChildren) && !nestedChildren.some((nestedChild) => typeof nestedChild !== "string"),
      `Helmet expects a string as a child of <${child.type}>. Did you forget to wrap your children in braces? ( <${child.type}>{\`\`}</${child.type}> ) Refer to our API for more information.`
    );
    return true;
  }
  mapChildrenToProps(children, newProps) {
    let arrayTypeChildren = {};
    React__default.Children.forEach(children, (child) => {
      if (!child || !child.props) {
        return;
      }
      const { children: nestedChildren, ...childProps } = child.props;
      const newChildProps = Object.keys(childProps).reduce((obj, key) => {
        obj[HTML_TAG_MAP[key] || key] = childProps[key];
        return obj;
      }, {});
      let { type } = child;
      if (typeof type === "symbol") {
        type = type.toString();
      } else {
        this.warnOnInvalidChildren(child, nestedChildren);
      }
      switch (type) {
        case "Symbol(react.fragment)":
          newProps = this.mapChildrenToProps(nestedChildren, newProps);
          break;
        case "link":
        case "meta":
        case "noscript":
        case "script":
        case "style":
          arrayTypeChildren = this.flattenArrayTypeChildren(
            child,
            arrayTypeChildren,
            newChildProps,
            nestedChildren
          );
          break;
        default:
          newProps = this.mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren);
          break;
      }
    });
    return this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
  }
  render() {
    const { children, ...props } = this.props;
    let newProps = { ...props };
    let { helmetData } = props;
    if (children) {
      newProps = this.mapChildrenToProps(children, newProps);
    }
    if (helmetData && !(helmetData instanceof HelmetData)) {
      const data = helmetData;
      helmetData = new HelmetData(data.context, true);
      delete newProps.helmetData;
    }
    return helmetData ? /* @__PURE__ */ React__default.createElement(HelmetDispatcher, { ...newProps, context: helmetData.value }) : /* @__PURE__ */ React__default.createElement(Context.Consumer, null, (context) => /* @__PURE__ */ React__default.createElement(HelmetDispatcher, { ...newProps, context }));
  }
};
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
const defaultMethod = "get";
const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
let _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null) {
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      );
      _formDataSupportsSubmitter = false;
    } catch (e) {
      _formDataSupportsSubmitter = true;
    }
  }
  return _formDataSupportsSubmitter;
}
const supportedFormEncTypes = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function getFormEncType(encType) {
  if (encType != null && !supportedFormEncTypes.has(encType)) {
    process.env.NODE_ENV !== "production" ? UNSAFE_warning(false, '"' + encType + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + defaultEncType + '"')) : void 0;
    return null;
  }
  return encType;
}
function getFormSubmissionInfo(target, basename) {
  let method;
  let action;
  let encType;
  let formData;
  let body;
  if (isFormElement(target)) {
    let attr = target.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(target);
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    }
    let attr = target.getAttribute("formaction") || form.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(form, target);
    if (!isFormDataSubmitterSupported()) {
      let {
        name,
        type,
        value
      } = target;
      if (type === "image") {
        let prefix = name ? name + "." : "";
        formData.append(prefix + "x", "0");
        formData.append(prefix + "y", "0");
      } else if (name) {
        formData.append(name, value);
      }
    }
  } else if (isHtmlElement(target)) {
    throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
  } else {
    method = defaultMethod;
    action = null;
    encType = defaultEncType;
    body = target;
  }
  if (formData && encType === "text/plain") {
    body = formData;
    formData = void 0;
  }
  return {
    action,
    method: method.toLowerCase(),
    encType,
    formData,
    body
  };
}
const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], _excluded3 = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"];
const REACT_ROUTER_VERSION = "6";
try {
  window.__reactRouterVersion = REACT_ROUTER_VERSION;
} catch (e) {
}
const ViewTransitionContext = /* @__PURE__ */ React.createContext({
  isTransitioning: false
});
if (process.env.NODE_ENV !== "production") {
  ViewTransitionContext.displayName = "ViewTransition";
}
const FetchersContext = /* @__PURE__ */ React.createContext(/* @__PURE__ */ new Map());
if (process.env.NODE_ENV !== "production") {
  FetchersContext.displayName = "Fetchers";
}
if (process.env.NODE_ENV !== "production") ;
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX$1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const Link = /* @__PURE__ */ React.forwardRef(function LinkWithRef(_ref7, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to,
    preventScrollReset,
    viewTransition
  } = _ref7, rest = _objectWithoutPropertiesLoose(_ref7, _excluded);
  let {
    basename
  } = React.useContext(UNSAFE_NavigationContext);
  let absoluteHref;
  let isExternal = false;
  if (typeof to === "string" && ABSOLUTE_URL_REGEX$1.test(to)) {
    absoluteHref = to;
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e) {
        process.env.NODE_ENV !== "production" ? UNSAFE_warning(false, '<Link to="' + to + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.') : void 0;
      }
    }
  }
  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative,
    viewTransition
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ React.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref,
      target
    }))
  );
});
if (process.env.NODE_ENV !== "production") {
  Link.displayName = "Link";
}
const NavLink = /* @__PURE__ */ React.forwardRef(function NavLinkWithRef(_ref8, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    viewTransition,
    children
  } = _ref8, rest = _objectWithoutPropertiesLoose(_ref8, _excluded2);
  let path = useResolvedPath(to, {
    relative: rest.relative
  });
  let location = useLocation();
  let routerState = React.useContext(UNSAFE_DataRouterStateContext);
  let {
    navigator,
    basename
  } = React.useContext(UNSAFE_NavigationContext);
  let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useViewTransitionState(path) && viewTransition === true;
  let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }
  if (nextLocationPathname && basename) {
    nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
  }
  const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let renderProps = {
    isActive,
    isPending,
    isTransitioning
  };
  let ariaCurrent = isActive ? ariaCurrentProp : void 0;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp(renderProps);
  } else {
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null, isTransitioning ? "transitioning" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
  return /* @__PURE__ */ React.createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className,
    ref,
    style,
    to,
    viewTransition
  }), typeof children === "function" ? children(renderProps) : children);
});
if (process.env.NODE_ENV !== "production") {
  NavLink.displayName = "NavLink";
}
const Form = /* @__PURE__ */ React.forwardRef((_ref9, forwardedRef) => {
  let {
    fetcherKey,
    navigate,
    reloadDocument,
    replace,
    state,
    method = defaultMethod,
    action,
    onSubmit,
    relative,
    preventScrollReset,
    viewTransition
  } = _ref9, props = _objectWithoutPropertiesLoose(_ref9, _excluded3);
  let submit = useSubmit();
  let formAction = useFormAction(action, {
    relative
  });
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let submitHandler = (event) => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
    submit(submitter || event.currentTarget, {
      fetcherKey,
      method: submitMethod,
      navigate,
      replace,
      state,
      relative,
      preventScrollReset,
      viewTransition
    });
  };
  return /* @__PURE__ */ React.createElement("form", _extends({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
});
if (process.env.NODE_ENV !== "production") {
  Form.displayName = "Form";
}
if (process.env.NODE_ENV !== "production") ;
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook2["UseSubmit"] = "useSubmit";
  DataRouterHook2["UseSubmitFetcher"] = "useSubmitFetcher";
  DataRouterHook2["UseFetcher"] = "useFetcher";
  DataRouterHook2["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseFetcher"] = "useFetcher";
  DataRouterStateHook2["UseFetchers"] = "useFetchers";
  DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
  let ctx = React.useContext(UNSAFE_DataRouterContext);
  !ctx ? process.env.NODE_ENV !== "production" ? UNSAFE_invariant(false, getDataRouterConsoleError(hookName)) : UNSAFE_invariant(false) : void 0;
  return ctx;
}
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative,
    viewTransition
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return React.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative,
        viewTransition
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative, viewTransition]);
}
function validateClientSideSubmission() {
  if (typeof document === "undefined") {
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
  }
}
let fetcherId = 0;
let getUniqueFetcherId = () => "__" + String(++fetcherId) + "__";
function useSubmit() {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseSubmit);
  let {
    basename
  } = React.useContext(UNSAFE_NavigationContext);
  let currentRouteId = UNSAFE_useRouteId();
  return React.useCallback(function(target, options) {
    if (options === void 0) {
      options = {};
    }
    validateClientSideSubmission();
    let {
      action,
      method,
      encType,
      formData,
      body
    } = getFormSubmissionInfo(target, basename);
    if (options.navigate === false) {
      let key = options.fetcherKey || getUniqueFetcherId();
      router.fetch(key, currentRouteId, options.action || action, {
        preventScrollReset: options.preventScrollReset,
        formData,
        body,
        formMethod: options.method || method,
        formEncType: options.encType || encType,
        flushSync: options.flushSync
      });
    } else {
      router.navigate(options.action || action, {
        preventScrollReset: options.preventScrollReset,
        formData,
        body,
        formMethod: options.method || method,
        formEncType: options.encType || encType,
        replace: options.replace,
        state: options.state,
        fromRouteId: currentRouteId,
        flushSync: options.flushSync,
        viewTransition: options.viewTransition
      });
    }
  }, [router, basename, currentRouteId]);
}
function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    basename
  } = React.useContext(UNSAFE_NavigationContext);
  let routeContext = React.useContext(UNSAFE_RouteContext);
  !routeContext ? process.env.NODE_ENV !== "production" ? UNSAFE_invariant(false, "useFormAction must be used inside a RouteContext") : UNSAFE_invariant(false) : void 0;
  let [match] = routeContext.matches.slice(-1);
  let path = _extends({}, useResolvedPath(action ? action : ".", {
    relative
  }));
  let location = useLocation();
  if (action == null) {
    path.search = location.search;
    let params = new URLSearchParams(path.search);
    let indexValues = params.getAll("index");
    let hasNakedIndexParam = indexValues.some((v) => v === "");
    if (hasNakedIndexParam) {
      params.delete("index");
      indexValues.filter((v) => v).forEach((v) => params.append("index", v));
      let qs = params.toString();
      path.search = qs ? "?" + qs : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
function useViewTransitionState(to, opts) {
  if (opts === void 0) {
    opts = {};
  }
  let vtContext = React.useContext(ViewTransitionContext);
  !(vtContext != null) ? process.env.NODE_ENV !== "production" ? UNSAFE_invariant(false, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : UNSAFE_invariant(false) : void 0;
  let {
    basename
  } = useDataRouterContext(DataRouterHook.useViewTransitionState);
  let path = useResolvedPath(to, {
    relative: opts.relative
  });
  if (!vtContext.isTransitioning) {
    return false;
  }
  let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
  let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
  return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
}
function StaticRouter({
  basename,
  children,
  location: locationProp = "/",
  future
}) {
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let action = Action.Pop;
  let location = {
    pathname: locationProp.pathname || "/",
    search: locationProp.search || "",
    hash: locationProp.hash || "",
    state: locationProp.state != null ? locationProp.state : null,
    key: locationProp.key || "default"
  };
  let staticNavigator = getStatelessNavigator();
  return /* @__PURE__ */ React.createElement(Router, {
    basename,
    children,
    location,
    navigationType: action,
    navigator: staticNavigator,
    future,
    static: true
  });
}
function getStatelessNavigator() {
  return {
    createHref,
    encodeLocation,
    push(to) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
    },
    replace(to) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
    },
    go(delta) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
    },
    back() {
      throw new Error(`You cannot use navigator.back() on the server because it is a stateless environment.`);
    },
    forward() {
      throw new Error(`You cannot use navigator.forward() on the server because it is a stateless environment.`);
    }
  };
}
function createHref(to) {
  return typeof to === "string" ? to : createPath(to);
}
function encodeLocation(to) {
  let href = typeof to === "string" ? to : createPath(to);
  href = href.replace(/ $/, "%20");
  let encoded = ABSOLUTE_URL_REGEX.test(href) ? new URL(href) : new URL(href, "http://localhost");
  return {
    pathname: encoded.pathname,
    search: encoded.search,
    hash: encoded.hash
  };
}
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAAlCAYAAAB8pmQOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzZBRDI5MDhERjZBMTFFOTk3NTJBM0YxMkU4OERDNzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzZBRDI5MDlERjZBMTFFOTk3NTJBM0YxMkU4OERDNzYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNkFEMjkwNkRGNkExMUU5OTc1MkEzRjEyRTg4REM3NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNkFEMjkwN0RGNkExMUU5OTc1MkEzRjEyRTg4REM3NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnRnsG4AAAqGSURBVHja7F2Lkds4DNXupAFeCWxBKUEpQVeCrgRtCd4S7BLsEqQSpBLEEsQSfFaOSrBcEgT4sTdz5owmiSODxOcBIAVYL9frtXqO53iOP3N8c3348vIS/OIN+M3tj/Z2ids1377zfvtMms/q23W6fTbGLMrQqQH9bWjz943m5UZbPVJwtzVua+msj8fbumabF+5agRybnW4Jnj087CN6PrN+scvC2Ept7GTMuP7dBt+NfRxul9psEflObeT6k7/bv3vz743Xt9tn2jPPbOxP2DpG5urM+rT5/slF36H3yuCpA/gawX0fvvTpIizscP1vrNffY7h+HueQog2t7bvLJtxNoFf/gHP0DwRvb/Fur7EF9/VM2keE/0Pkejsj36uRtwjwsI+jATlnHkhzcfAzcGgS5bRa8x4Cdrt/Z7HWthqAQz0vjjn6wNpqB+2dRutypNbaXOO8y+0DVrkA9gDMJYh9dAw63DHlMAZOxDJz+sbqkEnHoH8g8HzMuF7f+heLD0kEL1lviXroEOez2DJiymEh2qfPSbQGbCvlu2ZtZ+BQVw9Pww7iVAB3e2RxKH+1wOWMQIHFXgN0P0W8OwL4TACuPfqEyLt4DO/MyBQkEhGoYA46SmATQ4Dmfl/tyMZa8P/71XpS/8ojL+HR25kYELb1N0YfUyAi1p40eOcn6ACgczT8u4KisAAfD2BGxKB47ZoabQIevrsDeHsHCCbDQ+PZVpAA7PH2vVGW8PDOTc2HkIMJAJ3qiGSMs0Ui3uDb/3KdeQjEjDVRZTFx5nM4pZ/By3FPNgD3qSkSYlgTY394vgOAXcoQFCBGGPyRIKeVuT+dKMZoRYEP8zH3p4svPWXu/YeA7a1UR04IGB0i84V7DhHIRq6e7DQod4jV10L2rhn3KgYN3wlmW3IvbBRbO06ctXV6/w5OHKkyaIkysXnHTpBdQ1LkfOPh4rlPmNNYqk6lYx4Rsb7Q55DmBVuUOT1+R27pHKfVcD4d+L5LtjNi48kHsaUArHIbVsAxKA8Qcg0Xbd+jhNmAXRMcAxeEXoNLcKqCwRt1jJ55KE5AW2uVHucsQw7V93gMsS0Jtn4u2c7EOeCoERsXrj0+RxelACwzGJYiGoo28xWJwMZ4mgjeJQHEDVNWn+YiGECMTkRKZmUinUIMGvtcmOsCwNwSdDIz1zaaS4G1bnR7j2Pd1vEPUz8Um2xSaJQCcG4mq4DSSxZ1tExD5PBWZ1gfFZhjBpocXc1UgzVOSDjkLsAVMnpOZHwzNHYHCgPABlzXo7qxUPFQm2IjXwHAmrlwZadliVGsihTgmCHScSK7SqSRI0OZSwCY4Mgah4yVIzUmDVPVpJigeisVwBhZVBEA6zsDXv5h8+lMEVhaNBVT9iLRWYzM/d+IbEtqZhQSga2HjoiOJ07ELly6WyP2UnwPLBJBLTKBSd9BuJTI98O6RqIRh3hR4E+47+ecDAeN0BziSMdaOKevoX2wRuaj6KBO2B7EAPhUlR1drF2/FvIcTeJjHe3xPA1y/5hbqoYHwYkwW3pmXSrCcWGnrp8ARny849tq2GA6Vx9PgoWJQDnlK7lbAFDh5NIJ+9TcZBMnQhYyRpw8c7M3eDovWFlabCEHofb1SAEIUoZ4BkqrA0X+RQo5Ag/+jymOASmsWB1F9XWonBRzmJ6qJXvOs6ds9ZDA40Ko/qLWxLcIL0PkGs8eWUyWHOoI2kekVttrTx499z7MxnYjSaLQ6wCdKcAUtWa31COktoTTcCh3cShuMXKmFuJPiBPCwO+bex9NJI8DZa2O+1DQIzrhlpZ2jrLYLE0zAafUY5VuHv0s0N6SK7FMWvg34RRSYVEBpAspB0U/ElKc0MCMoonxzJ5DItdz7J/pt+GNkiLOSBonkG2Ja274DHswIJMMA5aB1K8G6fDeizsH9ptNYE/ItaEZnCeoKs8jPbhnxgp9ZsZp9K6f96wpdMDLrhTjJqR2ochbFwJuqC83eQ0B+gOSrbDTeasfOGYsWB0zEvmxNbce/UtPU8iC2NwxUgeS0BEX1bKKbA+x3t8Dtn3IlkITUoWBQWOKAG5fug+Y2N+6ciITw3n1zPU0hPlWwn5UBuZpI4x4QVLJxpVaW030iwPc2c4/CHqWCbQHD4AbQlvqijT1ZGtmyJG6jkiqYT+S+X5LKf/amgYKps37NmFLg94CvH8v9HxQMU+tqSljcGtk+M6SphodXZCU2Pc4SHlOzltwQq4zPeLB9KcK6FcghSQC6ElUhGf9qQDOEQVrRHj2I5m5uuMw3UU+BaaW1umM9+eWS056F0TvnYdHn1M/VB/LK1UB3qngjh3S43i0Aw/BGv/XQPrT7b+hVP1/hyph5AFnJBnOUhGzkfqLyc/F58gEjsqQiWG23eQWBniefiKuA8XeN+T/jtXvErcNyPdMF3NF91zRqKGuzzg7CBasBW32AEsz13evbCnGYLdCE2XxtfcGfygEAk6NylOO4hL9QLlcqsQ22Fff4ZQhDPcih0K8yOprD8VU9naoMoCrjnBeimFo8x0NONaBX0AWUHv2vzPcixP5UpkArAvSt7ElmQ4oag/cW+DyNczrDIzqO+09YsdoGdhuXFTDl5H7Q2oELZlC5pprJDhqFTFXjgiMHRaJAnZE/gWR6AhcuR/sY/fJBABqj9Hrr4BeEw1OBlT7qWidCSCjI7UstRfXmYw9Zd/HAXDoO3OmJxEa0WcuG9RgG6ZgGl0lnqK/MoxCB1KQGXgUTlosH70fifT0AjFE2PmjsX2QUaCwogE1heaczCvm57m3O6FoMzPXlau5QiH6zBWBBSLDsQSAT0RQ7+WQAuxtuJ1B8ORRPPrQxQO0i8OgfF67rX53DOkIQ5QVven970gjesR5BTa/dkTpkGPSmXTr+32sUo+olINPHau3Vw9TrlrOxuqQcRnaDuZThGIlI518xDg55CGtA4qjwwkpgnOwjbe1ZC3MuQTUicqUQkoGOFIAPDJku29dNJLxXQrquuSvvEgHnyraUflKKT1dLKup4e1DbVHUEWir+zJR2NMVNJma3tZTNncg0pYe/g/mWrmdXo45FkbZ5tEqZRzAvzvDr2DO33M7uzwyXa6Jr9Tcu7yAXrOVygK6vi6wwXEvJpv4H3Y3jHJqlUmF3+C1GROhiJ79grCCIK6vtNfBxLSgdcR3Lq3UN1EY8PeExozegLIOGNTeL3xgykyEXrliGbQEvdgrVv8dU6sMmhgmQpPHatbeZ9AjtI0jkLcg6KcBLZX0ZgZCVwlclMzI5F1fncJQfkMAcR9JuwvQnjiRl/lSr6MnCqc6pgPjHVi1JYc1pzwcID4QZdNH0O7BDwMcAR+D4U8wMhTbafG7kRBFLK4FEZhsLe+3dxmdY6LNA9Jp38vI2kTa0lI4bDUTkTThq0QPxikPIVBaPC6xugA8wfngDwlMnped9Z4sZMplF8YhT1a0hb8K09zRrnyvfD1bZyK/rhcXYLEXfBtCosrUqbHTs15gvM8xl+46SgUyOB0u0bny6zegCtH+JPuYe7j8mDLCX00J2KMwc9/2kvR5/+49tkoZDwlTbKpyYQBi9iXxPOA5nuM5HjhenyJ4juf4c8e/AgwAmk2mSWCeoQsAAAAASUVORK5CYII=";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "header", children: [
    /* @__PURE__ */ jsx("div", { className: "nav-toggle", onClick: () => setMenuOpen(!menuOpen), children: /* @__PURE__ */ jsx(FaBars, {}) }),
    /* @__PURE__ */ jsx("div", { className: "header-space", children: /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx("img", { src: logo, className: "logoheader", loading: "lazy", alt: "JP Corwyn logo", width: "180" }) }) }),
    /* @__PURE__ */ jsx("nav", { className: `nav ${menuOpen ? "open" : ""}`, children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", children: "Home" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/books", children: "Writing" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/music", children: "Music" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/latest", children: "Latest News" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/bio", children: "About" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/buy", children: "Read Now" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://jp-corwyn.creator-spring.com/", target: "_blank", rel: "noopener noreferrer", children: "Merch" }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "social-icons", children: [
      /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/JPCorwynOfficial", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(FaFacebook, {}) }),
      /* @__PURE__ */ jsx("a", { href: "https://x.com/JPCorwyn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(FaTwitter, {}) }),
      /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/jpcorwyn/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(FaInstagram, {}) }),
      /* @__PURE__ */ jsx("a", { href: "https://www.twitch.tv/jp_corwyn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(FaTwitch, {}) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "headerCTA", children: /* @__PURE__ */ jsx("div", { className: "cta-button", children: /* @__PURE__ */ jsx(Link, { to: "/support", className: "join-cadre-btn", children: "⚔️ Join Corwyn's Cadre" }) }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { id: "contact", className: "footer", children: [
    /* @__PURE__ */ jsx("p", { children: "©2025 JP Corwyn, LLC | Official website" }),
    /* @__PURE__ */ jsx("p", { children: "Connect:" }),
    /* @__PURE__ */ jsxs("div", { className: "social-icons", children: [
      /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/JPCorwynOfficial", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(FaFacebook, {}) }),
      /* @__PURE__ */ jsx("a", { href: "https://x.com/JPCorwyn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(FaTwitter, {}) }),
      /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/jpcorwyn/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(FaInstagram, {}) }),
      /* @__PURE__ */ jsx("a", { href: "https://www.twitch.tv/jp_corwyn", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(FaTwitch, {}) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "Footer-contact", children: [
      /* @__PURE__ */ jsx("a", { href: "/bio#contact", className: "footer-link", children: "Contact" }),
      /* @__PURE__ */ jsx("a", { href: "/Publisher", className: "footer-link", children: "Privacy Policy" }),
      /* @__PURE__ */ jsx("a", { href: "https://4horsemenpublications.com/", target: "_blank", rel: "noopener noreferrer", className: "footer-link", children: "4 Horsemen Publications" })
    ] })
  ] });
}
const bookCover = "/assets/bookslide1-DTn9d3Cg.png";
const bookCover2 = "/assets/bookslide2-pFpmiofO.png";
const bookCover3 = "/assets/bookslide3-C-aPdZGs.png";
const album1 = "/assets/albumcover1-QLy_ggHY.png";
const album2 = "/assets/albumcover2-CwlsDJL6.jpg";
const album3 = "/assets/albumcover3-Pn9jTsy9.png";
function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const quote = document.querySelector(".quote-section");
      if (!quote) return;
      const fadeStart = 0;
      const fadeUntil = 800;
      const scroll = window.scrollY;
      const opacity = 1 - Math.min(1, Math.max(0, (scroll - fadeStart) / (fadeUntil - fadeStart)));
      quote.style.opacity = opacity;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs("main", { className: "home-page", children: [
    /* @__PURE__ */ jsx("section", { className: "quote-section", children: /* @__PURE__ */ jsx("h1", { className: "quote-text", children: "Creating words and worlds through stories and songs" }) }),
    /* @__PURE__ */ jsx("div", { className: "gradient-border" }),
    /* @__PURE__ */ jsxs("section", { className: "latest-releases", children: [
      /* @__PURE__ */ jsx("h2", { children: "Latest Releases" }),
      /* @__PURE__ */ jsxs("div", { className: "release-cards", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/Eaters", className: "release-card", children: [
          /* @__PURE__ */ jsx("img", { src: bookCover3, alt: "Eaters of Time book cover" }),
          /* @__PURE__ */ jsx("h3", { children: "Eaters of Time" })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/Music", className: "release-card", children: [
          /* @__PURE__ */ jsx("img", { src: album1, alt: "Cycle of Bones soundtrack album" }),
          /* @__PURE__ */ jsx("h3", { children: "The Cycle of Bones Soundtrack Vol. 1" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "gradientborder" }),
    /* @__PURE__ */ jsxs("section", { className: "book-series", children: [
      /* @__PURE__ */ jsx("h2", { children: "Explore the Book Series" }),
      /* @__PURE__ */ jsx("p", { className: "book-intro", children: "Dive into the world of gripping stories, unforgettable characters, and unforgettable journeys. Discover more about the titles that fans are raving about." }),
      /* @__PURE__ */ jsxs("div", { className: "book-series-grid", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/Buy", className: "book-card", children: [
          /* @__PURE__ */ jsx("img", { src: bookCover, alt: "Dawn of Unions book cover" }),
          /* @__PURE__ */ jsx("h3", { children: "Dawn of Unions" })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/Drums", className: "book-card", children: [
          /* @__PURE__ */ jsx("img", { src: bookCover2, alt: "Drums of Unrest book cover" }),
          /* @__PURE__ */ jsx("h3", { children: "Drums of Unrest" })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/Eaters", className: "book-card", children: [
          /* @__PURE__ */ jsx("img", { src: bookCover3, alt: "Eaters of Time book cover" }),
          /* @__PURE__ */ jsx("h3", { children: "Eaters of Time" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "music-explore", children: [
      /* @__PURE__ */ jsx("h2", { children: "Explore the Music" }),
      /* @__PURE__ */ jsx("p", { className: "music-intro", children: "Step into the soundscape that complements the stories. Experience immersive tracks, rich moods, and the emotional soundtrack of Corwyn's world." }),
      /* @__PURE__ */ jsxs("div", { className: "music-grid", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/music#Cycle-of-Bones-Soundtrack", className: "music-card", children: [
          /* @__PURE__ */ jsx("img", { src: album1, alt: "Album One Cover" }),
          /* @__PURE__ */ jsx("h3", { children: "Cycle of Bones Original Soundtrack Vol. 1" }),
          /* @__PURE__ */ jsx("p", { children: "A cinematic score capturing the rise of the rebellion. Atmospheric and epic, this album sets the tone." })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/music#Listening-From-the-Outside", className: "music-card", children: [
          /* @__PURE__ */ jsx("img", { src: album2, alt: "Album Two Cover" }),
          /* @__PURE__ */ jsx("h3", { children: "Listening from the Outside" }),
          /* @__PURE__ */ jsx("p", { children: "An intimate journey of sound and story that speaks to anyone who's ever felt just outside the noise of the world." })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/music#In-Plain-Sight", className: "music-card", children: [
          /* @__PURE__ */ jsx("img", { src: album3, alt: "Album Three Cover" }),
          /* @__PURE__ */ jsx("h3", { children: "In Plain Sight" }),
          /* @__PURE__ */ jsx("p", { children: "A powerful blend of soaring vocals and heartfelt lyrics that inspire self resilience and human connection." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "latest-video", children: [
      /* @__PURE__ */ jsx("h2", { children: "Latest on YouTube" }),
      /* @__PURE__ */ jsx("p", { className: "video-description", children: "Watch the newest release – music videos, behind-the-scenes content, or updates from Corwyn’s world." }),
      /* @__PURE__ */ jsx("div", { className: "video-container", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          width: "100%",
          height: "500",
          src: "https://www.youtube.com/embed/0RyA1-njlmk?si=FSbds-nzU5pItNpY",
          title: "Latest YouTube Video",
          frameBorder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "support", id: "support", children: [
      /* @__PURE__ */ jsx("h2", { children: "Support My Work" }),
      /* @__PURE__ */ jsxs("div", { className: "support-content", children: [
        /* @__PURE__ */ jsx("p", { children: "If you enjoy my music and stories — consider supporting my journey! Your contributions help me focus more time on creating and sharing my work." }),
        /* @__PURE__ */ jsxs("div", { className: "support-buttons", children: [
          /* @__PURE__ */ jsxs("a", { href: "https://www.patreon.com/JPCorwyn", target: "_blank", rel: "noopener noreferrer", className: "patreon-btn", children: [
            /* @__PURE__ */ jsx(FaPatreon, { style: { marginRight: "8px" } }),
            "Support on Patreon"
          ] }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://ko-fi.com/jpcorwyn",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "kofi-btn",
              children: [
                /* @__PURE__ */ jsx(SiKofi, { style: { marginRight: "8px" } }),
                "Tip via Ko-fi"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "newsletter-section", children: /* @__PURE__ */ jsxs("div", { className: "newsletter-overlay", children: [
      /* @__PURE__ */ jsx("h2", { children: "Stay in the Loop" }),
      /* @__PURE__ */ jsx("p", { children: "Subscribe to get the latest news, releases, and exclusive content straight to your inbox." }),
      /* @__PURE__ */ jsxs("form", { className: "newsletter-form", children: [
        /* @__PURE__ */ jsx("input", { type: "email", placeholder: "Enter your email", required: true }),
        /* @__PURE__ */ jsx("button", { type: "submit", children: "Subscribe" })
      ] })
    ] }) })
  ] });
}
function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return visible && /* @__PURE__ */ jsx(
    "button",
    {
      onClick: scrollToTop,
      style: {
        position: "fixed",
        bottom: "40px",
        right: "40px",
        padding: "10px 15px",
        fontSize: "16px",
        borderRadius: "0px",
        border: "none",
        backgroundColor: "#477CB8",
        color: "#fff",
        cursor: "pointer",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        zIndex: 1e3,
        transition: "opacity 0.3s"
      },
      "aria-label": "Back to top",
      children: "↑ Back to Top"
    }
  );
}
function HomePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "JP Corwyn | Blind Indie Rock & Blind Indie Prose" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://jpcorwyn.com.com/current-page" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "JP Corwyn | Blind Indie Rock & Blind Indie Prose" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding. #BlindIndieRock #BlindIndieProse" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://jpcorwyn.com/src/assets/images/jpclogo.jpeg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://jpcorwyn.com/page-url" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "JP Corwyn | Blind Indie Rock & Blind Indie Prose" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding. #BlindIndieRock #BlindIndieProse" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://jpcorwyn.com/src/assets/images/jpclogo.jpeg" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Home, {}),
    /* @__PURE__ */ jsx(BackToTopButton, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const img1 = "/assets/img1-CjaHjfQY.jpg";
function MainContent() {
  const ref1 = useRef();
  const [visible1, setVisible1] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            if (el === ref1.current) setVisible1(true);
          }
        });
      },
      {
        threshold: 0.7,
        rootMargin: "0px 0px -100px 0px"
      }
    );
    if (ref1.current) observer.observe(ref1.current);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "JP Corwyn | About " }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "About page.."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://jpcorwyn.com.com/current-page" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "JP Corwyn | Blind Indie Rock & Blind Indie Prose" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding. #BlindIndieRock #BlindIndieProse" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://jpcorwyn.com/src/assets/images/jpclogo.jpeg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://jpcorwyn.com/page-url" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "JP Corwyn | Blind Indie Rock & Blind Indie Prose" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding. #BlindIndieRock #BlindIndieProse" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://jpcorwyn.com/src/assets/images/jpclogo.jpeg" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "main", children: [
      /* @__PURE__ */ jsxs(
        "section",
        {
          ref: ref1,
          className: `bio ${visible1 ? "visible" : "hidden-left"}`,
          children: [
            /* @__PURE__ */ jsx("h2", { id: "about", children: "About The Man" }),
            /* @__PURE__ */ jsxs("div", { className: "bio-content", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: img1,
                  alt: "The Man",
                  width: "300",
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "bio-text", children: /* @__PURE__ */ jsxs("p", { children: [
                "Heya! I’m JP. Good to meet you.",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                "Now, I know this is the bio section, and you’re probably expecting something self-important and grand. Good news! Other people have, indeed, written that way about me! So let’s all put our pinkies in the air, put on our “oh-so-sophisticated” expressions, and read the official bio section, shall we?",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                "(Cue the third-person voiceover…)",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                "JP Corwyn is a seasoned indie fantasy author and alternative rock musician whose work spans continents and cultures, generations and genres. Legally blind since birth, as Corwyn’s vision loss increased, his reputation for honest, powerful vocals and boundless imagination grew. Known for his dark fantasy series The Cycle of Bones, his evocative unplugged and rock performances, and his lively panel appearances, Corwyn continues captivating audiences and readers alike.",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                "(Annnd…we’re back!)",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                "So, what’s the really real? I’m a storyteller. Always have been. I grew up on (mostly bad) D&D, horror, mystery, history, and fantasy books, AND (of course) music. I also have a massive love for culture, language, and how they intersect across borders—both on a map and between people. Oh, and I grew up with that whole Blind Guy thing. I am, as I understand it, kinda contractually obligated to crack blind jokes whenever I spot them. (See? There’s one! Wait, no. There’s two! Go me!)",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                "I’m told I sang before I spoke, so music’s always been a driving force in my life. Eventually, in 2019, I wrote my first book: The Dawn of Unions, the novella and prequel that launched my dark military fantasy series, The Cycle of Bones.",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                "I also produce soundtracks for my books, blending my work as a fantasy author with my career as a singer-songwriter. The idea of combining my two worlds seemed sensible enough—but it really locked in when fans of my music read the novella, saw in-world song lyrics, and said: “Hey blinky! We know those songs are real. So, uh… album when? Streaming service when?”",
                /* @__PURE__ */ jsx("br", {}),
                "In other words: “Dance, monkey, dance!” Or, I guess, “Sing, monkey, sing!”",
                /* @__PURE__ */ jsx("br", {}),
                "I know, I know—who could’ve seen that coming, right?",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                "Arm duly twisted (written with all snark and sarcasm), I started recording soundtracks and albums that bring those stories into the music.",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                "Anyroad, that’s the long and short of it. Stick around, read the books, stream the music, subscribe on YouTube, sign up for my newsletter, or come see me at a show or convention. I promise you’ll see me long before I see you.",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                "Thanks for all the Electricity!"
              ] }) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "full-line" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "contact-newsletter", id: "contact", children: [
      /* @__PURE__ */ jsx("h2", { children: "Contact & Newsletter" }),
      /* @__PURE__ */ jsxs("div", { className: "contact-container", children: [
        /* @__PURE__ */ jsxs("div", { className: "contact-form", id: "Contact", children: [
          /* @__PURE__ */ jsx("h3", { children: "Send Me a Message" }),
          /* @__PURE__ */ jsxs(
            "form",
            {
              action: "https://formspree.io/f/yourFormID",
              method: "POST",
              children: [
                /* @__PURE__ */ jsx("input", { type: "text", name: "name", placeholder: "Your Name", required: true }),
                /* @__PURE__ */ jsx("input", { type: "email", name: "email", placeholder: "Your Email", required: true }),
                /* @__PURE__ */ jsx("textarea", { name: "message", placeholder: "Your Message", required: true }),
                /* @__PURE__ */ jsx("button", { type: "submit", children: "Send" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "newsletter-form", children: [
          /* @__PURE__ */ jsx("h3", { children: "Join My Newsletter" }),
          /* @__PURE__ */ jsxs(
            "form",
            {
              action: "https://your-mailchimp-url",
              method: "POST",
              target: "_blank",
              noValidate: true,
              children: [
                /* @__PURE__ */ jsx("input", { type: "email", name: "EMAIL", placeholder: "Your Email", required: true }),
                /* @__PURE__ */ jsx("button", { type: "submit", children: "Subscribe" })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(BackToTopButton, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function DawnOfUnions() {
  return /* @__PURE__ */ jsx("section", { className: "DawnofUnions banner-section", children: /* @__PURE__ */ jsx("div", { className: "banner-content", children: /* @__PURE__ */ jsxs("div", { className: "banner-row", children: [
    /* @__PURE__ */ jsxs("div", { className: "image-column", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: bookCover,
          loading: "lazy",
          alt: "Dawn of Unions",
          className: "banner-image"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "spotify-embed", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          style: { borderRadius: "12px" },
          src: "https://open.spotify.com/embed/album/6QBCPuRAzMVtto7mIo2KwA?utm_source=generator",
          width: "300",
          height: "80",
          frameBorder: "0",
          allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
          loading: "lazy",
          title: "Spotify Player"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-content", children: [
      /* @__PURE__ */ jsx("h2", { className: "banner-title", children: "Book 1: Dawn of Unions" }),
      /* @__PURE__ */ jsx("p", { children: "Kaith and his armsmen must fight a demonic army to save their besieged village and its cursed survivors. Can Kaith prevent darkness from claiming anyone left standing?" }),
      /* @__PURE__ */ jsx(Link, { to: "/buy", className: "buy-button", children: "Find Out More" })
    ] })
  ] }) }) });
}
function DrumsOfUnrest() {
  return /* @__PURE__ */ jsx("section", { className: "DrumsofUnrest", children: /* @__PURE__ */ jsx("div", { className: "banner-content", children: /* @__PURE__ */ jsxs("div", { className: "banner-row", children: [
    /* @__PURE__ */ jsxs("div", { className: "image-column", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: bookCover2,
          loading: "lazy",
          alt: "Drums of Unrest",
          className: "banner-image"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "spotify-embed", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          style: { borderRadius: "12px" },
          src: "https://open.spotify.com/embed/album/6QBCPuRAzMVtto7mIo2KwA?utm_source=generator",
          width: "300",
          height: "80",
          frameBorder: "0",
          allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
          loading: "lazy",
          title: "Spotify Player"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-content", children: [
      /* @__PURE__ */ jsx("h2", { className: "banner-title", children: "Book 2: Drums of Unrest" }),
      /* @__PURE__ */ jsx("p", { children: "As Skolf faces an unearthly siege, the King of the Dead draws ever closer with his agents to tear Skolf asunder. Follow Kaith, Eobum and other heroes as they battle the inner phantoms that haunt them in this gritty dark military fantasy." }),
      /* @__PURE__ */ jsx(Link, { to: "/Drums", className: "buy-button", children: "Find Out More" })
    ] })
  ] }) }) });
}
function EatersOfTime() {
  return /* @__PURE__ */ jsx("section", { className: "EatersOfTime", children: /* @__PURE__ */ jsx("div", { className: "banner-content", children: /* @__PURE__ */ jsxs("div", { className: "banner-row", children: [
    /* @__PURE__ */ jsxs("div", { className: "image-column", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: bookCover3,
          loading: "lazy",
          alt: "Eaters of Time Cover",
          className: "banner-image"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "spotify-embed", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          src: "https://open.spotify.com/embed/album/6QBCPuRAzMVtto7mIo2KwA?utm_source=generator",
          width: "300",
          height: "80",
          frameBorder: "0",
          allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
          loading: "lazy",
          title: "Spotify Player",
          style: { borderRadius: "12px" }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-content", children: [
      /* @__PURE__ */ jsx("h2", { className: "banner-title", children: "Book 3: Eaters of Time" }),
      /* @__PURE__ */ jsx("p", { children: "A land now divided by war, where ancient sorcery and monstrous threats lurk ever closer. Sir Kaith and three other heroes rise to protect the world, but can they truly outwit the darkness and save Skolf?" }),
      /* @__PURE__ */ jsx(Link, { to: "/Eaters", className: "buy-button", children: "Find Out More" })
    ] })
  ] }) }) });
}
function Books() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Books | JP Corwyn" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Explore JP Corwyn's dark fantasy novels and novellas, including the Cycle of Bones series."
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Books by JP Corwyn" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Discover the Cycle of Bones series and other dark fantasy works by JP Corwyn."
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "../assets/images/dawnimg.jpeg" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(DawnOfUnions, {}),
    /* @__PURE__ */ jsx(DrumsOfUnrest, {}),
    /* @__PURE__ */ jsx(EatersOfTime, {}),
    /* @__PURE__ */ jsx(BackToTopButton, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function BookPage({ bookId }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
      // for smooth scrolling
    });
  }, [bookId]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Dawn of Unions | JP Corwyn" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Dawn of Unions is a dark fantasy prequel novella in the Cycle of Bones series by JP Corwyn. Survival, sacrifice, and brutal choices in a cursed village filled with demonic horrors and realistic battles."
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "keywords",
          content: "Cycle of Bones, dark fantasy, military fantasy, horror fantasy, gritty fantasy, prequel novella, fantasy series, epic saga, unlikely hero, survival against impossible odds, cursed village, demonic horrors, realistic battles, grimdark fantasy, survival, sacrifice, brutal choices"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Dawn of Unions by JP Corwyn" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "A grimdark fantasy novella in the Cycle of Bones series. Dark fantasy, demonic horrors, survival, and brutal choices."
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "../assets/images/bookslide1.png" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "book-page", children: [
      /* @__PURE__ */ jsxs("section", { className: "book-detail-section", children: [
        /* @__PURE__ */ jsxs("div", { className: "book-cover-container", children: [
          /* @__PURE__ */ jsx("img", { src: bookCover, alt: "Dawn of Unions book cover", className: "book-cover" }),
          /* @__PURE__ */ jsxs("div", { className: "book-links", children: [
            /* @__PURE__ */ jsx("a", { href: "https://4horsemenpublications.com/product/the-dawn-of-unions-the-cycle-of-bones-0/", target: "_blank", rel: "noopener noreferrer", className: "buy-link primary-buy", children: "📘 Buy it now!" }),
            /* @__PURE__ */ jsx("a", { href: "https://www.amazon.com/Dawn-Unions-Cycle-Bones-ebook/dp/B0CR64J7FB?ref_=ast_author_dp", target: "_blank", rel: "noopener noreferrer", className: "buy-link secondary-buy", children: "📘 Buy on Amazon" }),
            /* @__PURE__ */ jsx("a", { href: "https://open.spotify.com/album/6QBCPuRAzMVtto7mIo2KwA?si=eL94ydLTRea15nef4fypkg", target: "_blank", rel: "noopener noreferrer", className: "spotify-link", children: "🎧 Listen on Spotify" }),
            /* @__PURE__ */ jsx("a", { href: "https://www.goodreads.com/book/show/48891396-the-dawn-of-unions", target: "_blank", rel: "noopener noreferrer", children: "View my Goodreads reviews" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "book-info", children: [
          /* @__PURE__ */ jsx("h2", { className: "book-title", children: "Cycle of Bones – Dawn of Unions" }),
          /* @__PURE__ */ jsxs("p", { className: "book-description", children: [
            "Kaith knows he’s been luckier than most. Born to a blacksmith, he’s grateful that hard work and fortune earned him a position as a man-at-arms in the Countess’s service. But when he accompanies her entourage to a joyful annual festival, the young soldier is shocked to find the village besieged, its people cursed, and Her Excellency’s knights slaughtered.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "Trapped inside the helpless town, Kaith and his fellow armsmen must stand against a terrifying enemy. But when the force that rises against them is an army of familiar faces—friends and kin twisted into lifeless horrors—he fears his small contingent will soon join their ranks. Facing rampant terror with little hope, can Kaith prevent darkness from claiming anyone left standing?",
            /* @__PURE__ */ jsx("br", {}),
            "The Dawn of Unions is the first book and novella to the Cycle of Bones, a dark military fantasy series.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "If you like…",
            /* @__PURE__ */ jsx("br", {}),
            "- Unlikely heroes standing against impossible odds",
            /* @__PURE__ */ jsx("br", {}),
            "- Realistic battles where every decision counts",
            /* @__PURE__ */ jsx("br", {}),
            "- A dark fantasy survival story against demonic horrors"
          ] }),
          /* @__PURE__ */ jsxs("section", { className: "book-reviews", children: [
            /* @__PURE__ */ jsx("h3", { children: "What Readers Are Saying" }),
            /* @__PURE__ */ jsxs("div", { className: "review-card", children: [
              /* @__PURE__ */ jsx("p", { children: "“A gripping start to a series that promises epic scope and emotional depth.”" }),
              /* @__PURE__ */ jsx("span", { children: "– Fantasy Book Blog" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "review-card", children: [
              /* @__PURE__ */ jsx("p", { children: "“Characters you’ll love and a world you won’t want to leave. Can’t wait for the next!”" }),
              /* @__PURE__ */ jsx("span", { children: "– Verified Reader" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "more-books", children: [
        /* @__PURE__ */ jsx("h2", { children: "Explore Other Books" }),
        /* @__PURE__ */ jsxs("div", { className: "book-grid", children: [
          /* @__PURE__ */ jsxs("div", { className: "book-card-read", children: [
            /* @__PURE__ */ jsx("img", { src: bookCover2, alt: "Book 2" }),
            /* @__PURE__ */ jsx("h3", { children: "Drums of Unrest" }),
            /* @__PURE__ */ jsx("h4", { children: "Cycle of Bones Book 2" }),
            /* @__PURE__ */ jsx(Link, { to: "/Drums", children: "Learn More" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "book-card-read", children: [
            /* @__PURE__ */ jsx("img", { src: bookCover3, alt: "Book 3" }),
            /* @__PURE__ */ jsx("h3", { children: "Eaters of Time" }),
            /* @__PURE__ */ jsx("h4", { children: "Cycle of Bones Book 3" }),
            /* @__PURE__ */ jsx(Link, { to: "/eaters", children: "Learn More" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(BackToTopButton, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function DrumsBookPage() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [location.pathname]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Drums of Unrest | JP Corwyn" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Drums of Unrest is a dark fantasy novell in the Cycle of Bones series by JP Corwyn. As Skolf faces an unearthly siege, the King of the Dead draws ever closer with his agents to tear Skolf asunder. Follow Kaith, Eobum and other heroes as they battle the inner phantoms that haunt them in this gritty dark military fantasy. "
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "keywords",
          content: "Cycle of Bones, dark fantasy, military fantasy, horror fantasy, gritty fantasy, first novell, fantasy series, epic saga, flawed hero, sacrifice and duty, rising dead / undead army, shadows and malice, realistic battles, grimdark fantasy, war-torn world, swords and shields, desperate skirmishes"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Drums of Unrest by JP Corwyn" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "As Skolf faces an unearthly siege, the King of the Dead draws ever closer with his agents to tear Skolf asunder. Follow Kaith, Eobum and other heroes as they battle the inner phantoms that haunt them in this gritty dark military fantasy. "
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "../assets/images/bookslide2.png" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "book-page", children: [
      /* @__PURE__ */ jsxs("section", { className: "book-detail-section", children: [
        /* @__PURE__ */ jsxs("div", { className: "book-cover-container", children: [
          /* @__PURE__ */ jsx("img", { src: bookCover2, alt: "Drums of Unrest book cover", className: "book-cover" }),
          /* @__PURE__ */ jsxs("div", { className: "book-links", children: [
            /* @__PURE__ */ jsx("a", { href: "https://4horsemenpublications.com/product/the-drums-of-unrest-the-cycle-of-bones-1/", target: "_blank", rel: "noopener noreferrer", className: "buy-link primary-buy", children: "📘 Buy it now!" }),
            /* @__PURE__ */ jsx("a", { href: "https://www.amazon.com/Drums-Unrest-Cycle-Bones-Book-ebook/dp/B0D124WN8Q?ref_=ast_author_dp", target: "_blank", rel: "noopener noreferrer", className: "buy-link secondary-buy", children: "📘 Buy on Amazon" }),
            /* @__PURE__ */ jsx("a", { href: "https://open.spotify.com/album/6QBCPuRAzMVtto7mIo2KwA?si=W1CunDOrR1CDoBkBf1oi5w", target: "_blank", rel: "noopener noreferrer", className: "spotify-link", children: "🎧 Listen on Spotify" }),
            /* @__PURE__ */ jsx("a", { href: "https://www.goodreads.com/book/show/55936065-the-drums-of-unrest", target: "_blank", rel: "noopener noreferrer", children: "View my Goodreads reviews" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "book-info", children: [
          /* @__PURE__ */ jsx("h2", { className: "book-title", children: "Cycle of Bones – Drums of Unrest" }),
          /* @__PURE__ */ jsxs("p", { className: "book-description", children: [
            "In the wake of that unearthly siege, the foundations of power across Skolf begin to crumble. Kaith and his fellows must fight the phantoms of their own minds, even as County Thorion prepares for the war to come. The King of the Dead—the only enemy that truly matters—has spent centuries in exile somewhere “outside,” biding his time. His agents have shown a terrible patience as they gather power and influence for the day of his return… a day that draws ever closer. When all paths seem ill, Eobum, a man born to the spear, will be forced to make an impossible choice.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "But truth has power. Those willing to speak the truth can make an impact felt miles, even worlds away without ever knowing it.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "The Drums of Unrest is the first book in the sweeping Cycle of Bones dark military fantasy series, following the prequel Dawn of Unions. If you enjoy unlikely heroes, realistic battles, and fighting for survival, then you’ll love JP Corwyn’s gritty return to the world of Skolf."
          ] }),
          /* @__PURE__ */ jsxs("section", { className: "book-reviews", children: [
            /* @__PURE__ */ jsx("h3", { children: "What Readers Are Saying" }),
            /* @__PURE__ */ jsxs("div", { className: "review-card", children: [
              /* @__PURE__ */ jsx("p", { children: "“A gripping start to a series that promises epic scope and emotional depth.”" }),
              /* @__PURE__ */ jsx("span", { children: "– Fantasy Book Blog" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "review-card", children: [
              /* @__PURE__ */ jsx("p", { children: "“Characters you’ll love and a world you won’t want to leave. Can’t wait for the next!”" }),
              /* @__PURE__ */ jsx("span", { children: "– Verified Reader" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "more-books", children: [
        /* @__PURE__ */ jsx("h2", { children: "Explore Other Books" }),
        /* @__PURE__ */ jsxs("div", { className: "book-grid", children: [
          /* @__PURE__ */ jsxs("div", { className: "book-card-read", children: [
            /* @__PURE__ */ jsx("img", { src: bookCover, alt: "Book 1" }),
            /* @__PURE__ */ jsx("h3", { children: "Dawn of Unions" }),
            /* @__PURE__ */ jsx("h4", { children: "Cycle of Bones Book 1" }),
            /* @__PURE__ */ jsx(Link, { to: "/Buy", children: "Learn More" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "book-card-read", children: [
            /* @__PURE__ */ jsx("img", { src: bookCover3, alt: "Book 3" }),
            /* @__PURE__ */ jsx("h3", { children: "Eaters of Time" }),
            /* @__PURE__ */ jsx("h4", { children: "Cycle of Bones Book 3" }),
            /* @__PURE__ */ jsx(Link, { to: "/Eaters", children: "Learn More" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(BackToTopButton, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function EatersBookPage() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [location.pathname]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Eaters of Time | JP Corwyn" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Eaters of Time is a dark fantasy novell in the Cycle of Bones series by JP Corwyn. A land now divided by war, where ancient sorcery and monstrous threats lurk ever closer. Sir Kaith and three other heroes rise to protect the world, but can they truly outwit the darkness and save Skolf?"
        }
      ),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "keywords",
          content: "Cycle of Bones, dark fantasy, military fantasy, horror fantasy, gritty fantasy, second novell, fantasy series, epic saga, cursed fate, resilience in the face of darkness, relentless siege, haunted lands, realistic battles, grimdark fantasy, unearthly terror, doomed defenders, gritty combat, brotherhood of arms, tactical survival, immersive worldbuilding"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Eaters of Time by JP Corwyn" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "A grimdark fantasy novella in the Cycle of Bones series. A land now divided by war, where ancient sorcery and monstrous threats lurk ever closer. Sir Kaith and three other heroes rise to protect the world, but can they truly outwit the darkness and save Skolf?"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "../assets/images/bookslide3.png" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "book-page", children: [
      /* @__PURE__ */ jsxs("section", { className: "book-detail-section", children: [
        /* @__PURE__ */ jsxs("div", { className: "book-cover-container", children: [
          /* @__PURE__ */ jsx("img", { src: bookCover3, alt: "Eaters of Time book cover", className: "book-cover" }),
          /* @__PURE__ */ jsxs("div", { className: "book-links", children: [
            /* @__PURE__ */ jsx("a", { href: "https://4horsemenpublications.com/product/the-eaters-of-time-the-cycle-of-bones-2/", target: "_blank", rel: "noopener noreferrer", className: "buy-link primary-buy", children: "📘 Buy it now!" }),
            /* @__PURE__ */ jsx("a", { href: "https://www.amazon.com/Eaters-Time-Cycle-Bones-Book-ebook/dp/B0D1GLFVHC?ref_=ast_author_dp", target: "_blank", rel: "noopener noreferrer", className: "buy-link secondary-buy", children: "📘 Buy on Amazon" }),
            /* @__PURE__ */ jsx("a", { href: "https://open.spotify.com/album/6QBCPuRAzMVtto7mIo2KwA?si=W1CunDOrR1CDoBkBf1oi5w", target: "_blank", rel: "noopener noreferrer", className: "spotify-link", children: "🎧 Listen on Spotify" }),
            /* @__PURE__ */ jsx("a", { href: "https://www.goodreads.com/book/show/62893233-the-eaters-of-time", target: "_blank", rel: "noopener noreferrer", children: "View my Goodreads reviews" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "book-info", children: [
          /* @__PURE__ */ jsx("h2", { className: "book-title", children: "Cycle of Bones – Eaters of Time" }),
          /* @__PURE__ */ jsxs("p", { className: "book-description", children: [
            "In the north",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "When an unknown enemy army appears as if by magic near the count’s encampment, Lady Kastan must outthink, outrun, and outfight their vanguard. After witnessing strange sorcery that hints at a monstrous secret, she knows death is on the wind. Can she warn the nearby encampment in time? To rescue her kidnapped son, Lashjuk sneaks behind enemy lines. New to the way of the spear, and wielding a power she’s just beginning to understand, she’ll be forced to play a deadly game of cat and mouse if she has any hope of bringing her boy home.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "In the south",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "As cradle-tale monsters attack northern Thorion, the newly minted Sir Kaith’s courage and skill as a leader will be pushed to the limit. Can the young knight ward off the attackers, counter their cunning, and save the settlement before it’s too late? Meanwhile, alone and unsupported, Sir Jastar begins the delicate and dangerous work of infiltrating the once-haunted lands north of Thorion. Unprepared for both who and what he finds, the enormity of his task begins to overwhelm him. Can Jast unearth the secrets of this land’s power in time to save the Thorion Throne?"
          ] }),
          /* @__PURE__ */ jsxs("section", { className: "book-reviews", children: [
            /* @__PURE__ */ jsx("h3", { children: "What Readers Are Saying" }),
            /* @__PURE__ */ jsxs("div", { className: "review-card", children: [
              /* @__PURE__ */ jsx("p", { children: "“A gripping start to a series that promises epic scope and emotional depth.”" }),
              /* @__PURE__ */ jsx("span", { children: "– Fantasy Book Blog" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "review-card", children: [
              /* @__PURE__ */ jsx("p", { children: "“Characters you’ll love and a world you won’t want to leave. Can’t wait for the next!”" }),
              /* @__PURE__ */ jsx("span", { children: "– Verified Reader" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "more-books", children: [
        /* @__PURE__ */ jsx("h2", { children: "Explore Other Books" }),
        /* @__PURE__ */ jsxs("div", { className: "book-grid", children: [
          /* @__PURE__ */ jsxs("div", { className: "book-card-read", children: [
            /* @__PURE__ */ jsx("img", { src: bookCover, alt: "Book 1" }),
            /* @__PURE__ */ jsx("h3", { children: "Dawn of Unions" }),
            /* @__PURE__ */ jsx("h4", { children: "Cycle of Bones Book 1" }),
            /* @__PURE__ */ jsx(Link, { to: "/Buy", children: "Learn More" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "book-card-read", children: [
            /* @__PURE__ */ jsx("img", { src: bookCover2, alt: "Book 2" }),
            /* @__PURE__ */ jsx("h3", { children: "Drums of Unrest" }),
            /* @__PURE__ */ jsx("h4", { children: "Cycle of Bones Book 2" }),
            /* @__PURE__ */ jsx(Link, { to: "/Drums", children: "Learn More" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(BackToTopButton, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function MusicPage() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("main", { className: "music-page", children: [
    /* @__PURE__ */ jsxs("section", { className: "latest-single", children: [
      /* @__PURE__ */ jsx("h1", { children: "Newest release: Cycle of Bones Soundtrack Vol. 1" }),
      /* @__PURE__ */ jsxs("div", { className: "single-container", children: [
        /* @__PURE__ */ jsx("img", { src: album1, alt: "Latest Single Cover", className: "single-cover" }),
        /* @__PURE__ */ jsxs("div", { className: "single-links", children: [
          /* @__PURE__ */ jsx("a", { href: "https://open.spotify.com/album/6QBCPuRAzMVtto7mIo2KwA?si=xNry9hAzTo6_gMf878mu2Q", target: "_blank", rel: "noopener noreferrer", className: "spotify-link", children: "🎧 Listen on Spotify" }),
          /* @__PURE__ */ jsx("a", { href: "https://amazon.com/music/player/albums/B0CZ3D4PL6?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_S0vgDUBvtSY8SrzHqsysaT8vs", target: "_blank", rel: "noopener noreferrer", className: "youtube-link", children: "▶ Amazon" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "album-series", children: [
      /* @__PURE__ */ jsx("h2", { children: "Albums" }),
      /* @__PURE__ */ jsxs("div", { className: "album-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "album-card", children: [
          /* @__PURE__ */ jsx("img", { src: album1, alt: "Album 1", className: "album-cover", id: "Cycle-of-Bones-Soundtrack" }),
          /* @__PURE__ */ jsx("h3", { children: "Cycle of Bones Original Soundtrack Vol. 1 " }),
          /* @__PURE__ */ jsxs("div", { className: "album-links", children: [
            /* @__PURE__ */ jsx("a", { href: "https://open.spotify.com/album/6QBCPuRAzMVtto7mIo2KwA?si=xNry9hAzTo6_gMf878mu2Q", target: "_blank", rel: "noopener noreferrer", className: "spotify-link", children: "Spotify" }),
            /* @__PURE__ */ jsx("a", { href: "https://amazon.com/music/player/albums/B0CZ3D4PL6?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_S0vgDUBvtSY8SrzHqsysaT8vs", target: "_blank", rel: "noopener noreferrer", className: "youtube-link", children: "Amazon" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "album-card", children: [
          /* @__PURE__ */ jsx("img", { src: album2, alt: "Album 2", className: "album-cover", id: "Listening-From-the-Outside" }),
          /* @__PURE__ */ jsx("h3", { children: "Listening From the Outside" }),
          /* @__PURE__ */ jsxs("div", { className: "album-links", children: [
            /* @__PURE__ */ jsx("a", { href: "https://open.spotify.com/album/775E3TXnsky3kJHgAhFoYk?si=aO96f3C5S-aSCwmsorKXbw", target: "_blank", rel: "noopener noreferrer", className: "spotify-link", children: "Spotify" }),
            /* @__PURE__ */ jsx("a", { href: "https://music.apple.com/us/album/listening-from-the-outside/616007004?l=ko", target: "_blank", rel: "noopener noreferrer", className: "apple-music-link", children: "Apple Music" }),
            /* @__PURE__ */ jsx("a", { href: "https://youtube.com/playlist?list=OLAK5uy_nk8jaiWwcCs7xylGgjYAV7SO8ztxHEccc&si=a3f4MoNAWPKE0uge", target: "_blank", rel: "noopener noreferrer", className: "youtube-link", children: "YouTube" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "album-card", children: [
          /* @__PURE__ */ jsx("img", { src: album3, alt: "Album 3", className: "album-cover", id: "In-Plain-Sight" }),
          /* @__PURE__ */ jsx("h3", { children: "In Plain Sight" }),
          /* @__PURE__ */ jsxs("div", { className: "album-links", children: [
            /* @__PURE__ */ jsx("a", { href: "https://open.spotify.com/album/54PJ0FW2RLD58bvZxAubZl?si=L9FEosD1STOSpMG6nUAanQ", target: "_blank", rel: "noopener noreferrer", className: "spotify-link", children: "Spotify" }),
            /* @__PURE__ */ jsx("a", { href: "https://music.apple.com/us/album/in-plain-sight/171464019?l=ko", target: "_blank", rel: "noopener noreferrer", className: "apple-music-link", children: "Apple Music" }),
            /* @__PURE__ */ jsx("a", { href: "https://youtube.com/playlist?list=OLAK5uy_n6aOBAuUatpzKgdbWrr7F51p7cAlWGrts&si=rwMuLygmYrnpm0YH", target: "_blank", rel: "noopener noreferrer", className: "youtube-link", children: "YouTube" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "live-videos", children: [
      /* @__PURE__ */ jsx("h2", { className: "section-heading", children: "Live YouTube Videos" }),
      /* @__PURE__ */ jsx("p", { className: "section-intro", children: "Watch the latest live performances and music videos directly from our channel." }),
      /* @__PURE__ */ jsxs("div", { className: "live-video-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "live-video-card", children: [
          /* @__PURE__ */ jsx(
            "iframe",
            {
              src: "https://www.youtube.com/embed/Y1RsbhFvBv0?si=sq1pO2kZx_vWNOrI",
              title: "Live Video 1",
              frameBorder: "0",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "video-title", children: "Live Performance 1" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "live-video-card", children: [
          /* @__PURE__ */ jsx(
            "iframe",
            {
              src: "https://www.youtube.com/embed/iFpDLvkYJ1o?si=GoNa4Y9Bn-XNIbAK",
              title: "Live Video 2",
              frameBorder: "0",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "video-title", children: "Livestreamed performance." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "live-video-card", children: [
          /* @__PURE__ */ jsx(
            "iframe",
            {
              src: "https://www.youtube.com/embed/_VEGaSk8DyU?si=rp3tZK7oLOBlXoiT",
              title: "Live Video from recording studio",
              frameBorder: "0",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true
            }
          ),
          /* @__PURE__ */ jsx("h3", { className: "video-title", children: "Live from the recording studio in Norway" })
        ] })
      ] })
    ] })
  ] }) });
}
function Music() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "JP Corwyn | Music" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://jpcorwyn.com.com/current-page" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "JP Corwyn | Blind Indie Rock & Blind Indie Prose" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding. #BlindIndieRock #BlindIndieProse" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://jpcorwyn.com/src/assets/images/jpclogo.jpeg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://jpcorwyn.com/page-url" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "JP Corwyn | Blind Indie Rock & Blind Indie Prose" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding. #BlindIndieRock #BlindIndieProse" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://jpcorwyn.com/src/assets/images/jpclogo.jpeg" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(MusicPage, {}),
    /* @__PURE__ */ jsx(BackToTopButton, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function PublisherContent() {
  return /* @__PURE__ */ jsxs("section", { className: "publisher-page", children: [
    /* @__PURE__ */ jsxs("div", { className: "publisher-header", children: [
      /* @__PURE__ */ jsx("h1", { children: "Publisher Information" }),
      /* @__PURE__ */ jsx("p", { className: "tagline", children: "Bringing Bold Fantasy to Life" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "publisher-section", children: [
      /* @__PURE__ */ jsx("h2", { children: "About the Publisher" }),
      /* @__PURE__ */ jsx("p", { children: "Skolf Press is a small, independent publisher dedicated to immersive storytelling in fantasy, speculative fiction, and myth-inspired literature. We aim to amplify unique voices and publish bold, emotionally resonant works for readers of all kinds." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "publisher-section", children: [
      /* @__PURE__ */ jsx("h2", { children: "Contact Information" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "📧 Email: ",
        /* @__PURE__ */ jsx("a", { href: "mailto:info@skolfpress.com", children: "info@skolfpress.com" }),
        /* @__PURE__ */ jsx("br", {}),
        "🌐 Website: ",
        /* @__PURE__ */ jsx("a", { href: "https://skolfpress.com", target: "_blank", rel: "noopener noreferrer", children: "skolfpress.com" }),
        /* @__PURE__ */ jsx("br", {}),
        "📍 Based in: Tampa, Florida"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "publisher-section", children: [
      /* @__PURE__ */ jsx("h2", { children: "Submissions" }),
      /* @__PURE__ */ jsx("p", { children: "Skolf Press is not currently accepting unsolicited manuscripts. Please follow our newsletter or social channels for updates on future submission opportunities." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "full-line" }),
    /* @__PURE__ */ jsxs("div", { className: "publisher-section", children: [
      /* @__PURE__ */ jsx("h2", { children: "Terms of Service" }),
      /* @__PURE__ */ jsx("p", { children: "By accessing or using this website, you agree to be bound by the following terms:" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "This website and all associated content are the property of Skolf Press." }),
        /* @__PURE__ */ jsx("li", { children: "You may not copy, distribute, or modify materials without permission." }),
        /* @__PURE__ */ jsx("li", { children: "Any links to third-party platforms (e.g., Amazon, Spotify) are provided for convenience only." }),
        /* @__PURE__ */ jsx("li", { children: "All purchases, subscriptions, and third-party content are subject to their respective platform terms." })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "We reserve the right to modify these terms at any time without notice. Continued use of this website constitutes acceptance of those changes." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "publisher-cta", children: /* @__PURE__ */ jsx("a", { href: "/bio#contact", className: "contact-publisher-btn", children: "Contact Us" }) })
  ] });
}
function Publisher() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "JP Corwyn | Publisher" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://jpcorwyn.com.com/current-page" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "JP Corwyn | Blind Indie Rock & Blind Indie Prose" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding. #BlindIndieRock #BlindIndieProse" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://jpcorwyn.com/src/assets/images/jpclogo.jpeg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://jpcorwyn.com/page-url" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "JP Corwyn | Blind Indie Rock & Blind Indie Prose" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding. #BlindIndieRock #BlindIndieProse" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://jpcorwyn.com/src/assets/images/jpclogo.jpeg" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(PublisherContent, {}),
    /* @__PURE__ */ jsx(BackToTopButton, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function LatestNewsComponent() {
  return /* @__PURE__ */ jsxs("section", { className: "latest-news-section", children: [
    /* @__PURE__ */ jsx("h2", { className: "latest-news-heading", children: "Latest News" }),
    /* @__PURE__ */ jsxs("div", { className: "latest-news-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "news-card", children: [
        /* @__PURE__ */ jsx("h3", { children: "Latest YouTube Video" }),
        /* @__PURE__ */ jsx("div", { className: "video-wrapper", children: /* @__PURE__ */ jsx(
          "iframe",
          {
            width: "560",
            height: "315",
            src: "https://www.youtube.com/embed/0RyA1-njlmk",
            title: "Latest YouTube Video",
            frameBorder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            referrerPolicy: "strict-origin-when-cross-origin",
            allowFullScreen: true
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "news-card", children: [
        /* @__PURE__ */ jsx("h3", { children: "Latest Instagram Post" }),
        /* @__PURE__ */ jsx("div", { className: "instagram-wrapper", children: /* @__PURE__ */ jsx(
          "iframe",
          {
            src: "https://www.instagram.com/reel/C29G_pzsDLd/embed",
            width: "400",
            height: "480",
            frameBorder: "0",
            scrolling: "no",
            allowTransparency: "true",
            allow: "encrypted-media",
            title: "Latest Instagram Post"
          }
        ) })
      ] })
    ] })
  ] });
}
function LatestNews() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "JP Corwyn | Latest News" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://jpcorwyn.com.com/current-page" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "JP Corwyn | Blind Indie Rock & Blind Indie Prose" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding. #BlindIndieRock #BlindIndieProse" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://jpcorwyn.com/src/assets/images/jpclogo.jpeg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://jpcorwyn.com/page-url" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "JP Corwyn | Blind Indie Rock & Blind Indie Prose" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding. #BlindIndieRock #BlindIndieProse" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://jpcorwyn.com/src/assets/images/jpclogo.jpeg" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(LatestNewsComponent, {}),
    /* @__PURE__ */ jsx(BackToTopButton, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function MerchComponent() {
  return /* @__PURE__ */ jsxs("section", { className: "merch-section", children: [
    /* @__PURE__ */ jsx("h2", { className: "merch-heading", children: "Shop Merch from the world of Skolf!" }),
    /* @__PURE__ */ jsx(
      "iframe",
      {
        src: "https://jp-corwyn.creator-spring.com/?utm_medium=referral&utm_source=twitch_integration&utm_campaign=jp-corwyn",
        title: "Skolf Merch Store",
        width: "100%",
        height: "1000px",
        style: { border: "none" },
        scrolling: "no"
      }
    )
  ] });
}
function Merch() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(MerchComponent, {}),
    /* @__PURE__ */ jsx(BackToTopButton, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Support() {
  return /* @__PURE__ */ jsxs("section", { className: "support", id: "support", children: [
    /* @__PURE__ */ jsx("h2", { children: "Support My Work" }),
    /* @__PURE__ */ jsxs("div", { className: "support-content", children: [
      /* @__PURE__ */ jsx("p", { children: "If you enjoy my music, stories, or art — consider supporting my journey! Your contributions help me focus more time on creating and sharing what I love." }),
      /* @__PURE__ */ jsxs("div", { className: "support-buttons section-block", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://www.patreon.com/JPCorwyn",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "patreon-btn",
            children: [
              /* @__PURE__ */ jsx(FaPatreon, { style: { marginRight: "8px" } }),
              "Support on Patreon"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://ko-fi.com/jpcorwyn",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "kofi-btn",
            children: [
              /* @__PURE__ */ jsx(SiKofi, { style: { marginRight: "8px" } }),
              "Tip via Ko-fi"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "full-line" }),
      /* @__PURE__ */ jsxs("div", { className: "merch-section section-block", children: [
        /* @__PURE__ */ jsx("h3", { children: "Official Merch" }),
        /* @__PURE__ */ jsx("p", { children: "Wear the world of Skolf. Check out exclusive shirts, posters, and more!" }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://jp-corwyn.creator-spring.com/?utm_medium=referral&utm_source=twitch_integration&utm_campaign=jp-corwyn",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "merch-btn",
            children: [
              /* @__PURE__ */ jsx(SiTeespring, { style: { marginRight: "8px" } }),
              "Visit My Teespring Store"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "full-line" }),
      /* @__PURE__ */ jsxs("div", { className: "music-promo section-block", children: [
        /* @__PURE__ */ jsx("h3", { children: "Listen on Spotify" }),
        /* @__PURE__ */ jsx("p", { children: "Stream my music on Spotify and follow me to stay updated on new releases and playlists." }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://open.spotify.com/artist/5mPO25ibQzW96LaS6DmufE",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "spotify-btn",
            children: [
              /* @__PURE__ */ jsx(SiSpotify, { style: { marginRight: "8px" } }),
              "Listen on Spotify"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "full-line" }),
      /* @__PURE__ */ jsx("div", { className: "join-newsletter section-block", children: /* @__PURE__ */ jsxs("p", { children: [
        "Stay connected.",
        " ",
        /* @__PURE__ */ jsx("a", { href: "/bio#contact", children: "Join the newsletter" }),
        " ",
        "for updates and behind-the-scenes exclusives."
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "full-line" }),
      /* @__PURE__ */ jsxs("div", { className: "discord-section section-block", children: [
        /* @__PURE__ */ jsx("h3", { children: "Join the Community on Discord" }),
        /* @__PURE__ */ jsx("p", { children: "Hang out with fans, ask questions, or chat about books and music. We’re waiting for you!" }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://discord.gg/HWSkZtydZr",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "discord-btn",
            children: [
              /* @__PURE__ */ jsx(FaDiscord, { style: { marginRight: "8px", fontSize: "1.2rem" } }),
              "Join Our Discord"
            ]
          }
        )
      ] })
    ] })
  ] });
}
function SupportMe() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "JP Corwyn | Support" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://jpcorwyn.com.com/current-page" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "JP Corwyn | Blind Indie Rock & Blind Indie Prose" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding. #BlindIndieRock #BlindIndieProse" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://jpcorwyn.com/src/assets/images/jpclogo.jpeg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://jpcorwyn.com/page-url" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "JP Corwyn | Blind Indie Rock & Blind Indie Prose" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Legally blind author and indie rock musician JP Corwyn dares you to enter The Cycle of Bones, a dark military fantasy horror with immersive worldbuilding. #BlindIndieRock #BlindIndieProse" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://jpcorwyn.com/src/assets/images/jpclogo.jpeg" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Support, {}),
    /* @__PURE__ */ jsx(BackToTopButton, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const ScrollToHash = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);
  return null;
};
function App() {
  return /* @__PURE__ */ jsxs("div", { className: "app", children: [
    /* @__PURE__ */ jsx(ScrollToHash, {}),
    /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(HomePage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/bio", element: /* @__PURE__ */ jsx(MainContent, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/books", element: /* @__PURE__ */ jsx(Books, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/buy", element: /* @__PURE__ */ jsx(BookPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/drums", element: /* @__PURE__ */ jsx(DrumsBookPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/eaters", element: /* @__PURE__ */ jsx(EatersBookPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/music", element: /* @__PURE__ */ jsx(Music, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/latest", element: /* @__PURE__ */ jsx(LatestNews, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/merch", element: /* @__PURE__ */ jsx(Merch, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/support", element: /* @__PURE__ */ jsx(SupportMe, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/publisher", element: /* @__PURE__ */ jsx(Publisher, {}) })
    ] })
  ] });
}
async function render(url) {
  const helmetContext = {};
  const appHtml = renderToString(
    /* @__PURE__ */ jsx(HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) }) })
  );
  const { helmet } = helmetContext;
  return {
    appHtml,
    tags: {
      title: helmet.title.toString(),
      meta: helmet.meta.toString(),
      link: helmet.link.toString(),
      script: helmet.script.toString(),
      style: helmet.style.toString()
    }
  };
}
export {
  render
};
