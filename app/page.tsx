import {
  StartWindow,
  FirstExcempleWebsite,
  Creativity,
  WorkCards,
  Support,
  AboutUs,
} from '@/components/Sections';
import React from 'react';

export const metadata = {
  title: 'Home',
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
    </>
  );
}
