export const Header = () => {
  return (
    <header
      className="
                flex flex-col items-center justify-center
                sm:flex-row
                sm:gap-4
                p-2 backdrop-blur-md
                bg-gold/80 opacity-70
                select-none
            "
    >
      <h1
        className="
                    text-white text-4xl
                    text-center
                    md:text-5xl
                    rounded-lg
                "
      >
        INVITACIÓN DE GRADUACIÓN
      </h1>
      <img
        className="
                    size-16
                "
        src="./src/assets/graduation_cap.svg"
        alt="Icono de Birrete de Graduación"
      />
    </header>
  );
};
