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

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    } else {
      import("hls.js").then(({ default: HlsClass }) => {
        if (HlsClass.isSupported()) {
          hls = new HlsClass();
          hls.loadSource(src);
          hls.attachMedia(video);
        }
      });
    }

    return () => {
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
