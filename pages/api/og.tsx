import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

import seo from "src/seo";

export const config = {
  runtime: "edge",
};

export default function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const slug = searchParams.get("slug");
  const title = seo[slug]?.title || "Regex Dictionary";
  const regex = seo[slug]?.regex || "^$";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#3B82F6",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            background: "white",
            width: "80%",
            height: "80%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          tw="rounded-xl shadow-xl"
        >
          <h1 tw="text-6xl font-bold">{title}</h1>
          <h2 tw="text-4xl font-mono">/{regex}/</h2>
          <h3 tw="text-2xl">RegexDictionary.com</h3>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
