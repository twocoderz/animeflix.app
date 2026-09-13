export type Channel = {
  id: string;
  name: string;
  logo: string;
};

export const channels: Channel[] = [
  { id: "daria", name: "Daria", logo: "/tv_logos/01_Daria.png" },
  { id: "duck-tv", name: "Duck TV", logo: "/tv_logos/02_Duck TV.png" },
  {
    id: "filmrise-anime",
    name: "FilmRise Anime",
    logo: "/tv_logos/03_FilmRise Anime.png",
  },
  { id: "gong", name: "Gong", logo: "/tv_logos/04_Gong.png" },
  {
    id: "mr-bean-anime",
    name: "Mr Bean Animé",
    logo: "/tv_logos/05_Mr Bean Animé.png",
  },
  { id: "naruto", name: "Naruto", logo: "/tv_logos/06_Naruto.png" },
  {
    id: "pluto-tv-retro-toons",
    name: "Pluto TV Retro Toons",
    logo: "/tv_logos/07_Pluto TV Retro Toons.png",
  },
  {
    id: "pluto-tv-toons",
    name: "Pluto TV Toons",
    logo: "/tv_logos/08_Pluto TV Toons.png",
  },
  {
    id: "retrocrush",
    name: "RetroCrush",
    logo: "/tv_logos/09_RetroCrush.png",
  },
  { id: "tiny-pop", name: "Tiny Pop", logo: "/tv_logos/10_Tiny Pop.png" },
  { id: "yu-gi-oh", name: "Yu-Gi-Oh!", logo: "/tv_logos/11_Yu-Gi-Oh.png" },
];
