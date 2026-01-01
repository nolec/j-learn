import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig: NextConfig = {
  // Workspace root를 lockfile로 잘못 추론하는 경우(상위 폴더에 yarn.lock 등) 대비
  outputFileTracingRoot: __dirname,
};

export default nextConfig;


