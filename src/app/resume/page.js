import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-[var(--foreground)] font-serif">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {/* Title and Download */}
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-8xl font-cursive font-bold">My Resume</h1>
          <a
            href="/yvargas_resume.pdf"
            download
            className="bg-[var(--color-accent)] text-[var(--color-text-primary)] text-center w-fit px-20 py-6 text-2xl font-bold rounded-full shadow-lg hover:bg-[var(--color-hover)] transition"
          >
            Download PDF
          </a>
        </div>

        {/* In-progress section */}
        <section className="bg-white/70 rounded-xl p-8 shadow-md">
          <h2 className="text-3xl font-bold mb-4 font-serif">Currently Learning & Working On</h2>

          <div className="grid md:grid-cols-3 gap-8 text-lg">
            <div>
              <h3 className="font-bold text-[var(--color-text-secondary)] mb-2">Languages</h3>
              <ul className="list-disc list-inside">
                <li>TypeScript</li>
                <li>Python (for data science)</li>
                <li>SQL (PostgreSQL, MySQL)</li>
                <li>Rust (experimental)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[var(--color-text-secondary)] mb-2">Tools & Frameworks</h3>
              <ul className="list-disc list-inside">
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Git & GitHub</li>
                <li>Azure Fundamentals (AZ-900)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[var(--color-text-secondary)] mb-2">In-progress Projects</h3>
              <ul className="list-disc list-inside">
                <li>Wellness Tracker App (Next.js + Firebase)</li>
                <li>Personal Portfolio Redesign</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
