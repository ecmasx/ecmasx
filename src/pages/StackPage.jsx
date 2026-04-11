import { stackItems } from "../siteData";

function StackPage() {
  return (
    <main className="max-w-[632px] space-y-16">
      <div className="space-y-4">
        <h1 className="text-[30px] leading-9 tracking-[-0.75px] text-[#f4f0f0]">Stack</h1>
        <p className="max-w-[632px] text-base leading-7 text-[#949494]">
          Tools and products I use daily.
        </p>
      </div>

      <div className="flex flex-col">
        {stackItems.map((item) => (
          <article
            key={item.title}
            className="rounded-md py-6 transition hover:bg-[#151313]"
          >
            <div className="flex flex-col items-start">
              <span className="text-base leading-6 text-[#f4f0f0]">{item.title}</span>
              <span className="text-base leading-6 text-[#949494]">{item.description}</span>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default StackPage;
