// FILE: app/api/og/route.ts (Social preview via RSC/OG)
import { ImageResponse } from "next/og";
export const runtime = "edge";
export const contentType = "image/png";
export async function GET() {
return new ImageResponse(
(
<div style={{ fontSize: 64, background: "#0b0b0f", color: "white", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
Illusion Starter
</div>
),
{ width: 1200, height: 630 }
);
}