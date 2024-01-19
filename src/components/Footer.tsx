export default function Footer() {
  return (
    <footer className="h-12 flex items-center justify-center gap-4 text-xs text-foreground/50">
      Harsh Sandhu © {new Date().getFullYear()}
    </footer>
  );
}
