import gloves from '../assets/images/gloves.png'
import cpr from '../assets/images/cpr.png'
import young from '../assets/images/young.png'
import old from '../assets/images/old.png'


const steps = [{
  text: "Włóż rękawiczki i maskę",
  image: gloves
},
{
  text: "Sprawdź oddech",
  image: null
},
{
  text: "Czy poszkodowany jest osobą dorosłą?",
  image: null,
  options: [young, old]
},
{
  image: cpr,
  text: ["Wykonaj 30 uciśnięć klatki piersiowej", "Następnie wykonaj 2 wdechy ratownicze", "Powtarzaj do przybycia służb ratunkowych"]
},
{
  image: cpr,
  text: ["Wykonaj 5 oddechów ratowniczych", "Wykonaj 30 uciśnięć klatki piersiowej", "Następnie wykonaj 2 wdechy ratownicze", "Powtarzaj 30 uciśnięć i 2 wdechy do przybycia służb ratunkowych"]
}
]

export default steps;