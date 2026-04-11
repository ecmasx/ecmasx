import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="max-w-[632px] space-y-5">
      <p className="text-sm uppercase tracking-[0.3em] text-[#949494]">404</p>
      <h2 className="text-3xl leading-tight text-[#f4f0f0] sm:text-4xl">
        This page does not exist.
      </h2>
      <p className="text-base leading-7 text-[#949494]">
        The router is working, but this route is not defined yet.
      </p>
      <Link
        to="/"
        className="inline-flex cursor-pointer items-center rounded-md border border-[#3a3a3a] bg-[#191919] px-4 py-2 text-sm text-[#f4f0f0] transition-colors duration-300 ease-out hover:bg-[#222222]"
      >
        Back home
      </Link>
    </section>
  );
}

export default NotFoundPage;
