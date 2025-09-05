import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "🚀 Fast & Lightweight",
      desc: "Built with performance in mind using Next.js & Tailwind.",
    },
    {
      title: "🎨 Beautiful Styling",
      desc: "Pre-styled components with clean and modern design.",
    },
    {
      title: "⚡ Easy to Use",
      desc: "Drop components into your project with minimal setup.",
    },
  ];

  return (
    <>
      <main className="pt-16 hide-scrollbar">
        {/* Hero Section */}
        <div className="text-9xl text-center font-extrabold">scaffold</div>
        <div className="text-center">
          <p className="text-lg text-gray-400">
            A modern UI component library built with Next.js
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/components"
            className="px-6 py-3 rounded-2xl bg-indigo-600 text-white shadow-md hover:bg-indigo-500"
          >
            View Components
          </Link>
          <Link
            href="/docs"
            className="px-6 py-3 rounded-2xl border border-gray-500 hover:bg-gray-800"
          >
            Get Started
          </Link>
        </div>

        {/* Features Section */}
        <section className="mt-20 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Why Scaffold?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 bg-gray-900 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Component Preview Section */}
        <section className="mt-20 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Component Preview</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Example buttons */}
            <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white shadow hover:bg-indigo-500">
              Primary Button
            </button>
            <button className="px-6 py-3 rounded-xl border border-gray-500 hover:bg-gray-800">
              Secondary Button
            </button>
            <input
              type="text"
              placeholder="Input field"
              className="px-4 py-2 rounded-xl border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-indigo-600"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 py-6 border-t border-gray-800 text-center text-gray-500">
          <p>
            Built with ❤️ using Next.js + Tailwind |{" "}
            <a
              href="https://github.com/your-repo"
              target="_blank"
              className="text-indigo-400 hover:underline"
            >
              GitHub
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
