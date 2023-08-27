import { StartWindow, FirstExcempleWebsite, Creativity, WorkCards } from '@/components';


export const metadata = {
  title: 'Home',
  description: 'This is the main content of the application',
};

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
export default function Home() {
  return (
    <>
      <StartWindow />
      <FirstExcempleWebsite />
      <Creativity />
      <WorkCards />
    </>
  );
}
