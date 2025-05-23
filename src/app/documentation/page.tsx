// app/documentation/page.tsx
export default function Documentation() {
    const dependencies = [
        {
            name: "@radix-ui/react-slot",
            desc: "Utility for composing components with slots.",
            link: "https://www.radix-ui.com/primitives/docs/utilities/slot",
        },
        {
            name: "@radix-ui/react-tabs",
            desc: "Accessible and customizable tab components.",
            link: "https://www.radix-ui.com/primitives/docs/components/tabs",
        },
        {
            name: "class-variance-authority",
            desc: "Utility for creating className variations with Tailwind CSS.",
            link: "https://github.com/joe-bell/cva",
        },
        {
            name: "clsx",
            desc: "Conditionally join classNames.",
            link: "https://github.com/lukeed/clsx",
        },
        {
            name: "lucide-react",
            desc: "Beautiful and consistent icons for React.",
            link: "https://lucide.dev/",
        },
        {
            name: "next",
            desc: "Fullstack React framework for web apps.",
            link: "https://nextjs.org/",
        },
        {
            name: "react",
            desc: "JavaScript library for building user interfaces.",
            link: "https://react.dev/",
        },
        {
            name: "react-dom",
            desc: "React DOM renderer.",
            link: "https://react.dev/reference/react-dom",
        },
        {
            name: "tailwind-merge",
            desc: "Merge Tailwind CSS classes and resolve conflicts.",
            link: "https://github.com/dcastil/tailwind-merge",
        },
    ];

    const devDependencies = [
        {
            name: "@eslint/eslintrc",
            desc: "Programmatic ESLint config management.",
            link: "https://github.com/eslint/eslintrc",
        },
        {
            name: "@tailwindcss/postcss",
            desc: "Integration between Tailwind CSS and PostCSS.",
            link: "https://tailwindcss.com/docs/using-with-preprocessors#using-postcss",
        },
        {
            name: "@types/node",
            desc: "TypeScript type definitions for Node.js.",
            link: "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/node",
        },
        {
            name: "@types/react",
            desc: "TypeScript type definitions for React.",
            link: "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react",
        },
        {
            name: "@types/react-dom",
            desc: "TypeScript type definitions for ReactDOM.",
            link: "https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-dom",
        },
        {
            name: "eslint",
            desc: "JavaScript/TypeScript linter.",
            link: "https://eslint.org/",
        },
        {
            name: "eslint-config-next",
            desc: "ESLint rules and configs recommended for Next.js.",
            link: "https://nextjs.org/docs/app/building-your-application/configuring/eslint",
        },
        {
            name: "tailwindcss",
            desc: "Modern utility-first CSS framework.",
            link: "https://tailwindcss.com/",
        },
        {
            name: "tw-animate-css",
            desc: "CSS animations package for Tailwind CSS.",
            link: "https://www.npmjs.com/package/tw-animate-css",
        },
        {
            name: "typescript",
            desc: "Typed superset of JavaScript.",
            link: "https://www.typescriptlang.org/",
        },
    ];

    return (
        <main className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">📦 Project Dependencies</h1>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Dependencies</h2>
                <ul className="space-y-3">
                    {dependencies.map((dep) => (
                        <li key={dep.name} className="border rounded-lg p-4 hover:bg-gray-50 transition">
                            <a href={dep.link} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-blue-600 hover:underline">
                                {dep.name}
                            </a>
                            <p className="text-sm text-gray-600">{dep.desc}</p>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">DevDependencies</h2>
                <ul className="space-y-3">
                    {devDependencies.map((devDep) => (
                        <li key={devDep.name} className="border rounded-lg p-4 hover:bg-gray-50 transition">
                            <a href={devDep.link} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-blue-600 hover:underline">
                                {devDep.name}
                            </a>
                            <p className="text-sm text-gray-600">{devDep.desc}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <div className="max-w-3xl mx-auto px-6 py-10 text-gray-800">
                <h1 className="text-3xl font-bold mb-6">☕ Coffee Shop — Project Setup Guide</h1>

                <p className="mb-4">This guide will walk you through installing and running the <code>coffee-shop</code> project locally.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📦 Prerequisites</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Node.js</strong> (v18 or higher): <a className="text-blue-600 underline" href="https://nodejs.org" target="_blank">https://nodejs.org</a></li>
                    <li><strong>npm</strong> or <strong>Yarn</strong> (Node package managers)</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🚀 Installation Steps</h2>
                <ol className="list-decimal pl-6 space-y-4">
                    <li>
                        <strong>Unzip</strong>

                    </li>
                    <li>
                        <strong>Install dependencies</strong>
                        <p className="mt-2">Using <code>npm</code>:</p>
                        <pre className="bg-gray-100 p-4 rounded"><code>npm install</code></pre>
                        <p>Or using <code>Yarn</code>:</p>
                        <pre className="bg-gray-100 p-4 rounded"><code>yarn install</code></pre>
                    </li>
                </ol>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🧪 Running the Development Server</h2>
                <p>Once the dependencies are installed, you can start the development server:</p>
                <pre className="bg-gray-100 p-4 rounded mt-2"><code>npm run dev</code></pre>
                <p className="mt-2">Or with Yarn:</p>
                <pre className="bg-gray-100 p-4 rounded"><code>yarn dev</code></pre>
                <p className="mt-2">Then open your browser at:</p>
                <pre className="bg-gray-100 p-4 rounded"><code>http://localhost:3000</code></pre>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🛠️ Build for Production</h2>
                <pre className="bg-gray-100 p-4 rounded"><code>npm run build</code></pre>
                <p className="mt-2">Then to start the production server:</p>
                <pre className="bg-gray-100 p-4 rounded"><code>npm start</code></pre>

                <h2 className="text-2xl font-semibold mt-8 mb-3">🧹 Lint the Project</h2>
                <pre className="bg-gray-100 p-4 rounded"><code>npm run lint</code></pre>

                <h2 className="text-2xl font-semibold mt-8 mb-3">📁 Project Structure (Simplified)</h2>
                <div className="bg-gray-100 p-4 rounded font-mono text-sm space-y-1">
                    <p>├── node_modules/          # Project dependencies (auto-generated by npm)</p>
                    <p>├── public/                # Static assets served publicly</p>
                    <p>├── src/                   # Main application source code</p>
                    <p>├── .gitignore             # Files and folders ignored by Git</p>
                    <p>├── components.json        # Component configuration file</p>
                    <p>├── eslint.config.mjs      # ESLint configuration for code linting</p>
                    <p>├── next.config.ts         # Next.js configuration file</p>
                    <p>├── next-env.d.ts          # Type declarations for Next.js</p>
                    <p>├── package.json           # Project metadata, scripts, and dependencies</p>
                    <p>├── package-lock.json      # Exact versions of installed packages</p>
                    <p>├── postcss.config.mjs     # PostCSS configuration for CSS processing</p>
                    <p>├── README.md              # Project documentation and setup instructions</p>
                    <p>├── tsconfig.json          # TypeScript compiler options</p>
                </div>
                <div className="bg-gray-100 p-4 rounded font-mono text-sm space-y-1">
                    <p>├── app/                      # Root directory for routes using the App Router</p>
                    <p>│   ├── about-us/             # Page route: /about-us</p>
                    <p>│   ├── book-table/           # Page route: /book-table</p>
                    <p>│   ├── chefs/                # Page route: /chefs</p>
                    <p>│   ├── contact-us/           # Page route: /contact-us</p>
                    <p>│   ├── documentation/        # Page route: /documentation</p>
                    <p>│   ├── food-gallery-posts/   # Page route: /food-gallery-posts</p>
                    <p>│   ├── latest-news/          # Page route: /latest-news</p>
                    <p>│   ├── menu/                 # Page route: /menu</p>
                    <p>│   ├── our-chefs/            # Page route: /our-chefs</p>
                    <p>│   ├── shop/                 # Page route: /shop</p>
                    <p>│   ├── favicon.ico           # Website favicon</p>
                    <p>│   ├── globals.css           # Global CSS styles</p>
                    <p>│   ├── layout.tsx            # Shared layout wrapper for all routes</p>
                    <p>│   └── page.tsx              # Root index page (route: /)</p>
                    <p>├── components/               # Reusable UI components</p>
                    <p>└── lib/                      # Utility functions, services, or configurations</p>
                </div>




            </div>

        </main>
    );
}
