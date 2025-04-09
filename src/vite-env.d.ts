/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg' {
  import React = require('react');

  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}
