import { StartWindow, FirstExcempleWebsite } from '@/components';
import dynamic from 'next/dynamic';

export const metadata = {
  title: 'Home',
  description: 'This is the main content of the application',
};

// const StartWindow = dynamic(() => import('@/components').then(module => module.StartWindow));
// const FirstExcempleWebsite = dynamic(() => import('@/components').then(module => module.FirstExcempleWebsite));

export default function Home() {
  return (
    <>
      <StartWindow />
      <FirstExcempleWebsite />
    </>
  );
}
