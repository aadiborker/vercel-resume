import Header from "@/components/Header";
import JumpNav from "@/components/JumpNav";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-28">
      <JumpNav />
      <div className="space-y-24 sm:space-y-28">
        <Header />
        <ScrollReveal>
          <Experience />
        </ScrollReveal>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </div>
    </main>
  );
}
