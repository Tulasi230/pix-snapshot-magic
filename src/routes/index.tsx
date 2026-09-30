import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CEZOO — Mango Juice with Free Delivery" },
      {
        name: "description",
        content:
          "CEZOO delivers ice-cold, 100% natural mango juice to your door for free. No added sugar, always chilled.",
      },
      { property: "og:title", content: "CEZOO — Mango Juice with Free Delivery" },
      {
        property: "og:description",
        content: "Ice-cold, 100% natural mango juice delivered free to your door.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/site.html"
      title="Cezoo"
      style={{ border: 0, width: "100vw", height: "100vh", display: "block" }}
    />
  );
}
