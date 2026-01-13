const figures = [
    {
        cover: true,
        image: "2021_SummerSzechenyiSzfv-85nap.jpg",
        caption: "Nyári szünetben",
        text: "Nyári szünetben a Széchenyiben",
        days: 85
    },
    {
        image: "fa_szogesdrot-95nap.jpg",
        caption: "Nyárfa egy garázs soron",
        text: "A képen páralecspódás, penész okozta nyomok",
        days: 95
    },
    {
        notBeVisibility: true,
        image: "329nap_tolgyesben.jpg",
        caption: "Tölgyesben",
        text: "",
        days: 329
    },
    {     
        notBeVisibility: true,
        image: "189nap_kilataskeletre.jpg",
        caption: "Kilátás keletre néző szobából",
        days: 189
    },
    {
        image: "168nap_inotaik.jpg",
        caption: "Inotai hűtőtornyok",
        text: "Két képből összemontírozva",
        days: 168
    },
    {
        image: "168nap_inotaieromu.jpg",
        caption: "Inotai hűtőtornyok",
        days: 168
    },
    {
        image: "160nap _szolarizalt.jpg",
        caption: "Szolarizált szolárgáfia",
        text: "Kilátás a hetedikről",
        days: 160
    },
    {
        image: "157nap.jpg",
        caption: "Építkezés",
        days: 157
    },
    {
        image: "126nap_csonakazoto.jpg",
        caption: "Tóparton",
        text: "Csonakázó tó"
    },
    {
        image: "79nap_adasban.jpg",
        caption: "Adásban 79 napon keresztül",
        text: "",
        days: 79
    },
]

figures.sort(() => Math.random() - 0.5); // kb. véletlen sorrend, keverés

console.log (figures)


