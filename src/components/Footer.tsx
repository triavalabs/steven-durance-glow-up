const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground">
          Website automation, branding, and design — powered by{" "}
          <a 
            href="https://www.pixelcloud9.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400 font-semibold transition-colors"
          >
            PixelCloud9 AI Agency
          </a>{" "}
          ⚡️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
