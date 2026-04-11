import { NavLink, Route, Routes } from "react-router-dom";
import CalEmbed from "./components/CalEmbed";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import StackPage from "./pages/StackPage";
import NotFoundPage from "./pages/NotFoundPage";
import { profile, primaryNav } from "./siteData";

function App() {
  return (
    <div className="min-h-[100svh] bg-[#100e0e] text-[#f4f0f0]">
      <CalEmbed />
      <div className="mx-auto flex w-full max-w-[912px] flex-col px-5 sm:px-8 lg:flex-row lg:items-start lg:gap-12 lg:px-8">
        <aside className="w-full border-b border-[#222222] py-8 lg:sticky lg:top-0 lg:w-[151px] lg:shrink-0 lg:self-start lg:border-b-0 lg:py-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-start gap-4">
              <img
                src="/IMG_1288.jpg"
                alt={profile.name}
                className="h-20 w-20 rounded-full border border-[#3a3a3a] object-cover transition-colors duration-300 ease-out hover:border-[#8a8484]"
              />
              <div className="space-y-0.5">
                <p className="text-[18px] leading-7 text-[#f4f0f0]">
                  {profile.name}
                </p>
                <p className="whitespace-nowrap text-base leading-7 text-[#949494]">
                  {profile.role}
                </p>
              </div>
            </div>

            <nav aria-label="Primary navigation">
              <ul className="flex flex-col gap-4">
                {primaryNav.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className="group flex cursor-pointer items-center py-1"
                    >
                      {({ isActive }) => (
                        <span className="flex w-full items-center">
                          <span
                            className={[
                              "text-base leading-6 transition-colors duration-300 ease-out",
                              isActive ? "text-[#f4f0f0]" : "text-[#949494]",
                            ].join(" ")}
                          >
                            {item.label}
                          </span>
                        </span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        <div className="min-w-0 flex flex-1 flex-col py-10 lg:min-h-[100svh] lg:w-[632px] lg:py-20">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/stack" element={<StackPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>

          <footer className="mt-auto pt-16 text-center text-sm leading-5 text-[#949494] lg:pt-24">
            <p>Copyright 2026 {profile.name}</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
