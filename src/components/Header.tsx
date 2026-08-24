import Logo from "./Logo";
import Button from "./Button";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-8 shrink-0">
      <Logo />
      <Button className="bg-black text-pink-500 hover:bg-black/90 px-6 py-2.5 rounded-full font-semibold transition-colors">
        Get Started
      </Button>
    </header>
  );
}
