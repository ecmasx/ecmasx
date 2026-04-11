import { projects } from "../siteData";

function ProjectsPage() {
  return (
    <main className="max-w-[632px] space-y-6">
      <div className="space-y-2">
        <span className="block text-base leading-6 text-[#f4f0f0]">Projects</span>
        <p className="max-w-[632px] text-base leading-7 text-[#949494]">
          Selected Shopify work, migrations, redesigns, and ongoing storefront support.
        </p>
      </div>

      <div className="space-y-4">
        {projects.map((item) => (
          <article
            key={item.title}
            className="rounded-md border border-[#222222] bg-[#141212] p-6"
          >
            <div className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-base leading-6 text-[#f4f0f0]">{item.title}</h2>
                <p className="text-sm leading-5 text-[#949494]">{item.role}</p>
              </div>

              <p className="max-w-[560px] text-base leading-7 text-[#949494]">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#3a3a3a] bg-[#1f1d1d] px-3 py-1 text-xs leading-5 text-[#bdb7b7]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex cursor-pointer items-center text-sm leading-5 text-[#949494] transition-colors duration-300 ease-out hover:text-[#f4f0f0]"
                >
                  Case study
                </a>
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex cursor-pointer items-center text-sm leading-5 text-[#949494] transition-colors duration-300 ease-out hover:text-[#f4f0f0]"
                >
                  Visit site
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default ProjectsPage;
