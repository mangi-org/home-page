import Image from 'next/image';
import { ScrollBottom } from '@/components/UI';
import backgroundImage from '@/assets/philip-oroni-v0PnusRa6aM-unsplash 1.png';
import styles from './StartWindow.module.css';

/**
 * Renders the start window component.
 *
 * @returns {JSX.Element} The rendered start window component.
 */
function StartWindow() {
  return (
    <section className={"flex flex-col items-center justify-center text-center min-h-screen " + styles.startWindow}>
      {/* <Image
        className="absolute left-0 top-0 -z-10 object-cover pointer-events-none h-full w-full"
        src={backgroundImage}
        alt="Задний фон"
      />
      <div className="flex items-center flex-shrink-0 w-screen md:max-w-4xl">
        <h1 className="text-4xl">Почему Вам нужен веб-сайт — чтобы завоевать доверие к бренду</h1>
      </div> */}
      <Image
        className="-z-10 cursor-none object-cover h-screen w-full"
        src={backgroundImage}
        alt="Задний фон"
      />
      <div className="absolute flex items-center flex-shrink-0 w-full md:max-w-4xl px-1">
        <h1 className="text-4xl">Почему Вам нужен веб-сайт — чтобы завоевать доверие к бренду</h1>
      </div>
      <ScrollBottom />
    </section>
  );
}

export default StartWindow;
