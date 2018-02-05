import * as React from 'react';
import { afterMethod } from "kaop-ts";
import decamelize from "decamelize";
import scope from "scope-css";

export const stylesheet = (styleContent) =>
afterMethod((meta) => {

  // create vnode stylesheet only once
  if(!meta.scope.__stylesheetVNode){
    meta.scope.__stylesheetTagName = decamelize(meta.target.constructor.name, "-");

    // remove all spaces, eols
    styleContent = styleContent.replace(/(\r\n\s|\n|\r)/gm, "");

    // prefix all selectors to make stylesheet 'scoped' using scope-css package
    styleContent = scope(styleContent, meta.scope.__stylesheetTagName);

    // save a reference of the stylesheet within the class instance
    meta.scope.__stylesheetVNode = React.createElement("style", { key: "scoped" }, styleContent);
  }

  meta.result.props.key = "component";
  const fakeNode = React.createElement(meta.result.type, meta.result.props, meta.result.props.children);

  // wrap rendered vnode with a parent vnode
  meta.result = React.createElement(
    meta.scope.__stylesheetTagName, null,
    [ fakeNode, meta.scope.__stylesheetVNode ]
  );

});
