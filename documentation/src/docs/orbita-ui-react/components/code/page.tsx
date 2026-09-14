import { Code } from "@tecnologias-orbita/orbita-ui-react";

export default function CodePage() {
  return (
    <article>
      <h2>Overview</h2>
      <p>
        The <code>Code</code> component provides a simple way to display
        formatted code snippets in your documentation or application. It uses
        Prism.js via react-syntax-highlighter with the Dracula theme by default,
        and supports all languages supported by Prism.
      </p>

      <h2>Installation</h2>
      <Code language="tsx">
        {`import { Code } from "@tecnologias-orbita/orbita-ui-react";`}
      </Code>

      <h2>Props</h2>
      <p>
        The Code component accepts the following props (extends
        <code>IWithChildrenComponent</code> which provides{" "}
        <code>className</code>
        and <code>style</code>):
      </p>

      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-3 text-left font-mono">Prop</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Required</th>
            <th className="p-3 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-3 font-mono">children</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">Yes</td>
            <td className="p-3">The code content to highlight</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">language</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">Yes</td>
            <td className="p-3">
              Programming language for syntax highlighting (e.g., "typescript",
              "javascript", "css", "html", "json", "bash")
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">className</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">No</td>
            <td className="p-3">Additional CSS classes</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">style</td>
            <td className="p-3 font-mono">React.CSSProperties</td>
            <td className="p-3">No</td>
            <td className="p-3">
              Inline styles (merged with default padding and border-radius)
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Usage Examples</h2>

      <h3>Basic Usage</h3>
      <Code language="tsx">
        {`import { Code } from "@tecnologias-orbita/orbita-ui-react";

export default function BasicCodeExample() {
  return (
    <Code language="tsx">
      {\`const greeting = (name: string) => {
			return \\\`Hello, \${name}!\\\`;
		};

		console.log(greeting("World"));\`}
    </Code>
  );
}`}
      </Code>

      <h3>Different Languages</h3>
      <Code language="tsx">
        {`import { Code } from "@tecnologias-orbita/orbita-ui-react";

export default function LanguageExamples() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2">TypeScript</h3>
        <Code language="tsx">
          {\`interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
};\`}
        </Code>
      </div>

      <div>
        <h3 className="mb-2">JavaScript</h3>
        <Code language="javascript">
          {\`function fetchUser(id) {
  return fetch(\`/api/users/\${id}\`)
    .then(res => res.json())
    .then(data => console.log(data));
}\`}
        </Code>
      </div>

      <div>
        <h3 className="mb-2">CSS</h3>
        <Code language="css">
          {\`.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
}\`}
        </Code>
      </div>

      <div>
        <h3 className="mb-2">JSON</h3>
        <Code language="json">
          {\`{
  "name": "orbita-ui-react",
  "version": "1.0.0",
  "dependencies": {
    "react": "^19.0.0",
    "tailwindcss": "^4.0.0"
  }
}\`}
        </Code>
      </div>

      <div>
        <h3 className="mb-2">Bash</h3>
        <Code language="bash">
          {\`# Install dependencies
npm install @tecnologias-orbita/orbita-ui-react

# Build the project
npm run build

# Run development server
npm run dev\`}
        </Code>
      </div>
    </div>
  );
}`}
      </Code>

      <h3>With Custom Styling</h3>
      <Code language="tsx">
        {`import { Code } from "@tecnologias-orbita/orbita-ui-react";

export default function StyledCodeExample() {
  return (
    <div className="space-y-4">
      <Code
        language="tsx"
        className="border border-gray-200"
        style={{ borderRadius: "8px", fontSize: "0.875rem" }}
      >
        {\`const config = {
  theme: "dark",
  fontSize: 14,
  lineHeight: 1.5,
};\`}
      </Code>

      <Code
        language="tsx"
        style={{
          backgroundColor: "#1e1e1e",
          color: "#d4d4d4",
          borderRadius: "8px",
        }}
      >
        {\`// Custom styled code block
const theme = "dark";\`}
      </Code>
    </div>
  );
}`}
      </Code>

      <h3>Inline Code in Documentation</h3>
      <Code language="tsx">
        {`import { Code } from "@tecnologias-orbita/orbita-ui-react";

export default function DocumentationPage() {
  return (
    <article className="prose max-w-3xl mx-auto p-8">
      <h1>Getting Started</h1>
      <p>
        First, install the package using your preferred package manager:
      </p>
      <Code language="bash">
        {\`npm install @tecnologias-orbita/orbita-ui-react\`}
      </Code>
      <p>
        Then import the components you need:
      </p>
      <Code language="tsx">
        {\`import { Btn, Slider, Code } from "@tecnologias-orbita/orbita-ui-react";\`}
      </Code>
    </article>
  );
}`}
      </Code>

      <h2>Supported Languages</h2>
      <p>
        The component supports all languages supported by Prism.js. Common
        languages include:
      </p>
      <ul>
        <li>
          <code>typescript</code>, <code>tsx</code>
        </li>
        <li>
          <code>javascript</code>, <code>jsx</code>
        </li>
        <li>
          <code>html</code>, <code>xml</code>
        </li>
        <li>
          <code>css</code>, <code>scss</code>, <code>less</code>
        </li>
        <li>
          <code>json</code>
        </li>
        <li>
          <code>bash</code>, <code>shell</code>, <code>sh</code>
        </li>
        <li>
          <code>python</code>
        </li>
        <li>
          <code>rust</code>
        </li>
        <li>
          <code>go</code>
        </li>
        <li>
          <code>java</code>
        </li>
        <li>
          <code>csharp</code>, <code>cs</code>
        </li>
        <li>
          <code>php</code>
        </li>
        <li>
          <code>ruby</code>
        </li>
        <li>
          <code>swift</code>
        </li>
        <li>
          <code>kotlin</code>
        </li>
        <li>
          <code>sql</code>
        </li>
        <li>
          <code>markdown</code>, <code>md</code>
        </li>
        <li>
          <code>yaml</code>, <code>yml</code>
        </li>
        <li>
          <code>dockerfile</code>, <code>docker</code>
        </li>
        <li>
          <code>graphql</code>
        </li>
        <li>
          <code>regex</code>
        </li>
      </ul>
      <p>
        For a complete list, refer to the
        <a
          href="https://prismjs.com/#supported-languages"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prism.js supported languages
        </a>
        .
      </p>

      <h2>TypeScript</h2>
      <p>
        The component is fully typed with the <code>CodeProps</code> interface:
      </p>
      <Code language="tsx">
        {`import type { CodeProps } from "@tecnologias-orbita/orbita-ui-react"

interface CustomCodeProps extends CodeProps {
  showLineNumbers?: boolean;
  filename?: string;
}

const CustomCode: React.FC<CustomCodeProps> = ({
  showLineNumbers = false,
  filename,
  children,
  language,
  ...props
}) => {
  return (
    <div className="relative">
      {filename && (
        <div className="px-4 py-2 bg-gray-100 text-sm font-mono border-b">
          {filename}
        </div>
      )}
      <Code
        language={language}
        className={showLineNumbers ? "line-numbers" : ""}
        {...props}
      >
        {children}
      </Code>
    </div>
  );
};

`}
      </Code>
      <h2>Default Styles</h2>
      <p>The component applies these default styles:</p>
      <ul>
        <li>Dracula theme (dark theme with syntax highlighting)</li>
        <li>Padding: 2rem</li>
        <li>Border radius: 4rem (64px)</li>
        <li>Font family: Inherits from parent (typically monospace)</li>
      </ul>

      <h2>Behavior Notes</h2>
      <ul>
        <li>
          <strong>Children must be a string</strong>: The component expects the
          code content as a string child, not JSX elements.
        </li>
        <li>
          <strong>Language detection</strong>: The <code>language</code> prop is
          required and maps directly to Prism.js language aliases.
        </li>
        <li>
          <strong>Style merging</strong>: The <code>style</code> prop is merged
          with the default styles (padding and border-radius). Custom styles
          will override defaults.
        </li>
        <li>
          <strong>No line numbers by default</strong>: Line numbers are not
          included by default. You can add them via custom CSS or by extending
          the component.
        </li>
      </ul>

      <h2>Accessibility</h2>
      <ul>
        <li>
          Uses <code>{"<pre>"}</code> and <code>{"<code>"}</code> semantic
          elements
        </li>
        <li>High contrast colors in Dracula theme meet WCAG AA standards</li>
        <li>Code content is selectable and copyable</li>
        <li>Screen readers can access the code content</li>
      </ul>
    </article>
  );
}
