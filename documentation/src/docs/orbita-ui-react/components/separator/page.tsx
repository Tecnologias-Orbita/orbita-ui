export default function SeparatorPage() {
  return (
    <div className="prose max-w-4xl mx-auto px-4 py-8">
      <h1>Separator</h1>
      <p className="lead">
        A simple horizontal divider component for separating content sections.
      </p>

      <h2>Overview</h2>
      <p>
        The <code>Separator</code> component renders a horizontal line (
        <code>{"<hr>"}</code> equivalent) using a <code>{"<div>"}</code> with
        Tailwind CSS classes. It's useful for visually separating sections of
        content, form fields, or list items.
      </p>

      <h2>Installation</h2>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Separator } from "@tecnologias-orbita/orbita-ui-react";`}</code>
      </pre>

      <h2>Props</h2>
      <p>
        The Separator component accepts all standard <code>HTMLDivElement</code>
        props plus the following:
      </p>

      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-3 text-left font-mono">Prop</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Default</th>
            <th className="p-3 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-3 font-mono">className</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">—</td>
            <td className="p-3">Additional CSS classes to apply</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">style</td>
            <td className="p-3 font-mono">React.CSSProperties</td>
            <td className="p-3">—</td>
            <td className="p-3">Inline styles to apply</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">...props</td>
            <td className="p-3 font-mono">HTMLDivElement props</td>
            <td className="p-3">—</td>
            <td className="p-3">All other div props (id, onClick, etc.)</td>
          </tr>
        </tbody>
      </table>

      <h2>Default Styles</h2>
      <p>The component applies these default Tailwind classes:</p>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`h-px w-full bg-slate-200`}</code>
      </pre>

      <h2>Usage Examples</h2>

      <h3>Basic Usage</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Separator } from "@tecnologias-orbita/orbita-ui-react";

export default function BasicExample() {
  return (
    <div className="space-y-4">
      <section>
        <h2>Section 1</h2>
        <p>Content for the first section...</p>
      </section>
      <Separator />
      <section>
        <h2>Section 2</h2>
        <p>Content for the second section...</p>
      </section>
    </div>
  );
}`}</code>
      </pre>

      <h3>With Custom Styling</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Separator } from "@tecnologias-orbita/orbita-ui-react";

export default function StyledExample() {
  return (
    <div className="space-y-4">
      <section>
        <h2>Section 1</h2>
      </section>
      {/* Thicker, colored separator */}
      <Separator className="h-2 bg-primary-500" />
      <section>
        <h2>Section 2</h2>
      </section>
      {/* Dashed separator */}
      <Separator className="border-t-2 border-dashed border-gray-300 bg-transparent" />
      <section>
        <h2>Section 3</h2>
      </section>
    </div>
  );
}`}</code>
      </pre>

      <h3>In Forms</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Separator } from "@tecnologias-orbita/orbita-ui-react";

export default function FormExample() {
  return (
    <form className="space-y-6 max-w-md">
      <fieldset>
        <legend className="text-lg font-medium mb-4">Personal Information</legend>
        <div className="space-y-4">
          <label className="block">
            <span className="block text-sm font-medium mb-1">Name</span>
            <input type="text" className="w-full px-3 py-2 border rounded-md" />
          </label>
          <label className="block">
            <span className="block text-sm font-medium mb-1">Email</span>
            <input type="email" className="w-full px-3 py-2 border rounded-md" />
          </label>
        </div>
      </fieldset>

      <Separator className="my-2" />

      <fieldset>
        <legend className="text-lg font-medium mb-4">Preferences</legend>
        <div className="space-y-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span>Subscribe to newsletter</span>
          </label>
        </div>
      </fieldset>
    </form>
  );
}`}</code>
      </pre>

      <h3>With Margin Utilities</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Separator } from "@tecnologias-orbita/orbita-ui-react";

export default function SpacedExample() {
  return (
    <div className="space-y-8">
      <div>
        <h3>Content Above</h3>
        <p>Some content before the separator.</p>
      </div>

      {/* Add vertical spacing around separator */}
      <Separator className="my-8" />

      <div>
        <h3>Content Below</h3>
        <p>Some content after the separator.</p>
      </div>
    </div>
  );
}`}</code>
      </pre>

      <h2>TypeScript</h2>
      <p>
        The component uses the <code>IComponent</code> interface from the
        package's common types:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import type { IComponent } from "@tecnologias-orbita/orbita-ui-react";

// The component signature
function Separator({ className, style, ...props }: IComponent): JSX.Element`}</code>
      </pre>

      <h2>Accessibility</h2>
      <ul>
        <li>
          The component renders a <code>{"<div>"}</code> with{" "}
          <code>role="separator"</code> implicitly via the horizontal line
          styling
        </li>
        <li>
          For semantic HTML, consider using <code>{"<hr>"}</code> if you need
          explicit separator semantics
        </li>
        <li>
          The component forwards all props, so you can add{" "}
          <code>aria-orientation="horizontal"</code> if needed
        </li>
      </ul>

      <h2>Related Components</h2>
      <ul>
        <li>
          <a href="/docs/orbita-ui-react/components/btn">Btn</a> - Button
          component
        </li>
        <li>
          <a href="/docs/orbita-ui-react/components/navbar">Navbar</a> -
          Navigation component
        </li>
      </ul>
    </div>
  );
}
