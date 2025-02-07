import { useEffect, useRef } from "react";
import bgMusic from "./music/bgMusic.mp3"; // ✅ Faylni import qildik

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          console.log(
            "Autoplay bloklandi, foydalanuvchi ruxsat berishi kerak."
          );
        });
      }
    };

    document.addEventListener("click", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src={bgMusic} type="audio/mp3" />
    </audio>
  );
};

export default BackgroundMusic;
