import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="border-b border-[#e5e2da] bg-[#f8f7f3]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link to="/" className="text-xl font-bold tracking-[0.18em]">
          SYLPRIN
        </Link>

        <div className="hidden items-center gap-8 text-sm md:flex">
          <Link to="/" className="transition hover:text-[#8a7358]">
            Home
          </Link>

          <Link to="/services" className="transition hover:text-[#8a7358]">
            Services
          </Link>

          <Link to="/how-it-works" className="transition hover:text-[#8a7358]">
            How It Works
          </Link>

          <Link
            to="/enquiry"
            className="rounded-full bg-[#8a7358] px-5 py-3 text-white transition hover:bg-[#6f5543]"
          >
            Send an Enquiry
          </Link>
        </div>

        <Link
          to="/enquiry"
          className="rounded-full bg-[#8a7358] px-4 py-2 text-sm text-white transition hover:bg-[#6f5543] md:hidden"
        >
          Enquire
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;