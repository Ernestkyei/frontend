import { useState } from "react";
import { sendEmail } from "../endpoints/emails";

function EnquiryForm() {
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    subject: "",
    body: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await sendEmail(formData);

      setSuccessMessage(
        "Your enquiry has been received successfully. Thank you for contacting us. Our team will review your message and get back to you shortly."
      );

      setFormData({
        senderName: "",
        senderEmail: "",
        subject: "",
        body: "",
      });
    } catch (error) {
      setErrorMessage(
        error.message ||
          "We could not submit your enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
            We will review your message and get back to you as quickly as
            possible.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 md:grid-cols-2"
        >
          <div>
            <label className="mb-2 block text-sm font-medium text-[#f5f0eb]">
              Name
            </label>

            <input
              type="text"
              name="senderName"
              value={formData.senderName}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-[#dfe3e3]/70 focus:border-[#d7c4a9]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#f5f0eb]">
              Email
            </label>

            <input
              type="email"
              name="senderEmail"
              value={formData.senderEmail}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-[#dfe3e3]/70 focus:border-[#d7c4a9]"
              placeholder="you@example.com"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-[#f5f0eb]">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-[#dfe3e3]/70 focus:border-[#d7c4a9]"
              placeholder="How can we help?"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-[#f5f0eb]">
              Message
            </label>

            <textarea
              rows="5"
              name="body"
              value={formData.body}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-[#dfe3e3]/70 focus:border-[#d7c4a9]"
              placeholder="Tell us about your enquiry"
            />
          </div>

          {successMessage && (
            <div className="md:col-span-2 rounded-2xl border border-green-400/30 bg-green-400/10 p-5 text-center">
              <p className="text-lg font-semibold text-green-300">
                ✓ Enquiry Received
              </p>

              <p className="mt-2 text-sm leading-6 text-green-100/90">
                {successMessage}
              </p>
            </div>
          )}

          {errorMessage && (
            <div className="md:col-span-2 rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-center">
              <p className="text-sm font-medium text-red-300">
                {errorMessage}
              </p>
            </div>
          )}

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-[#d7c4a9] px-7 py-3 text-sm font-medium text-[#1c1c1c] transition hover:bg-[#f0e5d4] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Submit Enquiry"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EnquiryForm;

