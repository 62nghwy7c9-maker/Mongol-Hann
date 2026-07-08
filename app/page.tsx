import { Hero } from '@/components/sections/hero';
import { BrandStory } from '@/components/sections/brand-story';
import { ImageBand } from '@/components/sections/image-band';
import { BuffetMenu } from '@/components/sections/buffet-menu';
import { FeatureBand } from '@/components/sections/feature-band';
import { MenuDownload } from '@/components/sections/menu-download';
import { Locations } from '@/components/sections/locations';

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStory />
      <ImageBand
        src="/images/teppan.jpg"
        alt="Meeresfrüchte, Fleisch und Gemüse brutzeln auf dem heißen Grill, Dampf steigt auf"
        label="Frisch vom Grill"
        caption="Meeresfrüchte, Fleisch & Gemüse – brutzelnd frisch, mit aufsteigendem Dampf"
        tone="ember"
      />
      <BuffetMenu />
      <FeatureBand />
      <ImageBand
        src="/images/sushi.jpg"
        alt="Frisch gerollte Sushi mit glänzender Sauce im warmen Licht"
        label="Frisch gerollt"
        caption="Frisches Sushi · glänzende Saucen · zum Teilen gemacht"
        tone="gold"
      />
      <MenuDownload />
      <Locations />
    </>
  );
}
