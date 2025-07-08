export default function Projects() {
  return (
    <div className="h-screen flex justify-center items-start pt-20 pb-20 text-[var(--foreground)]">

      {/* Main content */}
      <main className="relative z-10 max-w-4xl w-full flex flex-col items-center justify-center p-2">
        <h1 className="text-8xl font-bold mb-15 font-cursive"> My Projects </h1>

        <ul className="space-y-4">
          <li className="border rounded-xl p-10 bg-white/80 shadow hover:shadow-2xl transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 project-hover">
            <h2 className="text-2xl font-bold leading-10 font-serif">
              Go Through Time, Game Design Fall 2024
            </h2>
            <p className="text-base font-normal font-serif">
              Go Through Time is a 3D single player puzzle game in which the player is able to control time to maneuver around a collapsing post-apocalyptic world. The goal is climb to the top of the mystical Bell Tower to fix the bell and bring back order to the collapsing world.
            </p>
            <a
              href="https://github.com/yvargas05/Go-Through_Time"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline leading-10 font-serif"
            >
              View on GitHub
            </a>
          </li>

          {/* Add more projects here */}
        </ul>
      </main>
    </div>
  );
}
