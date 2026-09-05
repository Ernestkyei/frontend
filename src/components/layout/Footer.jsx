import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-[#d9c7b2] bg-[#1c1c1c] text-[#f5f0eb]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold tracking-[0.18em] text-[#f5f0eb]">
              SYLPRIN
            </p>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#d9c7b2] md:mx-0">
              Sylprin Company Limited. Intelligent support for your enquiries.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-semibold text-[#f5f0eb]">Location</h3>

            <div className="mt-4 space-y-2 text-sm text-[#d9c7b2]">
              <p>Accra, Ghana</p>
              <p>BUSH RD</p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-semibold text-[#f5f0eb]">Quick Links</h3>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link
                to="/"
                className="text-[#d9c7b2] transition hover:text-[#8a7358]"
              >
                Home
              </Link>

              <Link
                to="/services"
                className="text-[#d9c7b2] transition hover:text-[#8a7358]"
              >
                Services
              </Link>

              <Link
                to="/how-it-works"
                className="text-[#d9c7b2] transition hover:text-[#8a7358]"
              >
                How It Works
              </Link>

              <Link
                to="/enquiry"
                className="text-[#d9c7b2] transition hover:text-[#8a7358]"
              >
                Send an Enquiry
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#d9c7b2]/30 pt-6 text-center text-sm text-[#d9c7b2] md:text-left">
          © 2026 Sylprin Company Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;