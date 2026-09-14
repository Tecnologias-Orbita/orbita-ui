export default function FooterPage() {
  return (
    <div className="prose max-w-4xl mx-auto px-4 py-8">
      <h1>Footer</h1>
      <p className="lead">
        A flexible footer component with grid layout, columns, items, and
        copyright bar.
      </p>

      <h2>Overview</h2>
      <p>
        The <code>Footer</code> component is exported as an object with
        sub-components for flexible composition. It provides a semantic footer
        structure with a grid system for organizing links and content.
      </p>

      <h2>Installation</h2>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Footer } from "@tecnologias-orbita/orbita-ui-react";`}</code>
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
            <td className="p-3 font-mono">Footer.Container</td>
            <td className="p-3">Main footer wrapper with flex column layout</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">Footer.Grid</td>
            <td className="p-3">Flex wrapper for columns (flex-wrap, gap-4)</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">Footer.Column</td>
            <td className="p-3">Column in the grid with configurable width</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">Footer.Item</td>
            <td className="p-3">Individual footer link or text item</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">Footer.Bottom</td>
            <td className="p-3">Copyright bar at the bottom of the footer</td>
          </tr>
        </tbody>
      </table>

      <h2>Footer.Container Props</h2>
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
            <td className="p-3">Footer content (Grid, Bottom, etc.)</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">centered</td>
            <td className="p-3 font-mono">boolean</td>
            <td className="p-3">false</td>
            <td className="p-3">Center content horizontally</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">className</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">—</td>
            <td className="p-3">Additional CSS classes</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">...props</td>
            <td className="p-3 font-mono">HTMLFooterElement</td>
            <td className="p-3">—</td>
            <td className="p-3">All other footer props</td>
          </tr>
        </tbody>
      </table>

      <h3>Default Styles</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`flex flex-col justify-center gap-4 w-full py-2 px-4 bg-white border-t border-t-slate-200`}</code>
      </pre>

      <h2>Footer.Grid Props</h2>
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
            <td className="p-3">Column components</td>
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
        <code>{`flex flex-wrap gap-4 py-4`}</code>
      </pre>

      <h2>Footer.Column Props</h2>
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
            <td className="p-3">Item components</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">width</td>
            <td className="p-3 font-mono">number | string</td>
            <td className="p-3">—</td>
            <td className="p-3">Column width (e.g., "1/3", "25%", "300px")</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">centered</td>
            <td className="p-3 font-mono">boolean</td>
            <td className="p-3">false</td>
            <td className="p-3">Center items horizontally</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">className</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">—</td>
            <td className="p-3">Additional CSS classes</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">...props</td>
            <td className="p-3 font-mono">HTMLUListElement</td>
            <td className="p-3">—</td>
            <td className="p-3">All other ul props</td>
          </tr>
        </tbody>
      </table>

      <h3>Default Styles</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`flex flex-col justify-start gap-2 w-full`}</code>
      </pre>

      <h2>Footer.Item Props</h2>
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
            <td className="p-3">Item content</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">href</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">—</td>
            <td className="p-3">Link destination (renders as anchor)</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">target</td>
            <td className="p-3 font-mono">
              "_self" | "_blank" | "_parent" | "_top"
            </td>
            <td className="p-3">—</td>
            <td className="p-3">Anchor target attribute</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">className</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">—</td>
            <td className="p-3">Additional CSS classes</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">...props</td>
            <td className="p-3 font-mono">HTMLLIElement</td>
            <td className="p-3">—</td>
            <td className="p-3">All other li props</td>
          </tr>
        </tbody>
      </table>

      <h3>Default Styles</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`flex items-center gap-2 w-max opacity-75 hover:opacity-100 transition duration-100 ease-in-out`}</code>
      </pre>

      <h2>Footer.Bottom Props</h2>
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
            <td className="p-3">—</td>
            <td className="p-3">Additional content (social links, etc.)</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">copyright</td>
            <td className="p-3 font-mono">{`{'{ name: string; year: string; className?:'} string }`}</td>
            <td className="p-3">—</td>
            <td className="p-3">Copyright configuration object</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">centered</td>
            <td className="p-3 font-mono">boolean</td>
            <td className="p-3">false</td>
            <td className="p-3">Center content horizontally</td>
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

      <h3>Default Styles</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`flex items-center gap-4 w-5/6 py-2 max-w-5xl bg-white border-t border-t-slate-200`}</code>
      </pre>

      <h2>Usage Examples</h2>

      <h3>Basic Footer</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Footer } from "@tecnologias-orbita/orbita-ui-react";

export default function BasicFooter() {
  return (
    <Footer.Container>
      <Footer.Grid>
        <Footer.Column width="1/3">
          <Footer.Item>Company</Footer.Item>
          <Footer.Item href="/about">About Us</Footer.Item>
          <Footer.Item href="/careers">Careers</Footer.Item>
          <Footer.Item href="/press">Press</Footer.Item>
        </Footer.Column>
        <Footer.Column width="1/3">
          <Footer.Item>Support</Footer.Item>
          <Footer.Item href="/help">Help Center</Footer.Item>
          <Footer.Item href="/contact">Contact Us</Footer.Item>
          <Footer.Item href="/faq">FAQ</Footer.Item>
        </Footer.Column>
        <Footer.Column width="1/3">
          <Footer.Item>Legal</Footer.Item>
          <Footer.Item href="/privacy">Privacy Policy</Footer.Item>
          <Footer.Item href="/terms">Terms of Service</Footer.Item>
          <Footer.Item href="/cookies">Cookie Policy</Footer.Item>
        </Footer.Column>
      </Footer.Grid>
      <Footer.Bottom
        copyright={{ name: "My Company", year: "2024" }}
      />
    </Footer.Container>
  );
}`}</code>
      </pre>

      <h3>Footer with Social Links</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Footer } from "@tecnologias-orbita/orbita-ui-react";

export default function SocialFooter() {
  return (
    <Footer.Container>
      <Footer.Grid>
        <Footer.Column width="1/2">
          <Footer.Item className="font-semibold">Product</Footer.Item>
          <Footer.Item href="/features">Features</Footer.Item>
          <Footer.Item href="/pricing">Pricing</Footer.Item>
          <Footer.Item href="/integrations">Integrations</Footer.Item>
          <Footer.Item href="/changelog">Changelog</Footer.Item>
        </Footer.Column>
        <Footer.Column width="1/2">
          <Footer.Item className="font-semibold">Company</Footer.Item>
          <Footer.Item href="/about">About</Footer.Item>
          <Footer.Item href="/blog">Blog</Footer.Item>
          <Footer.Item href="/careers">Careers</Footer.Item>
        </Footer.Column>
      </Footer.Grid>
      <Footer.Bottom
        copyright={{ name: "Orbita Inc.", year: "2024" }}
        centered
      >
        <div className="flex gap-4 ml-auto">
          <a href="https://twitter.com" target="_blank" className="opacity-75 hover:opacity-100">
            Twitter
          </a>
          <a href="https://github.com" target="_blank" className="opacity-75 hover:opacity-100">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" className="opacity-75 hover:opacity-100">
            LinkedIn
          </a>
        </div>
      </Footer.Bottom>
    </Footer.Container>
  );
}`}</code>
      </pre>

      <h3>Centered Footer</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Footer } from "@tecnologias-orbita/orbita-ui-react";

export default function CenteredFooter() {
  return (
    <Footer.Container centered>
      <Footer.Grid>
        <Footer.Column centered width="1/3">
          <Footer.Item className="font-semibold">Product</Footer.Item>
          <Footer.Item href="/features">Features</Footer.Item>
          <Footer.Item href="/pricing">Pricing</Footer.Item>
        </Footer.Column>
        <Footer.Column centered width="1/3">
          <Footer.Item className="font-semibold">Company</Footer.Item>
          <Footer.Item href="/about">About</Footer.Item>
          <Footer.Item href="/blog">Blog</Footer.Item>
        </Footer.Column>
        <Footer.Column centered width="1/3">
          <Footer.Item className="font-semibold">Legal</Footer.Item>
          <Footer.Item href="/privacy">Privacy</Footer.Item>
          <Footer.Item href="/terms">Terms</Footer.Item>
        </Footer.Column>
      </Footer.Grid>
      <Footer.Bottom
        copyright={{ name: "My App", year: "2024" }}
        centered
      />
    </Footer.Container>
  );
}`}</code>
      </pre>

      <h3>Dark Theme Footer</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Footer } from "@tecnologias-orbita/orbita-ui-react";

export default function DarkFooter() {
  return (
    <Footer.Container className="bg-gray-900 border-t-gray-700">
      <Footer.Grid className="text-gray-300">
        <Footer.Column width="1/4">
          <Footer.Item className="text-white font-semibold">Product</Footer.Item>
          <Footer.Item href="/features" className="hover:text-white">Features</Footer.Item>
          <Footer.Item href="/pricing" className="hover:text-white">Pricing</Footer.Item>
        </Footer.Column>
        <Footer.Column width="1/4">
          <Footer.Item className="text-white font-semibold">Resources</Footer.Item>
          <Footer.Item href="/docs" className="hover:text-white">Documentation</Footer.Item>
          <Footer.Item href="/blog" className="hover:text-white">Blog</Footer.Item>
        </Footer.Column>
        <Footer.Column width="1/4">
          <Footer.Item className="text-white font-semibold">Company</Footer.Item>
          <Footer.Item href="/about" className="hover:text-white">About</Footer.Item>
          <Footer.Item href="/careers" className="hover:text-white">Careers</Footer.Item>
        </Footer.Column>
        <Footer.Column width="1/4">
          <Footer.Item className="text-white font-semibold">Legal</Footer.Item>
          <Footer.Item href="/privacy" className="hover:text-white">Privacy</Footer.Item>
          <Footer.Item href="/terms" className="hover:text-white">Terms</Footer.Item>
        </Footer.Column>
      </Footer.Grid>
      <Footer.Bottom
        copyright={{ name: "My App", year: "2024", className: "text-gray-400" }}
        className="border-t-gray-700"
        centered
      />
    </Footer.Container>
  );
}`}</code>
      </pre>

      <h3>Newsletter Signup Footer</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Footer } from "@tecnologias-orbita/orbita-ui-react";
import { Btn } from "@tecnologias-orbita/orbita-ui-react";

export default function NewsletterFooter() {
  return (
    <Footer.Container>
      <Footer.Grid>
        <Footer.Column width="1/2">
          <Footer.Item className="font-semibold">Stay Updated</Footer.Item>
          <Footer.Item>Get the latest news and updates</Footer.Item>
          <form className="flex gap-2 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 border rounded-md"
            />
            <Btn type="submit" className="bg-primary-600 text-white hover:bg-primary-700">
              Subscribe
            </Btn>
          </form>
        </Footer.Column>
        <Footer.Column width="1/2">
          <Footer.Item className="font-semibold">Quick Links</Footer.Item>
          <Footer.Item href="/features">Features</Footer.Item>
          <Footer.Item href="/pricing">Pricing</Footer.Item>
          <Footer.Item href="/contact">Contact</Footer.Item>
        </Footer.Column>
      </Footer.Grid>
      <Footer.Bottom
        copyright={{ name: "My Company", year: "2024" }}
      />
    </Footer.Container>
  );
}`}</code>
      </pre>

      <h2>TypeScript</h2>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Footer } from "@tecnologias-orbita/orbita-ui-react";

// Footer is exported as an object with sub-components
// TypeScript infers the types automatically

// For custom column widths
<Footer.Column width="1/3">  // fraction
<Footer.Column width="33%">  // percentage
<Footer.Column width="300px"> // fixed pixel width`}</code>
      </pre>

      <h2>Accessibility</h2>
      <ul>
        <li>
          Uses semantic <code>{"<footer>"}</code>, <code>{"<ul>"}</code>,{" "}
          <code>{"<li>"}</code>, and <code>{"<a>"}</code> elements
        </li>
        <li>
          Copyright section uses <code>{"<aside>"}</code> element
        </li>
        <li>Links have hover/focus states for keyboard navigation</li>
        <li>
          Proper heading hierarchy when using font-semibold items as section
          headers
        </li>
      </ul>

      <h2>Related Components</h2>
      <ul>
        <li>
          <a href="/docs/orbita-ui-react/components/navbar">Navbar</a> -
          Navigation header
        </li>
        <li>
          <a href="/docs/orbita-ui-react/components/sidebar">Sidebar</a> - Side
          navigation
        </li>
        <li>
          <a href="/docs/orbita-ui-react/components/btn">Btn</a> - Button for
          CTAs
        </li>
      </ul>
    </div>
  );
}
