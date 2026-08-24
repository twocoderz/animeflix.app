import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex bg-background shrink-0 items-center justify-between mx-12 border-b-2 border-foreground rounded-4xl px-6 py-8 lg:px-8">
      <Logo size={128} />
      <img
        src="/icons/androidIcon.svg"
        alt="Android"
        className="h-8 w-8 sm:h-12 sm:w-12"
      />
    </header>
  );
}
