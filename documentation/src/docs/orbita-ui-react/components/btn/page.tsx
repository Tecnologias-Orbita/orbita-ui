export default function BtnPage() {
  return (
    <div className="prose max-w-4xl mx-auto px-4 py-8">
      <h1>Btn</h1>
      <p className="lead">
        A versatile button component that supports both button and link
        variants, loading states, and full customization.
      </p>

      <h2>Overview</h2>
      <p>
        The <code>Btn</code> component is a flexible button that can render as
        either a <code>{"<button>"}</code> or an <code>{"<a>"}</code> element.
        It includes built-in loading and disabled states, and accepts all
        standard button/anchor attributes.
      </p>

      <h2>Installation</h2>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Btn } from "@tecnologias-orbita/orbita-ui-react";`}</code>
      </pre>

      <h2>Props</h2>
      <p>
        The Btn component accepts the following props (extends
        <code>{"React.ButtonHTMLAttributes<HTMLButtonElement>"}</code> and
        <code>IWithChildrenComponent</code>):
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
            <td className="p-3 font-mono">link</td>
            <td className="p-3 font-mono">boolean</td>
            <td className="p-3">No</td>
            <td className="p-3">Renders as anchor tag instead of button</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">href</td>
            <td className="p-3 font-mono">string | () =&gt; string</td>
            <td className="p-3">Yes (if link=true)</td>
            <td className="p-3">
              Link destination (string or function returning string)
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">target</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">No</td>
            <td className="p-3">Anchor target attribute (e.g., "_blank")</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">linkComponent</td>
            <td className="p-3 font-mono">React.FC</td>
            <td className="p-3">No</td>
            <td className="p-3">Custom link component (e.g., Next.js Link)</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">onClick</td>
            <td className="p-3 font-mono">() =&gt; void</td>
            <td className="p-3">Yes (if link=false)</td>
            <td className="p-3">Click handler for button variant</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">disabled</td>
            <td className="p-3 font-mono">boolean</td>
            <td className="p-3">No</td>
            <td className="p-3">Disables the button</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">loading</td>
            <td className="p-3 font-mono">boolean</td>
            <td className="p-3">No</td>
            <td className="p-3">
              Shows loading state (disables + cursor-wait)
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">children</td>
            <td className="p-3 font-mono">React.ReactNode</td>
            <td className="p-3">Yes</td>
            <td className="p-3">Button content</td>
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
            <td className="p-3">Inline styles</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">...props</td>
            <td className="p-3 font-mono">ButtonHTMLAttributes</td>
            <td className="p-3">No</td>
            <td className="p-3">All other button/anchor props</td>
          </tr>
        </tbody>
      </table>

      <h2>Default Styles</h2>
      <p>The component applies these default Tailwind classes:</p>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`flex gap-2 items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-primary-500 active:scale-95 hover:bg-gray-100 transition duration-100 ease-in-out cursor-pointer`}</code>
      </pre>

      <h3>State Modifiers</h3>
      <ul>
        <li>
          <code>link</code>: adds <code>block</code>
        </li>
        <li>
          <code>disabled || loading</code>: adds{" "}
          <code>pointer-events-none opacity-50</code>
        </li>
        <li>
          <code>loading</code>: adds <code>cursor-wait</code>
        </li>
      </ul>

      <h2>Usage Examples</h2>

      <h3>Basic Button</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Btn } from "@tecnologias-orbita/orbita-ui-react";

export default function BasicButton() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <Btn onClick={handleClick}>
      Click Me
    </Btn>
  );
}`}</code>
      </pre>

      <h3>Link Button</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Btn } from "@tecnologias-orbita/orbita-ui-react";

export default function LinkButton() {
  return (
    <Btn link href="/about" target="_blank">
      Go to About Page
    </Btn>
  );
}`}</code>
      </pre>

      <h3>Dynamic Link</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Btn } from "@tecnologias-orbita/orbita-ui-react";

export default function DynamicLink() {
  const getDashboardUrl = () => {
    const user = getCurrentUser();
    return user ? \`/dashboard/\${user.id}\` : "/login";
  };

  return (
    <Btn link href={getDashboardUrl}>
      Go to Dashboard
    </Btn>
  );
}`}</code>
      </pre>

      <h3>With Custom Link Component (Next.js)</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Btn } from "@tecnologias-orbita/orbita-ui-react";
import Link from "next/link";

export default function NextLinkButton() {
  return (
    <Btn
      link
      href="/dashboard"
      linkComponent={Link}
    >
      Dashboard
    </Btn>
  );
}`}</code>
      </pre>

      <h3>Loading State</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Btn } from "@tecnologias-orbita/orbita-ui-react";
import { useState } from "react";

export default function LoadingButton() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await submitForm();
    setLoading(false);
  };

  return (
    <Btn onClick={handleSubmit} loading={loading}>
      {loading ? "Submitting..." : "Submit"}
    </Btn>
  );
}`}</code>
      </pre>

      <h3>Disabled State</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Btn } from "@tecnologias-orbita/orbita-ui-react";

export default function DisabledButton() {
  return (
    <div className="flex gap-4">
      <Btn onClick={() => {}} disabled>
        Disabled Button
      </Btn>
      <Btn link href="/unavailable" disabled>
        Disabled Link
      </Btn>
    </div>
  );
}`}</code>
      </pre>

      <h3>Custom Styling</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Btn } from "@tecnologias-orbita/orbita-ui-react";

export default function StyledButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Primary variant */}
      <Btn
        onClick={() => {}}
        className="bg-primary-600 text-white border-primary-600 hover:bg-primary-700"
      >
        Primary
      </Btn>

      {/* Secondary variant */}
      <Btn
        onClick={() => {}}
        className="bg-gray-100 text-gray-900 border-gray-300 hover:bg-gray-200"
      >
        Secondary
      </Btn>

      {/* Danger variant */}
      <Btn
        onClick={() => {}}
        className="bg-red-600 text-white border-red-600 hover:bg-red-700"
      >
        Danger
      </Btn>

      {/* Outline variant */}
      <Btn
        onClick={() => {}}
        className="bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-50"
      >
        Outline
      </Btn>

      {/* Large size */}
      <Btn
        onClick={() => {}}
        className="px-8 py-4 text-lg"
      >
        Large Button
      </Btn>

      {/* Small size */}
      <Btn
        onClick={() => {}}
        className="px-3 py-1.5 text-sm"
      >
        Small Button
      </Btn>

      {/* With icon */}
      <Btn onClick={() => {}} className="gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Item
      </Btn>
    </div>
  );
}`}</code>
      </pre>

      <h3>Form Submit Button</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Btn } from "@tecnologias-orbita/orbita-ui-react";
import { useState } from "react";

export default function FormExample() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000)); // Simulate API call
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <Btn type="submit" loading={loading} className="w-full">
        {loading ? "Signing in..." : "Sign In"}
      </Btn>
    </form>
  );
}`}</code>
      </pre>

      <h2>TypeScript</h2>
      <p>
        The component is fully typed with the <code>BtnProps</code> interface:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import type { BtnProps } from "@tecnologias-orbita/orbita-ui-react";

// Extending Btn props
interface CustomBtnProps extends BtnProps {
  variant?: "primary" | "secondary" | "danger";
}

const CustomBtn: React.FC<CustomBtnProps> = ({
  variant = "primary",
  className,
  ...props
}) => {
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <Btn
      className={variantStyles[variant] + " " + (className || "")}
      {...props}
    />
  );
};`}</code>
      </pre>

      <h2>Behavior Notes</h2>
      <ul>
        <li>
          <strong>Validation</strong>: Throws error if <code>link=true</code>{" "}
          without <code>href</code>, or if <code>link=false</code> without{" "}
          <code>onClick</code>
        </li>
        <li>
          <strong>Loading state</strong>: Automatically disables the button and
          shows wait cursor
        </li>
        <li>
          <strong>Active state</strong>: Scales to 95% on click/tap (
          <code>active:scale-95</code>)
        </li>
        <li>
          <strong>Transition</strong>: 100ms ease-in-out for hover/active states
        </li>
        <li>
          <strong>Focus</strong>: Uses browser default focus ring (customize
          with <code>focus-visible:ring</code>)
        </li>
      </ul>

      <h2>Accessibility</h2>
      <ul>
        <li>
          Uses native <code>{"<button>"}</code> or <code>{"<a>"}</code> elements
        </li>
        <li>
          Loading state adds <code>aria-busy="true"</code> implicitly via
          disabled attribute
        </li>
        <li>Disabled state properly prevents interaction</li>
        <li>
          Supports keyboard navigation (Enter/Space for buttons, Enter for
          links)
        </li>
        <li>
          Custom <code>linkComponent</code> should maintain accessibility
        </li>
      </ul>

      <h2>Related Components</h2>
      <ul>
        <li>
          <a href="/docs/orbita-ui-react/components/separator">Separator</a> -
          Divider component
        </li>
        <li>
          <a href="/docs/orbita-ui-react/components/navbar">Navbar</a> -
          Navigation with buttons
        </li>
      </ul>
    </div>
  );
}
