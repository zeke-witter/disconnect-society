import Image from "next/image";
import madisonPreview from "@/public/madison-preview.png";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20 lg:py-32">

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
          The first chapter launched in Madison, WI in 2026. If you live there (or just want to see what this looks like in practice), visit the Madison site to learn about the research, take the quiz, or take a pledge.
        </p>
      </section>

      <a
        href="https://disconnectmadison.org"
        className="block mb-16 rounded-md overflow-hidden border border-(--secondary-accent) hover:opacity-90 transition-opacity"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Image
          src={madisonPreview}
          alt="Disconnect Madison"
          className="w-full h-auto"
          priority
        />
        <div className="flex items-center justify-between px-5 py-4">
          <div>
            <p className="font-handjet text-xl font-bold">Disconnect Madison</p>
            <p className="text-sm text-(--secondary-accent)">disconnectmadison.org</p>
          </div>
          <span className="font-handjet text-lg text-(--primary-color)">Visit →</span>
        </div>
      </a>

      <section className="border-t border-(--secondary-accent) pt-10">
        <h2 className="font-handjet text-2xl font-bold mb-3 text-(--primary-color)">
          Interested in starting a chapter?
        </h2>
        <p className="text-(--secondary-accent) leading-relaxed">
          If you want to bring this to your city, we&apos;d love to hear from you. Reach out at{" "}
          <a href="mailto:hello@disconnectmadison.org">
            zeke@disconnectmadison.org
          </a>.
        </p>
      </section>

    </div>
  );
}
