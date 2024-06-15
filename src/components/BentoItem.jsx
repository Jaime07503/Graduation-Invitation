export const BentoItem = ({
  className,
  title,
  subtitle,
  content,
  children,
}) => {
  return (
    <article
      className={`
                ${className}
                col-span-5
                rounded-lg
                backdrop-blur-md
                bg-white opacity-70
                border-4 border-double border-gold
                shadow-inner shadow-white/10
            `}
    >
      <div className="select-none flex flex-col gap-1 p-6 text-lg h-full">
        <h2 className="text-3xl text-balance text-gold mb-2">{title}</h2>
        {subtitle && (
          <h3 className="bg-gold/80 text-2xl mb-2 text-center text-black rounded-lg py-1">
            {subtitle}
          </h3>
        )}
        {content && (
          <p className="text-xl md:text-2xl text-pretty text-black">
            {content}
          </p>
        )}
        {children}
      </div>
    </article>
  );
};
