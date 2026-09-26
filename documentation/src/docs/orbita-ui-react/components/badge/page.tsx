import { Badge } from "@tecnologias-orbita/orbita-ui-react";

export default function BadgePage() {
  return (
    <div className="prose max-w-4xl mx-auto px-4 py-8">
      <h1>Badge</h1>
      <p className="lead">
        A small inline label for status indicators, counts, and tags.
      </p>

      <h2>Overview</h2>
      <p>
        The <code>Badge</code> component renders a compact inline label used for
        short, non-interactive text such as statuses, counters, and categories.
        Any <code>className</code> you pass is merged with the defaults via{" "}
        <code>twMerge</code>, so individual utilities can be overridden without
        fighting specificity.
      </p>

      <h2>Installation</h2>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Badge } from "@tecnologias-orbita/orbita-ui-react";`}</code>
      </pre>

      <h2>Live Example</h2>
      <p>
        The default badge, followed by status variants that supply their own
        colors:
      </p>
      <div className="not-prose my-6 flex flex-wrap items-center gap-3">
        <Badge>Default</Badge>
        <Badge className="bg-green-100 text-green-800 border-green-600">
          Active
        </Badge>
        <Badge className="bg-yellow-100 text-yellow-800 border-yellow-600">
          Pending
        </Badge>
        <Badge className="bg-red-100 text-red-800 border-red-600">
          Failed
        </Badge>
        <Badge className="rounded-full">12</Badge>
      </div>

      <h2>Props</h2>
      <p>
        The Badge component accepts the following props (extends{" "}
        <code>IWithChildrenComponent</code>, which provides{" "}
        <code>className</code> and <code>style</code>):
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
            <td className="p-3 font-mono">React.ReactNode</td>
            <td className="p-3">Yes</td>
            <td className="p-3">Badge content</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">className</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">No</td>
            <td className="p-3">
              Additional CSS classes, merged with the defaults
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">style</td>
            <td className="p-3 font-mono">React.CSSProperties</td>
            <td className="p-3">No</td>
            <td className="p-3">Inline styles</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">...props</td>
            <td className="p-3 font-mono">span attributes</td>
            <td className="p-3">No</td>
            <td className="p-3">
              All remaining props forwarded to the <code>{"<span>"}</code>{" "}
              element (id, title, data-*, etc.)
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Default Styles</h2>
      <p>The component applies these default Tailwind classes:</p>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`py-1 px-2 rounded-md bg-black/10 border border-black`}</code>
      </pre>
      <p>
        The defaults are deliberately neutral so surrounding text color shows
        through. Supply your own colors via <code>className</code>. Classes are
        merged with <code>twMerge</code>, so a conflicting utility you pass
        replaces the default rather than being appended.
      </p>

      <h2>Usage Examples</h2>

      <h3>Basic Usage</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Badge } from "@tecnologias-orbita/orbita-ui-react";

export default function BasicBadge() {
  return <Badge>New</Badge>;
}`}</code>
      </pre>

      <h3>Status Badges</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Badge } from "@tecnologias-orbita/orbita-ui-react";

export default function StatusBadges() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge className="bg-green-100 text-green-800 border-green-600">
        Active
      </Badge>
      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-600">
        Pending
      </Badge>
      <Badge className="bg-red-100 text-red-800 border-red-600">
        Failed
      </Badge>
      <Badge className="bg-gray-100 text-gray-700 border-gray-500">
        Archived
      </Badge>
    </div>
  );
}`}</code>
      </pre>

      <h3>Count Badges</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Badge } from "@tecnologias-orbita/orbita-ui-react";

export default function CountBadge() {
  return (
    <div className="flex items-center gap-2">
      <span>Inbox</span>
      <Badge className="rounded-full">12</Badge>
    </div>
  );
}`}</code>
      </pre>

      <h3>Overriding Defaults</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Badge } from "@tecnologias-orbita/orbita-ui-react";

export default function CustomBadge() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* py-1 px-2 are replaced by py-3 px-6 */}
      <Badge className="py-3 px-6 text-lg">Large</Badge>

      {/* rounded-md and the border are both replaced */}
      <Badge className="rounded-full border-none bg-transparent">
        Plain
      </Badge>
    </div>
  );
}`}</code>
      </pre>

      <h3>Next to Other Content</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Badge } from "@tecnologias-orbita/orbita-ui-react";

export default function BadgeWithText() {
  return (
    <p className="flex items-center gap-2">
      <span>orbita-ui-react</span>
      <Badge className="bg-blue-100 text-blue-800 border-blue-600">
        v0.3.4
      </Badge>
    </p>
  );
}`}</code>
      </pre>

      <h2>TypeScript</h2>
      <p>
        The component is typed with the <code>IWithChildrenComponent</code>{" "}
        interface from the package's common types:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import type { IWithChildrenComponent } from "@tecnologias-orbita/orbita-ui-react";

// The component signature
function Badge({ children, className, style, ...props }: IWithChildrenComponent): JSX.Element`}</code>
      </pre>

      <h2>Behavior Notes</h2>
      <ul>
        <li>
          <strong>Presentational only</strong>: the badge renders a{" "}
          <code>{"<span>"}</code> and carries no interactive or ARIA role
          behavior, so it should not be used on its own to convey state to
          assistive technology.
        </li>
        <li>
          <strong>Class merging</strong>: <code>className</code> is merged with{" "}
          <code>twMerge</code>, so conflicting utilities replace the defaults
          instead of stacking.
        </li>
        <li>
          <strong>Prop spread</strong>: all remaining props are forwarded to the
          underlying <code>{"<span>"}</code> element.
        </li>
        <li>
          <strong>Fixed aria attributes</strong>: <code>aria-label="badge"</code>{" "}
          and <code>aria-roledescription="badge"</code> are set before the prop
          spread, so passing your own values overrides them.
        </li>
      </ul>

      <h2>Accessibility</h2>
      <ul>
        <li>
          The component defaults to{" "}
          <code>aria-label="badge"</code> and{" "}
          <code>aria-roledescription="badge"</code> on the{" "}
          <code>{"<span>"}</code> element
        </li>
        <li>
          Because <code>aria-roledescription</code> has no matching role, a bare
          badge may be announced as an unlabelled group — pass a descriptive{" "}
          <code>aria-label</code> (or omit the default one) when the badge text
          alone is not meaningful out of context
        </li>
        <li>
          Do not rely on color alone to convey status; pair the color with
          text, as in the status example above
        </li>
      </ul>

      <h2>Related Components</h2>
      <ul>
        <li>
          <a href="/docs/orbita-ui-react/components/btn">Btn</a> - Button
          component for interactive chips
        </li>
        <li>
          <a href="/docs/orbita-ui-react/components/separator">Separator</a> -
          Divider component
        </li>
      </ul>
    </div>
  );
}
