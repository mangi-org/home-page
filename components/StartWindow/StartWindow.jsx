import Image from 'next/image';
import backgroundImage from '@/assets/background_start_window_desctop.svg';
import styles from './StartWindow.module.css';

function StartWindow() {
  return (
    <div className={styles.startWindow}>
      <Image
        className={styles.backgroundImage}
        src={backgroundImage}
        alt="Задний фон"
      />
      <div className={styles.container}>
        <h1>Почему Вам нужен веб-сайт — чтобы завоевать доверие к бренду</h1>
      </div>
    </div>
  );
}

export default StartWindow;
