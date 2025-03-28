export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        src="https://serene-gk9lark5.peachworlds.com/"
        className="w-full h-full border-0"
        title="External Website"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; geolocation; gyroscope; picture-in-picture"
      />
    </div>
  );
}
