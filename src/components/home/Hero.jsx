function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24"
    >
      <div>
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#8a7358]">
          AI-Powered Email Support
        </p>

        <h1 className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          Your enquiry, handled intelligently.
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-8 text-[#6b6b63]">
          Send your question to Sylprin Company Limited. Our AI-powered
          email support system will process your enquiry and respond by
          email when appropriate.
        </p>

        <div className="mt-9">
          <a
            href="#enquiry"
            className="inline-flex items-center rounded-full bg-[#8a7358] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#6f5543]"
          >
            Send an Enquiry
            <span className="ml-3">→</span>
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
          alt="Modern property"
          className="h-[500px] w-full object-cover lg:h-[600px]"
        />
      </div>
    </section>
  );
}

export default Hero;