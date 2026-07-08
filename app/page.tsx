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
        alt="Frisch zubereitete Gerichte im brutzelnden Wok mit aufsteigendem Dampf"
        label="Frisch aus dem Wok"
        caption="Nahe, satte Food-Aufnahme · brutzelnder Wok · aufsteigender Dampf"
        tone="ember"
      />
      <BuffetMenu />
      <FeatureBand />
      <ImageBand
        alt="Farbenfrohe Gerichte, großzügig angerichtet mit glänzenden Saucen"
        label="Großzügig angerichtet"
        caption="Farbenfrohe Gerichte · glänzende Saucen · zum Teilen gemacht"
        tone="gold"
      />
      <MenuDownload />
      <Locations />
    </>
  );
}
