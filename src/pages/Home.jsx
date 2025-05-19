import { Hero } from '../components/Hero'
import { AboutMe } from '../components/AboutMe'
import { ProjectsSection } from '../components/ProjectsSection'
import { Contact } from '../components/Contact'

export const Home = () => {

  return (
    <div>
        <Hero/>
        <main>
            <ProjectsSection/>
            <AboutMe/>
            <Contact/>
        </main>
    </div>
  );
}

