// app/game/page.jsx
export const metadata = {
  title: "Hostile Behavior",
  description: "Mini-shooter espacial hecho en Unity",
};

export default function GamePage() {
  return (
    <iframe
      src="/game/index.html"
      title="Hostile Behavior"
      allow="autoplay; fullscreen; gamepad"
      style={{
        display: "block",
        width: "100%",
        height: "calc(100vh - 64px)", // resta la altura de tu navbar
        border: "none",
      }}
    />
  );
}