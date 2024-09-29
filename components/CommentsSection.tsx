"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export function CommentsSection() {
  const { theme } = useTheme();
  return (
    <div>
      <Giscus
        repo="ChandruSu/chandru-portfolio-v2"
        repoId="R_kgDOM28Rhg"
        category="General"
        categoryId="DIC_kwDOM28Rhs4Ci59M"
        mapping="pathname"
        strict="1"
        term="posts"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme={theme === "light" ? "light" : "dark"}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
