import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-[var(--foreground)] px-2 animate-fadeIn">
      <h1 className="text-8xl font-bold mb-6 mt-6 font-cursive">Contact Me</h1>
      
      <p className="mb-8 text-xl text-center max-w-xl font-serif">
        Want to connect? I&apos;d love to hear from you! Fill out the form below or email me directly at{" "}
        <a href="mailto:ysabellavargas05@gmail.com" className="text-[var(--color-link)] underline">
          ysabellavargas05@gmail.com
        </a>
      </p>
      
      <form className="flex flex-col gap-4 w-full max-w-md bg-white/80 p-8 rounded-xl shadow">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border border-gray-300 rounded px-4 py-2 font-serif"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded px-4 py-2 font-serif"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          className="border border-gray-300 rounded px-4 py-2 font-serif"
          required
        />
        <button
          type="submit"
          className="btn-primary mt-2 font-serif"
          disabled
          title="Form submission not enabled in demo"
        >
          Send Message
        </button>
      </form>

      <div className="text-center font-serif mt-8">
        <h2 className="text-xl font-bold">Find Me Online:</h2>
        <p className="text-lg">
          <a
            href="https://github.com/yvargas05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-link)] underline hover:text-[var(--color-hover)]"
          >
            GitHub
          </a>
        </p>
        <p>
          <a
            href="https://linkedin.com/in/ysabellavargas05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-link)] underline hover:text-[var(--color-hover)]"
          >
            LinkedIn
          </a>
        </p>
      </div>

      <Link
        href="/"
        className="text-xl mt-8 text-[var(--color-link)] underline hover:text-[var(--color-hover)]"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
