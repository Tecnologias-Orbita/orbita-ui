import { Link } from "react-router";

export default function UiReactMain() {
  return (
    <div className="prose max-w-4xl mx-auto px-4 py-8">
      <h1>Orbita UI React</h1>
      <p className="lead">
        A modern, accessible, and customizable React component library built
        with TypeScript, Tailwind CSS v4, and React 19.
      </p>

      <div className="grid gap-6 md:grid-cols-2 mt-8">
        <Link
          to="/docs/orbita-ui-react/installation"
          className="p-6 border rounded-lg hover:bg-gray-50 transition-colors"
        >
          <h3 className="text-xl font-semibold mb-2">Installation</h3>
          <p className="text-gray-600">
            Get started by installing the package and setting up Tailwind CSS.
          </p>
        </Link>

        <Link
          to="/docs/orbita-ui-react/getting-started"
          className="p-6 border rounded-lg hover:bg-gray-50 transition-colors"
        >
          <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
          <p className="text-gray-600">
            Learn the basics of using Orbita UI React components in your
            project.
          </p>
        </Link>

        <Link
          to="/docs/orbita-ui-react/components"
          className="p-6 border rounded-lg hover:bg-gray-50 transition-colors"
        >
          <h3 className="text-xl font-semibold mb-2">Components</h3>
          <p className="text-gray-600">
            Browse all available components with detailed documentation and
            examples.
          </p>
        </Link>
      </div>

      <h2 className="mt-12 mb-6">Features</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>TypeScript First</strong> - Full type safety with exported
          types
        </li>
        <li>
          <strong>Tailwind CSS v4</strong> - Modern utility-first styling
        </li>
        <li>
          <strong>React 19 Ready</strong> - Built for the latest React features
        </li>
        <li>
          <strong>Accessible</strong> - ARIA attributes and keyboard navigation
        </li>
        <li>
          <strong>Tree Shakeable</strong> - Import only what you need
        </li>
        <li>
          <strong>Zero Dependencies</strong> - Lightweight with minimal peer
          deps
        </li>
      </ul>

      <h2 className="mt-12 mb-6">Available Components</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">Layout Components</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>
              <code>Navbar</code> - Responsive navigation with dropdowns
            </li>
            <li>
              <code>Sidebar</code> - Collapsible sidebar with animations
            </li>
            <li>
              <code>Footer</code> - Flexible footer with grid layout
            </li>
          </ul>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">UI Components</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>
              <code>Btn</code> - Versatile button with link support
            </li>
            <li>
              <code>Separator</code> - Simple horizontal divider
            </li>
            <li>
              <code>Icons</code> - Burger and X icons
            </li>
          </ul>
        </div>
      </div>

      <h2 className="mt-12 mb-6">Package Exports</h2>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import {
  Separator,
  Btn,
  Navbar,
  Footer,
  Sidebar,
  // Types
  type IComponent,
  type IWithChildrenComponent,
} from "@tecnologias-orbita/orbita-ui-react";`}</code>
      </pre>

      <h2 className="mt-8 mb-4">Requirements</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>React 19+</li>
        <li>Tailwind CSS v4+</li>
        <li>TypeScript 5+ (recommended)</li>
      </ul>
    </div>
  );
}
