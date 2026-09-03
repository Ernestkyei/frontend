function EnquiryForm() {
  return (
    <section id="enquiry" className="bg-[#1c1c1c] py-20 text-white">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#d7c4a9]">
            Get in touch
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Send us your enquiry
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#dfe3e3]">
            We will review your message and get back to you as quickly as possible.
          </p>
        </div>

        <form className="mt-12 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#f5f0eb]">Name</label>
            <input
              type="text"
              className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-[#dfe3e3]/70"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#f5f0eb]">Email</label>
            <input
              type="email"
              className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-[#dfe3e3]/70"
              placeholder="you@example.com"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-[#f5f0eb]">Subject</label>
            <input
              type="text"
              className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-[#dfe3e3]/70"
              placeholder="How can we help?"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-[#f5f0eb]">Message</label>
            <textarea
              rows="5"
              className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-[#dfe3e3]/70"
              placeholder="Tell us about your enquiry"
            />
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="rounded-full bg-[#d7c4a9] px-7 py-3 text-sm font-medium text-[#1c1c1c] transition hover:bg-[#f0e5d4]"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EnquiryForm;
