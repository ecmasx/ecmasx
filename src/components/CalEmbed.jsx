import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const CAL_EMBED_FLAG = "__calEmbedInitialized";

function CalEmbed() {
  useEffect(() => {
    let cancelled = false;

    async function initCal() {
      if (typeof window !== "undefined" && window[CAL_EMBED_FLAG]) {
        return;
      }

      const cal = await getCalApi({ namespace: "test" });

      if (cancelled) {
        return;
      }

      if (typeof window !== "undefined") {
        window[CAL_EMBED_FLAG] = true;
      }

      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    }

    initCal();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}

export default CalEmbed;
