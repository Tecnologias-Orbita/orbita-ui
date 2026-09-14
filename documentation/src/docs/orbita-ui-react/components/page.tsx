import { Link } from "react-router";

export default function ComponentsPage() {
  const components = [
    {
      name: "Separator",
      path: "/docs/orbita-ui-react/components/separator",
      description: "Simple horizontal divider component",
      category: "Common",
    },
    {
      name: "Btn",
      path: "/docs/orbita-ui-react/components/btn",
      description:
        "Versatile button component with link support, loading states, and variants",
      category: "Buttons",
    },
    {
      name: "Navbar",
      path: "/docs/orbita-ui-react/components/navbar",
      description:
        "Responsive navigation bar with logo, list, items, and dropdown support",
      category: "Layout",
    },
    {
      name: "Footer",
      path: "/docs/orbita-ui-react/components/footer",
      description:
        "Flexible footer with grid layout, columns, and copyright bar",
      category: "Layout",
    },
    {
      name: "Sidebar",
      path: "/docs/orbita-ui-react/components/sidebar",
      description:
        "Collapsible sidebar with animation support and multiple collapse modes",
      category: "Layout",
    },
    {
      name: "Icons",
      path: "/docs/orbita-ui-react/components/icons",
      description: "Burger and X icons for navigation toggles",
      category: "Icons",
    },
  ];

  return (
    <div className="prose max-w-4xl mx-auto px-4 py-8">
      <h1>Components</h1>
      <p className="lead">
        Browse all available components with detailed documentation, props
        tables, and usage examples.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Common Components
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {components
              .filter((c) => c.category === "Common")
              .map((comp) => (
                <Link
                  key={comp.name}
                  to={comp.path}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-lg mb-1">{comp.name}</h3>
                  <p className="text-gray-600 text-sm">{comp.description}</p>
                </Link>
              ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Button Components
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {components
              .filter((c) => c.category === "Buttons")
              .map((comp) => (
                <Link
                  key={comp.name}
                  to={comp.path}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-lg mb-1">{comp.name}</h3>
                  <p className="text-gray-600 text-sm">{comp.description}</p>
                </Link>
              ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Layout Components
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {components
              .filter((c) => c.category === "Layout")
              .map((comp) => (
                <Link
                  key={comp.name}
                  to={comp.path}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-lg mb-1">{comp.name}</h3>
                  <p className="text-gray-600 text-sm">{comp.description}</p>
                </Link>
              ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Icon Components
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {components
              .filter((c) => c.category === "Icons")
              .map((comp) => (
                <Link
                  key={comp.name}
                  to={comp.path}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-lg mb-1">{comp.name}</h3>
                  <p className="text-gray-600 text-sm">{comp.description}</p>
                </Link>
              ))}
          </div>
        </section>
      </div>

      <h2 className="mt-12 mb-6">Quick Reference</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-3 text-left">Component</th>
            <th className="p-3 text-left">Import</th>
            <th className="p-3 text-left">Category</th>
          </tr>
        </thead>
        <tbody>
          {components.map((comp) => (
            <tr key={comp.name} className="border-b hover:bg-gray-50">
              <td className="p-3 font-mono">{comp.name}</td>
              <td className="p-3 font-mono text-sm">
                {comp.name === "Navbar" ||
                comp.name === "Footer" ||
                comp.name === "Sidebar"
                  ? `import { ${comp.name} } from "@tecnologias-orbita/orbita-ui-react";`
                  : `import { ${comp.name} } from "@tecnologias-orbita/orbita-ui-react";`}
              </td>
              <td className="p-3">{comp.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
