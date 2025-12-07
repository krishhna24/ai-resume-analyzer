import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants/index";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuScan" },
    { name: "description", content: "Analyze, optimize, and stand out—automatically." },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="w-full flex flex-col items-center py-20 px-4">
        <div className="text-center max-w-3xl mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-700">
            Track Your Application & Resume Ratings
          </h1>
          <h2 className="text-lg text-gray-500 mt-3">
            Review your submissions and check AI-powered feedback.
          </h2>
        </div>

        {resumes.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-16 px-6">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}