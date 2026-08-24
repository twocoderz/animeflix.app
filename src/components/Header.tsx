import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex bg-background shrink-0 items-center justify-between mx-12 mt-12 rounded-4xl px-6 py-2 sm:px-10 sm:py-7 lg:px-8">
      <Logo size={256} />
      <img
        src="/icons/androidIcon.svg"
        alt="Android"
        className="h-8 w-8 sm:h-10 sm:w-10"
      />
    </header>
  );
}
