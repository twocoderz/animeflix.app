export default function Footer() {
  return (
    <footer className="px-6 py-10 text-center">
      <p className="text-sm text-(--text-muted)">
        © {new Date().getFullYear()} Animeflix. Tous droits réservés.
      </p>
    </footer>
  );
}
