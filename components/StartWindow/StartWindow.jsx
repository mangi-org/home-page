import Image from 'next/image';
import backgroundImage from '@/assets/philip-oroni-v0PnusRa6aM-unsplash 1.svg';
import styles from './StartWindow.module.css';
import { ScrollBottom } from '../ScrollBottom';

/**
 * Renders the start window component.
 *
 * @returns {JSX.Element} The rendered start window component.
 */
function StartWindow() {
  return (
    <section className={styles.startWindow}>
      <Image
        className={styles.backgroundImage}
        src={backgroundImage}
        alt="Задний фон"
      />
      <div className={styles.container}>
        <h1>Почему Вам нужен веб-сайт — чтобы завоевать доверие к бренду</h1>
      </div>
      <ScrollBottom />
    </section>
  );
}

export default StartWindow;
