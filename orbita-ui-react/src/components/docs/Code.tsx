import type { IWithChildrenComponent } from "../common";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeProps extends IWithChildrenComponent {
  children: string;
  language: string;
}

export default function Code({ children, language, ...props }: CodeProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={{
        ...dracula,
        parent: { ...props.style },
        custom: {
          padding: "2rem",
          borderRadius: "4rem",
        },
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}
