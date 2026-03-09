export default function Home() {
  return (
    <div className="min-h-screen bg-(--background) text-(--foreground) font-[family-name:var(--font-space-grotesk)]">

      <nav className="flex items-center px-6 py-4 lg:px-12 lg:py-6 border-b border-(--secondary-accent)">
        <span className="font-handjet text-2xl text-[#EDEBE6]">Disconnect Society</span>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-20 lg:py-32">

        <h1 className="font-handjet text-5xl lg:text-7xl font-bold mb-6 text-(--foreground)">
          Disconnect Society
        </h1>

        <p className="text-xl lg:text-2xl text-(--secondary-accent) mb-12 leading-relaxed">
          A grassroots movement helping people step back from algorithm-driven social media and reclaim their attention, their relationships, and their time.
        </p>

        <section className="mb-12 space-y-4 text-lg leading-relaxed">
          <p>
            Disconnect Society is an open framework for local communities who want to push back on the attention economy together. Anyone, anywhere can start a chapter.
          </p>
          <p>
            The first chapter launched in Madison, WI in 2025. If you live there (or just want to see what this looks like in practice), visit the Madison site to learn about the research, take the quiz, or take a pledge.
          </p>
        </section>

        <a
          href="https://disconnectmadison.org"
          className="inline-block bg-(--primary-color) text-white font-handjet text-xl px-8 py-4 rounded-sm hover:opacity-90 transition-opacity no-underline mb-16"
        >
          Visit the Madison chapter →
        </a>

        <section className="border-t border-(--secondary-accent) pt-10 mt-4">
          <h2 className="font-handjet text-2xl font-bold mb-3 text-(--primary-color)">
            Interested in starting a chapter?
          </h2>
          <p className="text-(--secondary-accent) leading-relaxed">
            If you want to bring this to your city, we'd love to hear from you. Reach out at{" "}
            <a href="mailto:hello@disconnectmadison.org" className="text-(--primary-accent) underline hover:text-(--primary-accent-hover)">
              hello@disconnectmadison.org
            </a>.
          </p>
        </section>

      </main>

      <footer className="border-t border-(--secondary-accent) px-6 py-8 lg:px-12 text-sm text-(--secondary-accent) text-center">
        <p>Disconnect Society — disconnectsociety.org</p>
      </footer>

    </div>
  );
}
