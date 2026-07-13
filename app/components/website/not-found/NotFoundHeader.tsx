import { FaBell, FaCog } from "react-icons/fa";

export default function NotFoundHeader() {
  return (
    <header className="fixed top-0 w-full h-16 flex justify-between items-center px-margin-desktop border-b border-outline-variant bg-surface z-50">
      <div className="font-display-lg text-headline-md font-bold text-solar-orange tracking-tight">
        SnippetVault
      </div>
      <div className="flex items-center gap-md">
        <FaBell className="text-on-surface-variant cursor-pointer hover:text-solar-orange transition-colors" />
        <FaCog className="text-on-surface-variant cursor-pointer hover:text-solar-orange transition-colors" />
      </div>
    </header>
  );
}
