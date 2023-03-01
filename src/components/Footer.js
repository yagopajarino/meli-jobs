import Github from "./Github.js";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 w-full mt-5 text-lg text-white">
      <div className="flex flex-row py-5 items-center justify-center space-x-3">
        <Github />
        <a href="https://twitter.com/yagopajarino" className="text-gray-400">
          @yagopajarino
        </a>
      </div>
    </footer>
  );
}
