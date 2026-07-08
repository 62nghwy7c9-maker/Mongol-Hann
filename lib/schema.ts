import { locations, site } from './data';

// schema.org Restaurant entities — one per location — for rich results.
export function restaurantJsonLd() {
  return locations.map((loc) => {
    const [street, cityLine] = loc.address.split(', ');
    const [postal, ...cityParts] = (cityLine ?? '').split(' ');
    return {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: `${site.name} ${loc.city}`,
      servesCuisine: ['Chinese', 'Mongolian'],
      priceRange: '€€',
      telephone: loc.phoneHref,
      url: site.url,
      address: {
        '@type': 'PostalAddress',
        streetAddress: street,
        postalCode: postal,
        addressLocality: cityParts.join(' '),
        addressCountry: 'DE',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '12:00',
          closes: '15:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '17:30',
          closes: '22:30',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Sunday',
          opens: '12:00',
          closes: '22:30',
        },
      ],
    };
  });
}
