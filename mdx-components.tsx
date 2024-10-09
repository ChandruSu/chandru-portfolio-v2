import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="mdx-h py-2 text-3xl font-medium">{children}</h1>,
    h2: ({ children }) => <h2 className="mdx-h py-2 text-2xl font-medium">{children}</h2>,
    h3: ({ children }) => <h3 className="mdx-h py-2 text-xl font-medium">{children}</h3>,
    h4: ({ children }) => <h4 className="mdx-h py-2 text-lg font-medium">{children}</h4>,
    h5: ({ children }) => <h5 className="mdx-h text-md py-1 font-medium">{children}</h5>,
    p: ({ children }) => (
      <p className="py-1 font-light max-md:text-sm md:text-justify">{children}</p>
    ),
    a: ({ children, ...properties }) => (
      <a className="link-line relative" {...properties}>
        <span>{children}</span>
      </a>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-10 font-light max-md:text-sm">{children}</ol>
    ),
    ul: ({ children }) => <ul className="list-disc pl-10 font-light max-md:text-sm">{children}</ul>,
    code: ({ className, ...properties }) => {
      const match = /language-(\w+)/.exec(className || "");
      return match ? (
        <SyntaxHighlighter
          style={oneDark}
          language={match[1]}
          showLineNumbers
          PreTag="div"
          {...(properties as any)}
        />
      ) : (
        <code className={className} {...properties} />
      );
    },
    blockquote: ({ children, ...properties }) => (
      <blockquote className="text-sm text-grey" {...properties}>
        {children}
      </blockquote>
    ),
    ...components,
  };
}
