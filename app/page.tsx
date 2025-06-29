"use client";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sideBar";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [selected, setSelected] = useState<"npx" | "npm" | "yarn">("npx");

  const codeBlocks = {
    npx: {
      init: "npx shadcn@latest init",
      add: "npx shadcn@latest add button",
      import: 'import { Button } from "@/components/ui/button"',
    },
    npm: {
      init: "npm create shadcn@latest",
      add: "npm create shadcn@latest -- --add button",
      import: 'import { Button } from "@/components/ui/button"',
    },
    yarn: {
      init: "yarn create shadcn",
      add: "yarn create shadcn --add button",
      import: 'import { Button } from "@/components/ui/button"',
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">Next.js</h1>
          <p>
            Install and configure{" "}
            <span className="font-semibold">shadcn/ui</span> for Next.js.
          </p>

          <div className="flex gap-2 my-6">
            {(["npx", "npm", "yarn"] as const).map((tool) => (
              <Button
                key={tool}
                variant={selected === tool ? "default" : "outline"}
                onClick={() => setSelected(tool)}
              >
                {tool}
              </Button>
            ))}
          </div>

          <h2 className="text-xl font-semibold mt-6">Create Project</h2>
          <p className="my-3">
            Use the following command to initialize the project with{" "}
            <code className="bg-muted px-2 py-[2px] rounded text-sm">
              {selected}
            </code>
            :
          </p>
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code className="font-mono text-sm">
              {codeBlocks[selected].init}
            </code>
          </pre>

          <h2 className="text-xl font-semibold mt-8">Add Components</h2>
          <p className="my-3">
            You can now start adding components like{" "}
            <code className="bg-muted px-2 py-[2px] rounded text-sm">
              button
            </code>
            .
          </p>
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code className="font-mono text-sm">
              {codeBlocks[selected].add}
            </code>
          </pre>

          <h2 className="text-xl font-semibold mt-8">Import Example</h2>
          <p className="my-3">
            After adding the component, import it like this:
          </p>
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code className="font-mono text-sm">
              {codeBlocks[selected].import}
            </code>
          </pre>
        </main>
      </div>
    </div>
  );
}
