export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 17, 32, 0.7), rgba(11, 17, 32, 0.85)), url('/hero-bg.png')`,
        }}
      >
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-radial-glow -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container relative z-10 text-center max-w-4xl">
          <div className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6 uppercase tracking-wider">
            AI Solutions & Consulting
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Piloting the Future of<br />
            <span className="text-blue-400">Business Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Custom AI tools and consulting services designed to elevate your business.
            We build intelligent automation solutions tailored to your unique workflows
            and help you navigate the evolving landscape of AI technology.
          </p>
          <a
            href="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105"
          >
            Admin Portal
          </a>
        </div>
      </section>
    </div>
  );
}
