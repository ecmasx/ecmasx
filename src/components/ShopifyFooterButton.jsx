import { useRef, useState } from "react";
import { useWebHaptics } from "web-haptics/react";

function ShopifyIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 512 512"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M425.228 100.457s-.425-2.308-1.734-3.144c-1.311-.836-2.732-.998-2.732-.998l-41.082-3.057-30.228-30.053c-1.147-.874-2.471-1.385-3.817-1.66-3.219-.624-7.548.125-8.347.312l-15.682 4.853c-6.812-20.11-16.118-34.432-27.795-42.716-8.634-6.101-18.146-8.695-28.363-7.922-2.146-2.857-4.51-5.352-7.099-7.448-11.334-9.157-25.955-10.579-43.446-4.241-52.454 19.05-74.722 87.029-82.75 120.987L86.437 139.53s-10.767 3.069-13.293 6.088c-2.775 3.318-3.306 12.301-3.306 12.301l-38.78 299.087L323.215 511.5l157.728-34.133-55.715-376.91ZM263.326 84.763l-50.513 15.632c6.693-26.211 19.555-52.996 44.145-63.438 5.108 13.374 6.518 31.675 6.368 47.806Zm-42.429-63.862c10.685-3.88 18.894-3.706 25.069.461-32.96 15.033-47.351 52.909-53.563 85.357l-40.445 12.525c9.032-32.66 29.186-83.909 68.939-98.343Zm28.307 220.417c-2.314-1.123-5.046-2.321-8.134-3.456-3.063-1.147-6.475-2.233-10.174-3.131-3.662-.898-7.604-1.622-11.758-2.046-4.117-.437-8.44-.574-12.918-.312-4.11.25-7.834.985-11.109 2.158-3.256 1.148-6.075 2.745-8.396 4.729-2.32 1.971-4.148 4.329-5.439 7.049-1.279 2.707-2.034 5.751-2.177 9.132-.112 2.508.281 4.903 1.16 7.235.879 2.346 2.258 4.641 4.129 6.912 1.884 2.295 4.267 4.565 7.167 6.886 2.913 2.358 6.351 4.729 10.317 7.211 5.564 3.568 11.253 7.585 16.661 12.188 5.489 4.679 10.679 9.956 15.139 15.969 4.517 6.076 8.271 12.888 10.804 20.522 2.545 7.71 3.849 16.206 3.438 25.562-.667 15.308-4.023 28.506-9.569 39.447-5.477 10.804-13.037 19.287-22.144 25.45-8.907 6.013-19.225 9.743-30.446 11.24-10.897 1.459-22.581.811-34.632-1.847-.088-.013-.188-.05-.287-.075-.094-.012-.188-.037-.281-.049-.093-.025-.187-.051-.287-.075-.094-.013-.188-.038-.287-.062-5.651-1.372-11.104-3.144-16.225-5.228-5.046-2.033-9.781-4.354-14.097-6.861-4.254-2.482-8.109-5.14-11.446-7.896-3.3-2.732-6.107-5.539-8.309-8.371l13.292-44.113c2.246 1.896 4.99 4.055 8.115 6.237 3.156 2.233 6.706 4.504 10.504 6.637 3.842 2.146 7.947 4.13 12.17 5.751 4.279 1.635 8.683 2.907 13.049 3.543 3.855.562 7.298.449 10.311-.224 3.038-.687 5.626-1.946 7.748-3.681 2.133-1.709 3.786-3.893 4.94-6.4 1.154-2.532 1.809-5.364 1.934-8.396.137-3.044-.138-5.901-.905-8.671-.761-2.781-2.008-5.464-3.799-8.158-1.791-2.683-4.111-5.377-7.048-8.159-2.907-2.757-6.394-5.602-10.523-8.62-5.084-3.793-9.85-7.897-14.122-12.363-4.217-4.417-7.959-9.195-11.022-14.372-3.031-5.14-5.42-10.691-6.967-16.729-1.541-6.001-2.251-12.501-1.953-19.587.524-11.839 2.889-22.755 6.85-32.573 4.004-9.931 9.674-18.838 16.785-26.511 7.255-7.822 16.075-14.422 26.242-19.499 10.461-5.228 22.419-8.895 35.674-10.629 6.15-.812 12.052-1.186 17.628-1.21 5.664-.025 10.985.312 15.881.936 4.965.636 9.488 1.559 13.499 2.694 4.042 1.147 7.548 2.495 10.436 3.967l-6.481 47.721ZM280.836 79.349c-.025-1.983-.075-3.992-.149-6.038-.587-15.719-2.721-28.956-6.351-39.685 3.955.399 7.548 1.709 10.829 4.03 9.145 6.475 15.731 19.511 20.372 34.045l-24.701 7.648Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SmileIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 18c4 0 5-4 5-4H7s1 4 5 4z"
        fill="currentColor"
      />
      <path
        d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"
        fill="currentColor"
      />
      <path
        d="m8.535 12.634 2.05-2.083a1.485 1.485 0 0 0-.018-2.118 1.49 1.49 0 0 0-2.065-.034 1.488 1.488 0 0 0-2.067.068c-.586.6-.579 1.53.019 2.117l2.081 2.05zm7 0 2.05-2.083a1.485 1.485 0 0 0-.018-2.118 1.49 1.49 0 0 0-2.065-.034 1.488 1.488 0 0 0-2.068.067c-.586.6-.579 1.53.019 2.117l2.082 2.051z"
        fill="currentColor"
      />
    </svg>
  );
}

function CartIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CardIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10 16.5H6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M8 13.5H6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M2 10L22 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M14 15C14 14.0572 14 13.5858 14.2929 13.2929C14.5858 13 15.0572 13 16 13C16.9428 13 17.4142 13 17.7071 13.2929C18 13.5858 18 14.0572 18 15C18 15.9428 18 16.4142 17.7071 16.7071C17.4142 17 16.9428 17 16 17C15.0572 17 14.5858 17 14.2929 16.7071C14 16.4142 14 15.9428 14 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

const particleIcons = [SmileIcon, CartIcon, CardIcon];

function ShopifyFooterButton() {
  const { trigger } = useWebHaptics();
  const [particles, setParticles] = useState([]);
  const nextIdRef = useRef(0);

  function handleClick() {
    trigger("success");

    const burst = Array.from({ length: 10 }, () => {
      return {
        id: nextIdRef.current++,
        Icon: particleIcons[Math.floor(Math.random() * particleIcons.length)],
        x: `${Math.round((Math.random() - 0.5) * 110)}px`,
        y: `${-1 * (120 + Math.round(Math.random() * 90))}px`,
        delay: `${Math.round(Math.random() * 90)}ms`,
        scale: `${0.5 + Math.random() * 0.55}`,
        rotate: `${Math.round(-160 + Math.random() * 320)}deg`,
      };
    });

    setParticles((current) => [...current, ...burst]);

    window.setTimeout(() => {
      setParticles((current) =>
        current.filter(
          (particle) => !burst.some((spawned) => spawned.id === particle.id),
        ),
      );
    }, 1400);
  }

  return (
    <div className="relative inline-flex">
      {particles.map((particle) => (
        <span
          key={particle.id}
          aria-hidden="true"
          className="shopify-burst pointer-events-none absolute left-1/2 top-1/2 z-10 text-[#f4f0f0]"
          style={{
            "--shopify-x": particle.x,
            "--shopify-y": particle.y,
            "--shopify-delay": particle.delay,
            "--shopify-scale": particle.scale,
            "--shopify-rotate": particle.rotate,
          }}
        >
          <particle.Icon className="h-4.5 w-4.5" />
        </span>
      ))}

      <button
        aria-label="Shopify"
        className="relative inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border border-[#5b5656] bg-[#191919] text-[#f4f0f0] transition-colors duration-300 ease-out hover:border-[#8a8484]"
        onClick={handleClick}
        type="button"
      >
        <ShopifyIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ShopifyFooterButton;
