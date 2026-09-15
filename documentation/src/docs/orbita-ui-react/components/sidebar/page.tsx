export default function SidebarPage() {
  return (
    <div className="prose max-w-4xl mx-auto px-4 py-8">
      <h1>Sidebar</h1>
      <p className="lead">
        A collapsible sidebar component with animation support, multiple
        collapse modes, and flexible content rendering.
      </p>

      <h2>Overview</h2>
      <p>
        The <code>Sidebar</code> component is exported as an object with three
        sub-components: <code>Wrapper</code>, <code>Main</code>, and
        <code>Sidebar</code>. It provides a complete layout solution with a
        collapsible side panel that supports three collapse modes and smooth
        animations.
      </p>

      <h2>Installation</h2>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Sidebar } from "@tecnologias-orbita/orbita-ui-react";`}</code>
      </pre>

      <h2>Sub-components</h2>
      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-3 text-left font-mono">Component</th>
            <th className="p-3 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-3 font-mono">Sidebar.Wrapper</td>
            <td className="p-3">
              Flex container for the entire layout (sidebar + main)
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">Sidebar.Main</td>
            <td className="p-3">Main content area (flex-1)</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">Sidebar.Sidebar</td>
            <td className="p-3">
              Collapsible sidebar panel with toggle button
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Sidebar.Wrapper Props</h2>
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
            <td className="p-3 font-mono">children</td>
            <td className="p-3 font-mono">React.ReactNode</td>
            <td className="p-3">Required</td>
            <td className="p-3">Sidebar and Main components</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">className</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">—</td>
            <td className="p-3">Additional CSS classes</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">...props</td>
            <td className="p-3 font-mono">HTMLDivElement</td>
            <td className="p-3">—</td>
            <td className="p-3">All other div props</td>
          </tr>
        </tbody>
      </table>

      <h3>Default Styles</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`flex w-full h-full relative`}</code>
      </pre>

      <h2>Sidebar.Main Props</h2>
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
            <td className="p-3 font-mono">children</td>
            <td className="p-3 font-mono">React.ReactNode</td>
            <td className="p-3">Required</td>
            <td className="p-3">Main content</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">className</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">—</td>
            <td className="p-3">Additional CSS classes</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">...props</td>
            <td className="p-3 font-mono">HTMLMainElement</td>
            <td className="p-3">—</td>
            <td className="p-3">All other main props</td>
          </tr>
        </tbody>
      </table>

      <h3>Default Styles</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`flex-1 relative`}</code>
      </pre>

      <h2>Sidebar.Sidebar Props</h2>
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
            <td className="p-3 font-mono">children</td>
            <td className="p-3 font-mono">
              ReactNode \| (isCollapsed: boolean) =&gt; ReactNode
            </td>
            <td className="p-3">Required</td>
            <td className="p-3">Sidebar content or render prop function</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">side</td>
            <td className="p-3 font-mono">"left" \| "right"</td>
            <td className="p-3">"left"</td>
            <td className="p-3">Sidebar position</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">collapseMode</td>
            <td className="p-3 font-mono">"disabled" \| "reduced" \| "full"</td>
            <td className="p-3">"disabled"</td>
            <td className="p-3">Collapse behavior mode</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">animated</td>
            <td className="p-3 font-mono">boolean</td>
            <td className="p-3">false</td>
            <td className="p-3">Enable width transition animation</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">switchButton</td>
            <td className="p-3 font-mono">(onCollapse) =&gt; ReactNode</td>
            <td className="p-3">—</td>
            <td className="p-3">Custom expand button (when collapsed)</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">collapsedSwitchButton</td>
            <td className="p-3 font-mono">(onCollapse) =&gt; ReactNode</td>
            <td className="p-3">—</td>
            <td className="p-3">Custom collapse button (when expanded)</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">className</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">—</td>
            <td className="p-3">Additional CSS classes</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">...props</td>
            <td className="p-3 font-mono">HTMLAsideElement</td>
            <td className="p-3">—</td>
            <td className="p-3">All other aside props</td>
          </tr>
        </tbody>
      </table>

      <h3>Collapse Modes</h3>
      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-3 text-left font-mono">Mode</th>
            <th className="p-3 text-left">Width (Expanded)</th>
            <th className="p-3 text-left">Width (Collapsed)</th>
            <th className="p-3 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-3 font-mono">disabled</td>
            <td className="p-3">w-xs (320px)</td>
            <td className="p-3">N/A</td>
            <td className="p-3">No collapse functionality</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">reduced</td>
            <td className="p-3">w-xs (320px)</td>
            <td className="p-3">w-20 (80px)</td>
            <td className="p-3">Collapses to icon-only width</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">full</td>
            <td className="p-3">w-xs (320px)</td>
            <td className="p-3">w-0 (hidden)</td>
            <td className="p-3">Collapses completely hidden</td>
          </tr>
        </tbody>
      </table>

      <h3>Default Styles (Expanded)</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`flex flex-col flex-wrap bg-white relative w-xs overflow-auto border-r border-r-slate-200`}</code>
      </pre>

      <h2>Usage Examples</h2>

      <h3>Basic Sidebar (No Collapse)</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Sidebar } from "@tecnologias-orbita/orbita-ui-react";

export default function BasicSidebar() {
  return (
    <Sidebar.Wrapper className="h-screen">
      <Sidebar.Sidebar collapseMode="disabled">
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a href="/dashboard" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
                <span className="w-5 h-5 bg-gray-200 rounded" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/analytics" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
                <span className="w-5 h-5 bg-gray-200 rounded" />
                <span>Analytics</span>
              </a>
            </li>
            <li>
              <a href="/settings" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
                <span className="w-5 h-5 bg-gray-200 rounded" />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </Sidebar.Sidebar>
      <Sidebar.Main className="p-8">
        <h1>Main Content Area</h1>
        <p>Your page content goes here...</p>
      </Sidebar.Main>
    </Sidebar.Wrapper>
  );
}`}</code>
      </pre>

      <h3>Reduced Collapse Mode (Icon Only)</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Sidebar } from "@tecnologias-orbita/orbita-ui-react";

export default function ReducedSidebar() {
  return (
    <Sidebar.Wrapper className="h-screen">
      <Sidebar.Sidebar
        collapseMode="reduced"
        animated
      >
        {(isCollapsed) => (
          <nav className="p-4 h-full flex flex-col">
            <ul className="space-y-2 flex-1">
              <li>
                <a href="/dashboard" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
                  <span className="w-5 h-5 bg-blue-500 rounded flex-shrink-0" />
                  {!isCollapsed && <span>Dashboard</span>}
                </a>
              </li>
              <li>
                <a href="/analytics" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
                  <span className="w-5 h-5 bg-green-500 rounded flex-shrink-0" />
                  {!isCollapsed && <span>Analytics</span>}
                </a>
              </li>
              <li>
                <a href="/settings" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
                  <span className="w-5 h-5 bg-gray-500 rounded flex-shrink-0" />
                  {!isCollapsed && <span>Settings</span>}
                </a>
              </li>
            </ul>
            <div className="pt-4 border-t">
              <a href="/profile" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
                <span className="w-5 h-5 bg-purple-500 rounded flex-shrink-0" />
                {!isCollapsed && <span>Profile</span>}
              </a>
            </div>
          </nav>
        )}
      </Sidebar.Sidebar>
      <Sidebar.Main className="p-8">
        <h1>Main Content</h1>
      </Sidebar.Main>
    </Sidebar.Wrapper>
  );
}`}</code>
      </pre>

      <h3>Full Collapse Mode (Hidden)</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Sidebar } from "@tecnologias-orbita/orbita-ui-react";

export default function FullCollapseSidebar() {
  return (
    <Sidebar.Wrapper className="h-screen">
      <Sidebar.Sidebar
        collapseMode="full"
        animated
      >
        {(isCollapsed) => (
          <nav className="p-4 h-full flex flex-col">
            <ul className="space-y-2 flex-1">
              <li>
                <a href="/dashboard" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
                  <span className="w-5 h-5 bg-blue-500 rounded flex-shrink-0" />
                  <span className={isCollapsed ? "hidden" : "block"}>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/analytics" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
                  <span className="w-5 h-5 bg-green-500 rounded flex-shrink-0" />
                  <span className={isCollapsed ? "hidden" : "block"}>Analytics</span>
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
}`}</code>
      </pre>

      <h3>Right-Side Sidebar</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Sidebar } from "@tecnologias-orbita/orbita-ui-react";

export default function RightSidebar() {
  return (
    <Sidebar.Wrapper className="h-screen">
      <Sidebar.Main className="p-8">
        <h1>Main Content</h1>
      </Sidebar.Main>
      <Sidebar.Sidebar
        side="right"
        collapseMode="reduced"
        animated
      >
        {(isCollapsed) => (
          <div className="p-4 h-full flex flex-col">
            <h3 className={isCollapsed ? "hidden" : "block"} className="font-semibold mb-4">
              Panel
            </h3>
            <div className="space-y-4 flex-1 overflow-y-auto">
              <div className="p-3 bg-gray-50 rounded">
                <p className={isCollapsed ? "hidden" : "block"}>Panel content...</p>
              </div>
            </div>
          </div>
        )}
      </Sidebar.Sidebar>
    </Sidebar.Wrapper>
  );
}`}</code>
      </pre>

      <h3>Custom Toggle Buttons</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Sidebar } from "@tecnologias-orbita/orbita-ui-react";
import { Btn, BurgerIcon, XIcon } from "@tecnologias-orbita/orbita-ui-react";

export default function CustomToggleSidebar() {
  return (
    <Sidebar.Wrapper className="h-screen">
      <Sidebar.Sidebar
        collapseMode="reduced"
        animated
        switchButton={(onCollapse) => (
          <Btn onClick={onCollapse} className="p-2" aria-label="Expand sidebar">
            <BurgerIcon size={24} />
          </Btn>
        )}
        collapsedSwitchButton={(onCollapse) => (
          <Btn onClick={onCollapse} className="p-2" aria-label="Collapse sidebar">
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
}`}</code>
      </pre>

      <h3>Complete Layout with Navbar</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Sidebar, Navbar } from "@tecnologias-orbita/orbita-ui-react";

export default function AppLayout() {
  return (
    <div className="h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar.Container>
        <Navbar.Logo logoUrl="/logo.svg" />
        <Navbar.List centered>
          <Navbar.Item href="/">Home</Navbar.Item>
          <Navbar.Item href="/features">Features</Navbar.Item>
        </Navbar.List>
      </Navbar.Container>

      {/* Sidebar Layout */}
      <Sidebar.Wrapper className="flex-1 overflow-hidden">
        <Sidebar.Sidebar collapseMode="reduced" animated>
          {(isCollapsed) => (
            <nav className="p-4 h-full flex flex-col">
              <ul className="space-y-2 flex-1">
                <li>
                  <a href="/dashboard" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
                    <span className="w-5 h-5 bg-blue-500 rounded flex-shrink-0" />
                    {!isCollapsed && <span>Dashboard</span>}
                  </a>
                </li>
                <li>
                  <a href="/reports" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100">
                    <span className="w-5 h-5 bg-green-500 rounded flex-shrink-0" />
                    {!isCollapsed && <span>Reports</span>}
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </Sidebar.Sidebar>
        <Sidebar.Main className="overflow-auto p-8">
          <main>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
          </main>
        </Sidebar.Main>
      </Sidebar.Wrapper>
    </div>
  );
}`}</code>
      </pre>

      <h2>TypeScript</h2>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Sidebar } from "@tecnologias-orbita/orbita-ui-react";

// Sidebar is exported as an object with sub-components
// TypeScript infers the types automatically

// For render prop children
<Sidebar.Sidebar>
  {(isCollapsed: boolean) => (
    <nav>
      <a href="/item">Item</a>
    </nav>
  )}
</Sidebar.Sidebar>

// For static children
<Sidebar.Sidebar>
  <nav>Static content</nav>
</Sidebar.Sidebar>`}</code>
      </pre>

      <h2>Accessibility</h2>
      <ul>
        <li>
          Uses semantic <code>{"<aside>"}</code> for sidebar,{" "}
          <code>{"<main>"}</code> for content
        </li>
        <li>
          Toggle buttons include proper ARIA labels (add custom labels for
          custom buttons)
        </li>
        <li>
          Keyboard navigable - Tab through links, Enter to activate toggle
        </li>
        <li>Focus management maintained during collapse/expand</li>
        <li>
          Reduced mode maintains link accessibility with icon-only display
        </li>
      </ul>

      <h2>Animation Details</h2>
      <p>
        When <code>animated={true}</code>, the sidebar uses a CSS transition on
        the width property:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`transition-[width] duration-100 ease-in`}</code>
      </pre>

      <p>
        The toggle button has additional transitions for smooth icon rotation
        and position changes.
      </p>

      <h2>Related Components</h2>
      <ul>
        <li>
          <a href="/docs/orbita-ui-react/components/navbar">Navbar</a> - Top
          navigation bar
        </li>
        <li>
          <a href="/docs/orbita-ui-react/components/footer">Footer</a> - Page
          footer
        </li>
        <li>
          <a href="/docs/orbita-ui-react/components/icons">Icons</a> - Burger/X
          icons used in sidebar
        </li>
      </ul>
    </div>
  );
}
