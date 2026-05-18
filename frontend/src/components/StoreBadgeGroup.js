import { useMemo } from "react";

import { GOOGLE_PLAY_URL, APP_STORE_URL } from "@/content/landingContent";

const STORE_URLS = {
  googlePlay: GOOGLE_PLAY_URL,
  appStore: APP_STORE_URL,
};

const storeBadgeAssets = {
  ro: {
    appStore: {
      src: "/assets/store/app-store-ro.svg",
      alt: "Descarcă Meetings.ro din App Store",
    },
    googlePlay: {
      src: "/assets/store/play-store-ro.png",
      alt: "Descarcă Meetings.ro din Google Play",
    },
  },
  en: {
    appStore: {
      src: "/assets/store/app-store-en.svg",
      alt: "Download Meetings.ro from the App Store",
    },
    googlePlay: {
      src: "/assets/store/play-store-en.png",
      alt: "Download Meetings.ro from Google Play",
    },
  },
};

const getPreferredOrder = () => {
  if (typeof navigator === "undefined") {
    return ["appStore", "googlePlay"];
  }

  const userAgent = navigator.userAgent || "";
  const isIOSDevice = /iPhone|iPad|iPod/i.test(userAgent) || (/Macintosh/i.test(userAgent) && navigator.maxTouchPoints > 1);
  const isSafari = /Safari/i.test(userAgent) && !/CriOS|FxiOS|EdgiOS|Chrome|Chromium|Android/i.test(userAgent);
  const isAndroidChrome = /Android/i.test(userAgent) && /Chrome/i.test(userAgent);

  if (isIOSDevice || isSafari) {
    return ["appStore", "googlePlay"];
  }

  if (isAndroidChrome) {
    return ["googlePlay", "appStore"];
  }

  return ["appStore", "googlePlay"];
};

export const StoreBadgeGroup = ({
  lang,
  tooltip,
  label,
  compact = false,
  testIdPrefix,
  className = "",
}) => {
  const orderedBadges = useMemo(() => {
    const preferredOrder = getPreferredOrder();
    const assets = storeBadgeAssets[lang];

    return preferredOrder.map((key) => ({ key, ...assets[key] }));
  }, [lang]);

  return (
    <div className={`store-badge-cluster ${compact ? "compact" : ""} ${className}`.trim()}>
      {label ? <span className="store-badge-label">{label}</span> : null}
      <div className="store-badge-row" data-testid={testIdPrefix}>
        {orderedBadges.map((badge) => {
          const url = STORE_URLS[badge.key];
          const isLive = Boolean(url);
          return (
            <a
              key={`${testIdPrefix}-${badge.key}`}
              href={isLive ? url : "#"}
              aria-label={badge.alt}
              className="store-badge-link"
              data-testid={`${testIdPrefix}-${badge.key}`}
              target={isLive ? "_blank" : undefined}
              rel={isLive ? "noopener noreferrer" : undefined}
              onClick={isLive ? undefined : (e) => e.preventDefault()}
            >
              <img src={badge.src} alt={badge.alt} className="store-badge-image" loading="lazy" />
            </a>
          );
        })}
      </div>
    </div>
  );
};
