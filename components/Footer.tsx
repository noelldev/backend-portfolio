export default function Footer() {
  return (
    <footer className="bg-background text-muted-foreground py-8 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </div>
    </footer>
  )
}

