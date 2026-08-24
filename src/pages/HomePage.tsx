import Header from "../components/Header";
import Button from "../components/Button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-foreground px-3 py-3 sm:px-6 sm:py-6 lg:px-10 lg:py-10">
      <div className="relative mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[1908px] flex-col overflow-hidden border-2 border-foreground bg-background rounded-2xl sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-5rem)]">
        <Header />

        <section className="relative flex flex-1 items-center justify-center px-6 py-8 lg:px-12">
          <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
            <h1 className="max-w-3xl text-4xl leading-[0.95] text-foreground sm:text-6xl lg:text-6xl">
              Suivez vos animés préférés sur vos chaînes Canal + préférées
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-relaxed text-foreground/65 md:text-2xl">
              Découvrez une expérience mobile pensée pour les passionnés d'anime
              : une interface simple, un accès rapide aux contenus disponibles
              et tout ce qu'il faut pour profiter de vos séries préférées sur
              Android.
            </p>

            <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-7">
              <div className="flex h-20 w-28 items-center justify-center border-2 border-foreground bg-primary p-4 shadow-[5px_5px_0_#000]">
                <img
                  src="/icons/androidIcon.svg"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <Button className="min-h-16 px-7 text-xl sm:px-9 md:text-2xl text-background">
                Telecharger Animeflix
                <span aria-hidden="true" className="ml-3 text-2xl leading-none">
                  ↓
                </span>
              </Button>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 hidden h-32 w-20 rotate-6 items-center justify-center border-2 border-foreground bg-primary p-3 shadow-[6px_6px_0_#000] lg:flex">
            <img
            src="/tv_logos/01_Daria.png"
            alt="Daria"
            className="h-8 md:h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
          <img
            src="/tv_logos/02_Duck%20TV.png"
            alt="Duck TV"
            className="h-8 md:h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
          <img
            src="/tv_logos/03_FilmRise%20Anime.png"
            alt="FilmRise Anime"
            className="h-8 md:h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
          <img
            src="/tv_logos/04_Gong.png"
            alt="Gong"
            className="h-8 md:h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
          <img
            src="/tv_logos/05_Mr%20Bean%20Anim%C3%A9.png"
            alt="Mr Bean Animé"
            className="h-8 md:h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
          <img
            src="/tv_logos/06_Naruto.png"
            alt="Naruto"
            className="h-8 md:h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
          <img
            src="/tv_logos/07_Pluto%20TV%20Retro%20Toons.png"
            alt="Pluto TV Retro Toons"
            className="h-8 md:h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
          <img
            src="/tv_logos/08_Pluto%20TV%20Toons.png"
            alt="Pluto TV Toons"
            className="h-8 md:h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
          <img
            src="/tv_logos/09_RetroCrush.png"
            alt="RetroCrush"
            className="h-8 md:h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
          <img
            src="/tv_logos/10_Tiny%20Pop.png"
            alt="Tiny Pop"
            className="h-8 md:h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
          <img
            src="/tv_logos/11_Yu-Gi-Oh.png"
            alt="Yu-Gi-Oh"
            className="h-8 md:h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
          </div>
        </section>
      </div>
    </main>
  );
}
