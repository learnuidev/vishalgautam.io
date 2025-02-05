import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["mdx", "ts", "tsx"],
};

const withMdx = createMDX({});

const nextWithMdx = withMdx(nextConfig);

export default nextWithMdx;
