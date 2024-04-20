import styles from "./page.module.scss";
import Image  from "next/image";

export default function Home() {
  
  const socialLinks = (
    <div className={styles.socialLinks}>
      <button >
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width={40} height={40}>
    <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z"></path>
</svg>
      </button>
      <button>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={40} height={40}viewBox="0 0 48 48">
<path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z"></path>
</svg>
      </button>
      <button>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  width={50} height={50} viewBox="0 0 64 64">
<path d="M 31.820312 12 C 13.439312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.439312 52 31.820312 52 L 32.179688 52 C 50.560688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 28 16 L 36 16 C 47.129 16 48 16.871 48 28 L 48 36 C 48 47.129 47.129 48 36 48 L 28 48 C 16.871 48 16 47.129 16 36 L 16 28 C 16 16.871 16.871 16 28 16 z M 41.994141 20 C 40.889141 20.003 39.997 20.900859 40 22.005859 C 40.003 23.110859 40.900859 24.003 42.005859 24 C 43.110859 23.997 44.003 23.099141 44 21.994141 C 43.997 20.889141 43.099141 19.997 41.994141 20 z M 31.976562 22 C 26.454563 22.013 21.987 26.501437 22 32.023438 C 22.013 37.545437 26.501437 42.013 32.023438 42 C 37.545437 41.987 42.013 37.498562 42 31.976562 C 41.987 26.454563 37.498562 21.987 31.976562 22 z M 31.986328 26 C 35.299328 25.992 37.992 28.673328 38 31.986328 C 38.007 35.299328 35.326672 37.992 32.013672 38 C 28.700672 38.008 26.008 35.327672 26 32.013672 C 25.992 28.700672 28.673328 26.008 31.986328 26 z"></path>
</svg>
      </button>
      <button>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={35} height={35} viewBox="0 0 50 50">
<path d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"></path>
</svg>
      </button>
      
    </div>
  )
  return (
    <main className={styles.main}>
      {socialLinks}
      <div className={styles['hero-section']}>
      <div className={styles.name}>Sheetal Dadhich</div>
      <button className={styles['scroll-button']}>
      <Image height={30} width={30} alt="chevron" src="data:image/png;base64,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"/>
      </button>
      </div>
     jhjh
    </main>
  );
}
