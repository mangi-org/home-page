import {
  StartWindow,
  FirstExcempleWebsite,
  Creativity,
  WorkCards,
  Support,
  AboutUs,
  VideoSection
} from '@/components/Sections';
import React from 'react';

export const metadata = {
  title: 'Главная страница | Mangi.org',
  description: 'This is the main content of the application',
};

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
export default function Home(): JSX.Element {
  return (
    <>
      < StartWindow />
      < FirstExcempleWebsite />
      < Creativity />
      < WorkCards />
      < Support />
      < AboutUs />
      < VideoSection />
    </>
  );
}
