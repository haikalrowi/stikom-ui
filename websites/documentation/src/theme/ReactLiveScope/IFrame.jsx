import React from "react";
import { renderToString } from "react-dom/server";

export default function IFrame({ children }) {
  const srcDoc = renderToString(
    <html>
      <head>
        <script src="/3.4.1" />
      </head>
      <body>
        <div style={{ padding: "1rem" }}>{children}</div>
      </body>
    </html>,
  );

  return (
    <iframe
      srcDoc={srcDoc}
      style={{
        all: "unset",
        width: "100%",
        borderRadius: "0.375rem",
        transition: "all .4s",
        height: 0,
      }}
      onLoad={(e) => {
        e.currentTarget.style.height = `${e.currentTarget.contentWindow.document.documentElement.scrollHeight}px`;
      }}
    />
  );
}
