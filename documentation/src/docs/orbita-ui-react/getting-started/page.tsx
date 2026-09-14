export default function GettingStartedPage() {
  return (
    <div className="prose max-w-4xl mx-auto px-4 py-8">
      <h1>Getting Started</h1>
      <p className="lead">
        Learn the basics of using Orbita UI React components in your project.
      </p>

      <h2>Basic Usage</h2>
      <p>
        Import components directly from the package. Each component is exported
        individually for optimal tree-shaking.
      </p>

      <h3>Importing Components</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`// Individual imports (recommended for tree-shaking)
import { Btn } from "@tecnologias-orbita/orbita-ui-react";
import { Navbar } from "@tecnologias-orbita/orbita-ui-react";
import { Footer } from "@tecnologias-orbita/orbita-ui-react";
import { Sidebar } from "@tecnologias-orbita/orbita-ui-react";
import { Separator } from "@tecnologias-orbita/orbita-ui-react";

// Or import all at once
import { Btn, Navbar, Footer, Sidebar, Separator } from "@tecnologias-orbita/orbita-ui-react";

// Types
import type { IComponent, IWithChildrenComponent } from "@tecnologias-orbita/orbita-ui-react";`}</code></pre>

      <h3>Simple Button Example</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { Btn } from "@tecnologias-orbita/orbita-ui-react";

export default function MyButton() {
  return (
    <Btn onClick={() => console.log("Clicked!")}>
      Click Me
    </Btn>
  );
}`}</code></pre>

      <h3>Link Button Example</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { Btn } from "@tecnologias-orbita/orbita-ui-react";

export default function MyLinkButton() {
  return (
    <Btn link href="/about" target="_blank">
      Go to About Page
    </Btn>
  );
}`}</code></pre>

      <h2>Layout Components</h2>
      <p>
        Layout components (<code>Navbar</code>, <code>Sidebar</code>,
        <code>Footer</code>) are exported as objects with sub-components. This
        allows for flexible composition.
      </p>

      <h3>Navbar Example</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { Navbar } from "@tecnologias-orbita/orbita-ui-react";

export default function MyNavbar() {
  return (
    <Navbar.Container>
      <Navbar.Logo logoUrl="/logo.svg" />
      <Navbar.List centered>
        <Navbar.Item href="/">Home</Navbar.Item>
        <Navbar.Item href="/about">About</Navbar.Item>
        <Navbar.Item href="/contact">Contact</Navbar.Item>
      </Navbar.List>
    </Navbar.Container>
  );
}`}</code></pre>

      <h3>Sidebar Example</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { Sidebar } from "@tecnologias-orbita/orbita-ui-react";

export default function MyLayout() {
  return (
    <Sidebar.Wrapper>
      <Sidebar.Sidebar
        collapseMode="reduced"
        animated
        side="left"
      >
        {(isCollapsed) => (
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <a href="/dashboard" className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-gray-200 rounded" />
                  {!isCollapsed && <span>Dashboard</span>}
                </a>
              </li>
              <li>
                <a href="/settings" className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-gray-200 rounded" />
                  {!isCollapsed && <span>Settings</span>}
                </a>
              </li>
            </ul>
          </nav>
        )}
      </Sidebar.Sidebar>
      <Sidebar.Main>
        <main className="p-8">
          <h1>Main Content</h1>
        </main>
      </Sidebar.Main>
    </Sidebar.Wrapper>
  );
}`}</code></pre>

      <h3>Footer Example</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { Footer } from "@tecnologias-orbita/orbita-ui-react";

export default function MyFooter() {
  return (
    <Footer.Container>
      <Footer.Grid>
        <Footer.Column width="1/3">
          <Footer.Item>Company</Footer.Item>
          <Footer.Item href="/about">About Us</Footer.Item>
          <Footer.Item href="/careers">Careers</Footer.Item>
        </Footer.Column>
        <Footer.Column width="1/3">
          <Footer.Item>Support</Footer.Item>
          <Footer.Item href="/help">Help Center</Footer.Item>
          <Footer.Item href="/contact">Contact Us</Footer.Item>
        </Footer.Column>
        <Footer.Column width="1/3">
          <Footer.Item>Legal</Footer.Item>
          <Footer.Item href="/privacy">Privacy Policy</Footer.Item>
          <Footer.Item href="/terms">Terms of Service</Footer.Item>
        </Footer.Column>
      </Footer.Grid>
      <Footer.Bottom
        copyright={{ name: "My Company", year: "2024" }}
      />
    </Footer.Container>
  );
}`}</code></pre>

      <h2>Styling & Customization</h2>
      <p>
        All components accept <code>className</code> and <code>style</code> props
        for customization. Components use Tailwind CSS classes internally, so you
        can extend or override styles using Tailwind utilities.
      </p>

      <h3>Customizing Button Styles</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { Btn } from "@tecnologias-orbita/orbita-ui-react";

export default function CustomButtons() {
  return (
    <div className="flex gap-4">
      {/* Default style */}
      <Btn onClick={() => {}}>Default</Btn>

      {/* Custom color */}
      <Btn
        onClick={() => {}}
        className="bg-primary-600 text-white hover:bg-primary-700 border-primary-600"
      >
        Primary
      </Btn>

      {/* Custom size */}
      <Btn
        onClick={() => {}}
        className="px-6 py-3 text-lg"
      >
        Large
      </Btn>
    </div>
  );
}`}</code></pre>

      <h2>TypeScript Usage</h2>
      <p>
        All components are fully typed. The package exports common type
        interfaces for extending components.
      </p>

      <h3>Extending Component Props</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { Btn, type BtnProps } from "@tecnologias-orbita/orbita-ui-react";
import type { FC } from "react";

// Create a custom button with additional props
interface CustomBtnProps extends BtnProps {
  variant?: "primary" | "secondary" | "danger";
}

const CustomBtn: FC<CustomBtnProps> = ({
  variant = "primary",
  className,
  ...props
}) => {
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <Btn
      className={variantClasses[variant] + " " + (className || "")}
      {...props}
    />
  );
};

export default CustomBtn;`}</code></pre>

      <h2>Common Patterns</h2>

      <h3>Conditional Rendering with Separator</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { Separator } from "@tecnologias-orbita/orbita-ui-react";

export function Section({ children, title }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="py-4">
      {title && (
        <>
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
          <Separator />
        </>
      )}
      <div className="mt-4">{children}</div>
    </section>
  );
}`}</code></pre>

      <h3>Responsive Navbar with Dropdown</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { Navbar } from "@tecnologias-orbita/orbita-ui-react";

export default function ResponsiveNavbar() {
  return (
    <Navbar.Container autoControlled>
      <Navbar.Logo logoUrl="/logo.svg" />
      <Navbar.List centered activeClassName="text-primary-600 font-medium">
        <Navbar.Item href="/">Home</Navbar.Item>
        <Navbar.Item
          isDropdown
          dropdownItems={[
            <Navbar.Item key="1" href="/products/web">Web Development</Navbar.Item>,
            <Navbar.Item key="2" href="/products/mobile">Mobile Apps</Navbar.Item>,
            <Navbar.Item key="3" href="/products/ai">AI Solutions</Navbar.Item>,
          ]}
        >
          Products
        </Navbar.Item>
        <Navbar.Item href="/pricing">Pricing</Navbar.Item>
        <Navbar.Item href="/contact">Contact</Navbar.Item>
      </Navbar.List>
    </Navbar.Container>
  );
}`}</code></pre>

      <h2>Next Steps</h2>
      <ul>
        <li>
          <a href="/docs/orbita-ui-react/components">Components Documentation</a> -
          Detailed API reference for each component
        </li>
        <li>
          <a href="/docs/orbita-ui-react/components/btn">Btn Component</a> -
          Start with the versatile button component
        </li>
      </ul>
    </div>
  );
}