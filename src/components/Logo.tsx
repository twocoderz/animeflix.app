import { Link } from "react-router-dom";
import LogoWordmark from "./LogoWordmark";

export type LogoProps = {
  size?: number;
  className?: string;
};

export default function Logo(props: LogoProps) {
  const { size = 64, className } = props;

  return (
    <Link to="/" aria-label="Go to home page">
      <LogoWordmark
        size={size}
        className={className}
        style={{ color: "var(--text)" }}
      />
    </Link>
  );
}
