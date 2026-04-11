import { useState } from "react";
import ShopifyFooterButton from "../components/ShopifyFooterButton";
import SocialIcon from "../components/SocialIcon";
import {
  aboutText,
  connectText,
  education,
  projects,
  skills,
  socialLinks,
} from "../siteData";

function ExternalArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-[15px] w-[15px] text-current"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4.25 11.75 11.75 4.25" />
      <path d="M6 4.25h5.75V10" />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-4 w-4 text-[#949494] transition-transform duration-300 ease-out"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 6 4 4 4-4" />
    </svg>
  );
}

function HomePage() {
  const [skillsOpen, setSkillsOpen] = useState(false);

  return (
    <main className="flex flex-col gap-16 lg:gap-24">
      <section className="space-y-2">
        <span className="block text-base leading-6 text-[#f4f0f0]">About</span>
        <p className="max-w-[632px] text-base leading-7 text-[#949494]">
          {aboutText}
        </p>
      </section>

      <section className="space-y-4">
        <div className="space-y-0.5 border-b border-[#222222] pb-4">
          <span className="block text-base leading-6 text-[#f4f0f0]">
            Projects
          </span>
          <p className="text-base leading-7 text-[#949494]">
            Things I&apos;m actively building and shipping.
          </p>
        </div>

        <div>
          {projects.slice(0, 5).map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex cursor-pointer rounded-md py-6 transition-colors duration-300 ease-out hover:bg-[#151313]"
            >
              <div className="space-y-1">
                <span className="flex items-center gap-1 text-base leading-6 text-[#f4f0f0]">
                  {item.title}
                  <span className="transition-colors duration-300 ease-out">
                    <ExternalArrow />
                  </span>
                </span>
                <span className="block text-base leading-6 text-[#949494]">
                  {item.role}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="space-y-0.5 border-b border-[#222222] pb-4">
          <span className="block text-base leading-6 text-[#f4f0f0]">
            Education
          </span>
          <p className="text-base leading-7 text-[#949494]">
            Academic background in computer engineering and the topics I studied.
          </p>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-base leading-6 text-[#f4f0f0]">
              {education.school}
            </p>
            <p className="text-base leading-7 text-[#949494]">
              {education.degree}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm leading-5 text-[#7f7f7f]">
              <span>{education.years}</span>
              <span>{education.qualification}</span>
            </div>
          </div>

          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setSkillsOpen((current) => !current)}
              className="flex cursor-pointer items-center gap-2 text-left text-sm leading-5 text-[#f4f0f0] transition-colors duration-300 ease-out hover:text-white"
              aria-expanded={skillsOpen}
            >
              <span>What I studied</span>
              <ChevronIcon open={skillsOpen} />
            </button>

            {skillsOpen ? (
              <div className="flex flex-wrap gap-3">
                {skills.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#3a3a3a] bg-[#191919] px-3 py-1.5 text-sm leading-5 text-[#c7c1c1] transition-colors duration-300 ease-out hover:border-[#5b5656] hover:text-[#f4f0f0]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="space-y-4" id="connect">
        <div className="space-y-2">
          <span className="block text-base leading-6 text-[#f4f0f0]">
            Connect
          </span>
          <p className="max-w-[632px] text-base leading-7 text-[#949494]">
            {connectText}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-md border border-[#5b5656] bg-[#191919] text-sm text-[#949494] transition-colors duration-300 ease-out hover:border-[#8a8484] hover:text-[#f4f0f0]"
            >
              <SocialIcon icon={item.icon} className="h-5 w-5" />
            </a>
          ))}
          <ShopifyFooterButton />
          <button
            data-cal-namespace="test"
            data-cal-link="ecmasx/test"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="inline-flex h-12 cursor-pointer items-center rounded-md border border-[#5b5656] bg-[#191919] px-4 text-sm text-[#f4f0f0] transition-colors duration-300 ease-out hover:border-[#8a8484] hover:text-white"
            type="button"
          >
            <span>Book a call</span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
