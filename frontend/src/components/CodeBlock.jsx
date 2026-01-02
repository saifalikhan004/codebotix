import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/duotoneLight";

export default function CodeBlock({ code = "", language = "jsx", title }) {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-pink-200 bg-pink-50 shadow-sm">
      {title ? (
        <div className="flex items-center justify-between px-4 py-2 bg-pink-100 text-pink-900 border-b border-pink-200">
          <span className="text-sm font-semibold">{title}</span>
          <span className="text-xs">{language}</span>
        </div>
      ) : null}
      <div className="p-4">
        <Highlight {...defaultProps} code={code.trim()} language={language} theme={theme}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} bg-transparent text-sm leading-relaxed`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}
