export default function IconsPage() {
  return (
    <div className="prose max-w-4xl mx-auto px-4 py-8">
      <h1>Icons</h1>
      <p className="lead">
        Simple SVG icon components for common UI actions like menu toggles and
        close buttons.
      </p>

      <h2>Overview</h2>
      <p>
        The package exports two icon components: <code>BurgerIcon</code> (hamburger
        menu) and <code>XIcon</code> (close/cross). Both are simple SVG components
        that accept size and className props for customization.
      </p>

      <h2>Installation</h2>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { BurgerIcon, XIcon } from "@tecnologias-orbita/orbita-ui-react";`}</code></pre>

      <h2>BurgerIcon</h2>
      <p>
        A hamburger menu icon (three horizontal lines) commonly used for mobile
        navigation toggles.
      </p>

      <h3>Props</h3>
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
            <td className="p-3 font-mono">size</td>
            <td className="p-3 font-mono">number</td>
            <td className="p-3">24</td>
            <td className="p-3">Icon size in pixels (width and height)</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">className</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">—</td>
            <td className="p-3">Additional CSS classes</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">...props</td>
            <td className="p-3 font-mono">SVGSVGElement</td>
            <td className="p-3">—</td>
            <td className="p-3">All other SVG props</td>
          </tr>
        </tbody>
      </table>

      <h3>Default Styles</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"`}</code></pre>

      <h3>Usage</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { BurgerIcon } from "@tecnologias-orbita/orbita-ui-react";

export default function MenuButton() {
  return (
    <button className="p-2 rounded hover:bg-gray-100" aria-label="Open menu">
      <BurgerIcon size={24} className="text-gray-700" />
    </button>
  );
}`}</code></pre>

      <h2>XIcon</h2>
      <p>
        A close/cross icon (X shape) commonly used for closing modals, sidebars,
        and dismissing notifications.
      </p>

      <h3>Props</h3>
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
            <td className="p-3 font-mono">size</td>
            <td className="p-3 font-mono">number</td>
            <td className="p-3">16 (via size-4)</td>
            <td className="p-3">Icon size in pixels (width and height)</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">className</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">—</td>
            <td className="p-3">Additional CSS classes (merged with size-4)</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">...props</td>
            <td className="p-3 font-mono">SVGSVGElement</td>
            <td className="p-3">—</td>
            <td className="p-3">All other SVG props</td>
          </tr>
        </tbody>
      </table>

      <h3>Default Styles</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="size-4"`}</code></pre>

      <h3>Usage</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { XIcon } from "@tecnologias-orbita/orbita-ui-react";

export default function CloseButton() {
  return (
    <button className="p-2 rounded hover:bg-gray-100" aria-label="Close">
      <XIcon size={20} className="text-gray-500 hover:text-gray-700" />
    </button>
  );
}`}</code></pre>

      <h2>Usage Examples</h2>

      <h3>Sidebar Toggle</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { Sidebar, BurgerIcon, XIcon } from "@tecnologias-orbita/orbita-ui-react";
import { Btn } from "@tecnologias-orbita/orbita-ui-react";

export default function SidebarWithIcons() {
  return (
    <Sidebar.Wrapper className="h-screen">
      <Sidebar.Sidebar
        collapseMode="reduced"
        animated
        switchButton={(onCollapse) => (
          <Btn onClick={onCollapse} className="p-2" aria-label="Open sidebar">
            <BurgerIcon size={24} />
          </Btn>
        )}
        collapsedSwitchButton={(onCollapse) => (
          <Btn onClick={onCollapse} className="p-2" aria-label="Close sidebar">
            <XIcon size={24} />
          </Btn>
        )}
      >
        {(isCollapsed) => (
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <a href="/dashboard" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
                  <span className="w-5 h-5 bg-blue-500 rounded flex-shrink-0" />
                  {!isCollapsed && <span>Dashboard</span>}
                </a>
              </li>
            </ul>
          </nav>
        )}
      </Sidebar.Sidebar>
      <Sidebar.Main className="p-8">
        <h1>Main Content</h1>
      </Sidebar.Main>
    </Sidebar.Wrapper>
  );
}`}</code></pre>

      <h3>Modal Close Button</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { XIcon } from "@tecnologias-orbita/orbita-ui-react";
import { useState } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
      <div className="relative bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-1 rounded hover:bg-gray-100"
          aria-label="Close modal"
        >
          <XIcon size={20} className="text-gray-500" />
        </button>
        <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
        <p className="text-gray-600">Modal content goes here...</p>
      </div>
    </div>
  );
}`}</code></pre>

      <h3>Custom Styled Icons</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { BurgerIcon, XIcon } from "@tecnologias-orbita/orbita-ui-react";

export default function StyledIcons() {
  return (
    <div className="flex gap-8 items-center">
      {/* Large burger icon with custom color */}
      <BurgerIcon
        size={32}
        className="text-primary-600 hover:text-primary-700 cursor-pointer transition-colors"
      />

      {/* Small X icon with background */}
      <div className="p-2 bg-red-100 rounded-full">
        <XIcon
          size={16}
          className="text-red-600"
        />
      </div>

      {/* Animated burger to X transition */}
      <AnimatedIcon />
    </div>
  );
}

function AnimatedIcon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="p-2 rounded hover:bg-gray-100"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        <XIcon size={24} className="text-gray-700 transition-transform duration-200" />
      ) : (
        <BurgerIcon size={24} className="text-gray-700 transition-transform duration-200" />
      )}
    </button>
  );
}`}</code></pre>

      <h3>With Tailwind Classes</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { BurgerIcon, XIcon } from "@tecnologias-orbita/orbita-ui-react";

export default function TailwindStyledIcons() {
  return (
    <div className="flex gap-4 items-center">
      {/* Using Tailwind for sizing instead of size prop */}
      <BurgerIcon className="w-6 h-6 text-gray-800" />
      <BurgerIcon className="w-8 h-8 text-primary-500" />
      <BurgerIcon className="w-10 h-10 text-gray-400" />

      {/* XIcon with Tailwind sizing */}
      <XIcon className="w-5 h-5 text-gray-500" />
      <XIcon className="w-7 h-7 text-red-500" />
    </div>
  );
}`}</code></pre>

      <h2>TypeScript</h2>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { BurgerIcon, XIcon } from "@tecnologias-orbita/orbita-ui-react";

// Both components accept standard SVG props plus size and className
interface BurgerIconProps {
  size?: number;
  className?: string;
  // ... all SVGSVGElement props
}

interface XIconProps {
  size?: number;
  className?: string;
  // ... all SVGSVGElement props
}`}</code></pre>

      <h2>Accessibility</h2>
      <ul>
        <li>Icons are decorative by default - always wrap in a button with <code>aria-label</code></li>
        <li>Use <code>aria-hidden="true"</code> on the icon if the parent has accessible text</li>
        <li>Icons use <code>currentColor</code> for stroke, inheriting text color</li>
        <li>Focus styles should be applied to the interactive parent element</li>
      </ul>

      <h3>Accessible Icon Button Pattern</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { BurgerIcon } from "@tecnologias-orbita/orbita-ui-react";

function IconButton({ icon, label, onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
      {...props}
    >
      {icon}
    </button>
  );
}

// Usage
<IconButton
  icon={<BurgerIcon size={24} />}
  label="Open navigation menu"
  onClick={handleMenuOpen}
/>`}</code></pre>

      <h2>SVG Details</h2>

      <h3>BurgerIcon Path</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"`}</code></pre>

      <h3>XIcon Path</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`d="M6 18L18 6M6 6l12 12"`}</code></pre>

      <h2>Related Components</h2>
      <ul>
        <li><a href="/docs/orbita-ui-react/components/sidebar">Sidebar</a> - Uses BurgerIcon/XIcon for toggle</li>
        <li><a href="/docs/orbita-ui-react/components/navbar">Navbar</a> - Can use icons for mobile menu</li>
        <li><a href="/docs/orbita-ui-react/components/btn">Btn</a> - Button wrapper for icon actions</li>
      </ul>
    </div>
  );
}