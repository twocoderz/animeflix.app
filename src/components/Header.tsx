import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex justify-between px-12 rounded-xl bg-background items-center mb-8 shrink-0">
      <Logo />
      <img
        src="/icons/androidIcon.svg"
        alt="android icon"
        className="w-12 h-12"
      />
    </header>
  );
}
