import { Link } from "react-router-dom";

export type LogoProps = {
  size?: number;
  className?: string;
};

export default function Logo(props: LogoProps) {
  const { size = 64, className } = props;

  return (
    <Link to="/" aria-label="Go to home page">
      <img
        src="/logos/animeflix-32.svg"
        srcSet="/logos/animeflix-32.svg 32w, /logos/animeflix-64.svg 64w,"
        sizes={`${size}px`}
        width={size}
        height={size}
        alt="Website logo"
        className={className}
      />
    </Link>
  );
}
