function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Send your enquiry",
      description:
        "Tell us what you need using the enquiry form below.",
    },
    {
      number: "02",
      title: "We process your request",
      description:
        "Our intelligent email support system reviews your enquiry.",
    },
    {
      number: "03",
      title: "Receive a response",
      description:
        "You will receive an appropriate response by email when applicable.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#f8f7f3]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#8a7358]">
            How It Works
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Simple for you. Intelligent behind the scenes.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#6b6b63]">
            Getting in touch with Sylprin is straightforward. Send your
            enquiry and our support system takes care of the next step.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-t border-[#1c1c1c] pt-6"
            >
              <span className="text-sm font-medium text-[#8a7358]">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-[#6b6b63]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;