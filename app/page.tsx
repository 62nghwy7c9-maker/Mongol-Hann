import { Hero } from '@/components/sections/hero';
import { BrandStory } from '@/components/sections/brand-story';
import { MongolGrill } from '@/components/sections/mongol-grill';
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
      <MongolGrill />
      <ImageBand
        src="/images/salatbar.jpg"
        alt="Frische Salatbar mit knackigem Gemüse – Zucchini, Karotten, Brokkoli, Paprika"
        label="Vom frischen Buffet"
        caption="Knackiges Gemüse · bunte Salatbar · täglich frisch zubereitet"
        tone="wood"
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
