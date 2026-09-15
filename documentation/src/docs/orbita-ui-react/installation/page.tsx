export default function InstallationPage() {
  return (
    <div className="prose max-w-4xl mx-auto px-4 py-8">
      <h1>Installation</h1>
      <p className="lead">
        Install Orbita UI React and its peer dependencies to get started.
      </p>

      <h2>Prerequisites</h2>
      <p>
        Orbita UI React requires the following peer dependencies to be installed in
        your project:
      </p>
      <ul>
        <li><strong>React 19+</strong></li>
        <li><strong>Tailwind CSS v4+</strong></li>
      </ul>

      <h2>Install Package</h2>
      <p>
        Install the package using your preferred package manager. Note that
        <code>--legacy-peer-deps</code> is required due to peer dependency version
        conflicts (React 19 vs peer React ^18, Tailwind v4 vs peer ^3).
      </p>

      <h3>npm</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`npm install @tecnologias-orbita/orbita-ui-react --legacy-peer-deps`}</code></pre>

      <h3>yarn</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`yarn add @tecnologias-orbita/orbita-ui-react`}</code></pre>

      <h3>pnpm</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`pnpm add @tecnologias-orbita/orbita-ui-react`}</code></pre>

      <h2>Configure Tailwind CSS v4</h2>
      <p>
        Orbita UI React uses Tailwind CSS v4. Make sure your project is configured
        to use Tailwind v4 and includes the package's content paths for proper
        class detection.
      </p>

      <h3>CSS Import</h3>
      <p>
        Import the Orbita UI React styles in your global CSS file (typically
        <code>src/index.css</code> or <code>src/app/globals.css</code>):
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`@import "tailwindcss";
@source "../../node_modules/@tecnologias-orbita/orbita-ui-react/dist";`}</code></pre>

      <p>
        The <code>@source</code> directive tells Tailwind v4 to scan the
        compiled component files for class usage, ensuring all utility classes
        are generated.
      </p>

      <h3>Tailwind Config (Optional)</h3>
      <p>
        If you have a <code>tailwind.config.ts</code>, you can also add the
        content path there:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/@tecnologias-orbita/orbita-ui-react/dist/**/*.js",
  ],
} satisfies Config;`}</code></pre>

      <h2>TypeScript Configuration</h2>
      <p>
        Orbita UI React is written in TypeScript and includes type definitions.
        Ensure your <code>tsconfig.json</code> has <code>moduleResolution</code>
        set to <code>bundler</code> or <code>node16+</code>:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}`}</code></pre>

      <h2>Verify Installation</h2>
      <p>
        Create a simple test component to verify everything is working:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`import { Btn } from "@tecnologias-orbita/orbita-ui-react";

export default function TestComponent() {
  return (
    <Btn onClick={() => alert("Hello Orbita UI!")}>
      Click Me
    </Btn>
  );
}`}</code></pre>

      <h2>Next Steps</h2>
      <ul>
        <li>
          <a href="/docs/orbita-ui-react/getting-started">Getting Started</a> -
          Learn basic usage patterns
        </li>
        <li>
          <a href="/docs/orbita-ui-react/components">Components</a> - Browse all
          available components
        </li>
      </ul>
    </div>
  );
}