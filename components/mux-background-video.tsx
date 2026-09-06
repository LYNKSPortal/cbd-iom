"use client";

import { useEffect, useRef } from "react";
import type Hls from "hls.js";

export function MuxBackgroundVideo({
  playbackId,
  className,
}: {
  playbackId: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const src = `https://stream.mux.com/${playbackId}.m3u8`;
    let hls: Hls | undefined;
    let cancelled = false;

    // Prefer hls.js (MSE-based) wherever it's supported — this covers
    // Chrome, Firefox, and Edge. canPlayType() for HLS mime types is
    // unreliable (Chrome can report "maybe" while being unable to
    // actually play an .m3u8 via a native <video src>), so it's only
    // used as a last-resort fallback for browsers without MSE support
    // (i.e. real Safari / iOS).
    import("hls.js").then(({ default: HlsClass }) => {
      if (cancelled) return;
      if (HlsClass.isSupported()) {
        hls = new HlsClass();
        hls.loadSource(src);
        hls.attachMedia(video);
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
      }
    });

    return () => {
      cancelled = true;
      hls?.destroy();
    };
  }, [playbackId]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      poster={`https://image.mux.com/${playbackId}/thumbnail.jpg?time=0`}
    />
  );
}
