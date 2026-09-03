import services from "../data/services";

function Services() {
  return (
    <section id="services" className="border-y border-[#e5e2da] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8a7358]">
              Our Support
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A smarter way to handle your enquiries.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#6b6b63]">
              Have a question about a property or our services? Send us your
              enquiry and our intelligent email support system will process your
              request and ensure it receives the appropriate response.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#e5e2da] bg-[#f8f7f3] shadow-[0_24px_80px_rgba(28,28,28,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
              alt="Modern home exterior"
              className="h-[320px] w-full object-cover lg:h-[420px]"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-[1.75rem] border border-[#e5e2da] bg-[#f8f7f3] shadow-sm transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-52 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-7">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8e0d5] text-lg text-[#8a7358]">
                  →
                </div>

                <h3 className="text-xl font-semibold text-[#1c1c1c]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-[#6b6b63]">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;