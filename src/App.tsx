import { ThemeProvider } from "@/contexts/ThemeContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen selection:bg-primary/30 font-sans text-foreground">
        <Navbar />
        <ThemeToggle />
        <main className="flex flex-col relative">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        
        <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border mt-12 glass-card rounded-none border-b-0 border-l-0 border-r-0">
          <p>© {new Date().getFullYear()} Andreas Athallah. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
