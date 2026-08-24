import Header from "../components/Header";

export default function HomePage() {
  return (
    <div className="bg-foreground h-screen overflow-hidden flex items-center justify-center">
      {/* Conteneur central rose */}
      <div className="bg-primary max-w-7xl rounded-sm p-10 md:p-12 flex flex-col">
        {/* Header */}
        <Header />

        {/* Contenu principal */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1.85fr_1fr] gap-6 min-h-0">
          <div className="flex flex-col gap-6 min-h-0"></div>
        </div>

        {/* Footer – logos TV */}
        <footer className="flex flex-wrap justify-center items-center gap-5 md:gap-7 mt-8 shrink-0">
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
        </footer>
      </div>
    </div>
  );
}
