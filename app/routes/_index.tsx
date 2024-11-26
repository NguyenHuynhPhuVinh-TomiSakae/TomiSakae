import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import GitHubStats from "~/components/GitHubStats";
import TechStack from "~/components/TechStack";
import Projects from "~/components/Projects";

export const meta: MetaFunction = () => {
  return [
    { title: "TomiSakae | Portfolio" },
    { name: "description", content: "Portfolio của một Full-stack Developer & AI Enthusiast" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12">
      <div className="container mx-auto flex flex-col items-center gap-8 max-w-4xl w-full px-4">
        <Header />
        <div className="w-full space-y-8">
          <GitHubStats />
          <div className="grid md:grid-cols-2 gap-8">
            <TechStack />
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}
