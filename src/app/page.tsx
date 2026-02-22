import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { CollectionSection } from '@/components/landing/CollectionSection';
import { RoadmapSection } from '@/components/landing/RoadmapSection';
import { CommunitySection } from '@/components/landing/CommunitySection';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <RoadmapSection />
      <CommunitySection />
      <Footer />
    </main>
  );
}
