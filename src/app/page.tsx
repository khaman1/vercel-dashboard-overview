import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectSection from "@/components/ProjectSection";
import RepoSearch from "@/components/RepoSearch";

export default function Home() {
  return (
    <div>
      <Header />
      <section>
        <RepoSearch />
        <ProjectSection />
      </section>
      {/* <Footer /> */}
    </div>
  );
}
