import Header from "../components/Header";
import Button from "../components/Button";

export default function HomePage() {
  return (
    <div className="bg-foreground h-screen overflow-hidden flex items-center justify-center">
      {/* Conteneur central rose */}
      <div className="bg-pink-500 w-[90vw] max-w-7xl h-[90vh] rounded-[40px] p-10 md:p-12 flex flex-col shadow-2xl">
        {/* Header */}
        <Header />

        {/* Grille Bento principale */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1.85fr_1fr] gap-6 min-h-0">
          {/* ===== COLONNE GAUCHE ===== */}
          <div className="flex flex-col gap-6 min-h-0">
            {/* Bloc Hero (le plus grand) */}
            <div className="flex-1 bg-background/5 rounded-2xl p-8 flex flex-col justify-between min-h-0 overflow-hidden">
              <div>
                <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                  Animate Your Ideas Into Reality with Animaflix
                </h1>
                <p className="text-black/80 mt-4 text-base md:text-lg max-w-xl leading-relaxed">
                  Découvrez une expérience mobile pensée pour les passionnés
                  d'anime : une interface simple, un accès rapide aux contenus
                  disponibles et tout ce qu'il faut pour profiter de vos séries
                  préférées sur Android.
                </p>
              </div>

              {/* Placeholder illustration (main qui dessine) */}
              <div className="mt-6 h-36 md:h-44 bg-foreground/10 rounded-xl flex items-center justify-center border border-black/10">
                <svg
                  className="w-24 h-24 text-black/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
            </div>

            {/* Bloc CTA secondaire */}
            <div className="bg-background/10 rounded-2xl p-6 flex items-center justify-between gap-4 shrink-0">
              <div>
                <p className="text-black font-bold text-lg">Start for Free</p>
                <p className="text-black/70 text-sm mt-0.5">
                  No credit card required
                </p>
              </div>
              <Button className="bg-foreground text-pink-500 hover:bg-foreground/90 px-6 py-2.5 rounded-full font-semibold transition-colors whitespace-nowrap">
                Get Started
              </Button>
            </div>
          </div>

          {/* ===== COLONNE DROITE ===== */}
          <div className="flex flex-col gap-6 min-h-0">
            {/* Bloc "What is Animaflix?" */}
            <div className="bg-background/10 rounded-2xl p-6 shrink-0">
              <h2 className="text-black text-xl md:text-2xl font-bold">
                What is Animaflix?
              </h2>
              <p className="text-black/80 mt-3 text-sm md:text-base leading-relaxed">
                Animaflix est la plateforme idéale pour suivre vos animés
                préférés sur vos chaînes Canal+ favorites, gratuitement et en
                toute simplicité. Une interface claire, un accès rapide et une
                expérience pensée pour les vrais passionnés.
              </p>
            </div>

            {/* Bloc Image / Features */}
            <div className="flex-1 bg-background/5 rounded-2xl p-6 flex flex-col items-center justify-center min-h-0">
              {/* Placeholder illustration (appareil photo + upload + partage) */}
              <div className="w-full h-full min-h-40 bg-foreground/10 rounded-xl flex items-center justify-center border border-black/10">
                <div className="flex items-center gap-6 text-black/40">
                  {/* Camera */}
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {/* Upload */}
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  {/* Share */}
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
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
