/* Morse kós, magyar mnemonikok
     http://020cserkeszcsapat.lapunk.hu/morze-1159264
*/

/* https://hu.wikipedia.org/wiki/Morzek%C3%B3d

    Időzítés
        rövid (ti)                          1 egység
        hosszú (tá)                         3 egys.
        jelköz (betűn belül)                1 egys.
        betűköz (betűk között)              3 egys.
        szóköz (szavak, mondatok között)    7 egys.
*/

/* 
    célszerű lehet ABC sorrend helyett általános, szövegben előforduló betűgyakoriság szerint rendezni,
    hogy ha meg van a "betű" a többin ne fusson végig
    Betűgykoriság a Morse ABC-ben ? 
    Gyakori betűk, rövid kód, ritka betűk hosszú kód
*/


const morseCodes = [
    {   char: ' ',
        code: ' ',
        mnemonik: ['   ']
    },
    {   char: 'A',
        code: '. _',
        mnemonik: ['akác', 'anyám', 'apám', 'agár']
    },
    {   char: 'B',
        code: '_ . . .',
        mnemonik: ['békababa', 'békapete', 'békepipa']
    },
    {   char: 'C',
        code: '_ . _ .',
        mnemonik: ['céklarépa']
    },
    {   char: 'D',
        code: '_ . .',
        mnemonik: ['Dánia', 'Dárius', 'dédanya']
    },
    {   char: 'E',
        code: '.',
        mnemonik: ['eb', 'egy']
    },
    {   char: 'F',
        code: '. . _ .',
        mnemonik: ['Feribácsi', 'fakutyákon', 'feleségem', 'falióra']
    },
    {   char: 'G',
        code: '_ _ .',
        mnemonik: ['gázkályha', 'gázlámpa', 'gólyáskert', 'gázóra', 'gránátos', 'Gálbácsi']
    },
    {   char: 'H',
        code: '. . . .',
        mnemonik: ['hephupa', 'haramia']
    },
    {   char: 'I',
        code: '. .',
        mnemonik: ['Imi', 'ige', 'ima']
    },
    {   char: 'J',
        code: '. _ _ _',
        mnemonik: ['japáncsászár']
    },
    {   char: 'K',
        code: ' _ . _',
        mnemonik: ['Klárikám','kék a rúd', 'kőtörő']
    },
    {   char: 'L',
        code: '. _ . .',
        mnemonik: ['libásLili','LibásMisi', 'Leányfalu','legényember','litánia']
    },
    {   char: 'M',
        code: '_ _',
        mnemonik: ['Mátyás','mártás', 'móló']
    },
    {   char: 'N',
        code: '_ .',
        mnemonik: ['néni', 'Nelli']
    },
    {   char: 'O',
        code: '_ _ _',
        mnemonik: ['órán át','órát néz', 'óvónő', 'ócsárlás']
    },
    {   char: 'P',
        code: '. _ _ .',
        mnemonik: ['pipás bácsi', 'pipás pópa']
    },
    {   char: 'Q',
        code: '_ _ . _',
        mnemonik: ['kvártélyozás', 'kvá-kvá-ko-á']
    },
    {   char: 'R',
        code: '. _ .',
        mnemonik: ['rigófütty', 'rigódal', 'riszálni', 'rigócska', 'rakéta']
    },
    {   char: 'S',
        code: '. . .',
        mnemonik: ['Samuka', 'Salamon',	'sebesen']
    },
    {   char: 'T',
        code: '_',
        mnemonik: ['tűz']
    },
    {   char: 'U',
        code: '. . _',
        mnemonik: ['ugatás', 'utitárs', 'Ubul úr']
    },
    {   char: 'V',
        code: '. . . _',
        mnemonik: ['V.szinfónia', 'verekedés']
    },
    {   char: 'W',
        code: '. _ _',
        mnemonik: ['wattmérő']
    },
    {   char: 'X',
        code: '_ . . _',
        mnemonik: ['Xénia szép']
    },
    {   char: 'Y',
        code: '_ . _ _',
        mnemonik: ['yógalégzés']
    },
    {   char: 'Z',
        code: '_ _ . .',
        mnemonik: ['zászlós Misi', 'zászlóanya', 'zászlórudak', 'zászlójelek']
    },
    /* ékezetes betűk, helyettesítésük
        Á   ->    A
        É   ->    E
        Í   ->    I
        Ó   ->    O
        Ö -> Ő -> O
        Ú   ->    U
        Ű -> Ü -> U
    */

        {   char: 'Á',
            code: '. _ _ _',
            mnemonik: ['ákácméznyalás', 'ájándékozás']
        },
        {   char: 'É',
            code: '. . _ . .',
            mnemonik: ['ez az é jele']
        },
        {   char: 'Ő',
            code: '_ _ _ .',
            mnemonik: ['őrállások', 'őrség vége', 'őslénytáros']
        },
        {   char: 'Ü',
            code: '_ _ _ .',
            mnemonik: ['üvegtálból', 'üvegállvány', 'ürülábszár']
        },

    // számok
        {   char: '0',
            code: '_ _ _ _ _',
            mnemonik: []
        },
        {   char: '1',
            code: '. _ _ _ _',
            mnemonik: []
        },
        {   char: '2',
            code: '. . _ _ _',
            mnemonik: []
        },
        {   char: '3',
            code: '. . . _ _',
            mnemonik: []
        },
        {   char: '4',
            code: '. . . . _',
            mnemonik: []
        },
        {   char: '5',
            code: '. . . . .',
            mnemonik: []
        },
        {   char: '6',
            code: '_ . . . .',
            mnemonik: []
        },
        {   char: '7',
            code: '_ _ . . .',
            mnemonik: []
        },
        {   char: '8',
            code: '_ _ _ . .',
            mnemonik: []
        },
        {   char: '9',
            code: '_ _ _ _ .',
            mnemonik: []
        },
    // írásjelek

    //
    {   char: '?',
        code: '. . _ _ ..',
        mnemonik: ['Mit csináltál Misi?' ]
    },
    {   char: '',
        code: '',
        mnemonik: ['']
    },
    /* 
    {   char: '',
        code: '',
        mnemonik: ['']
    },
    */
]

console.log (morseCodes)
