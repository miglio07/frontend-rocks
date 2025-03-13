interface PokemonCard{
  id: number;
  image: string;
  name: string;
  types: string[];
}
const data= [
  {
    id: 1,
    name: "Lugia",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
    types: ["Psychic", "Flying"],
  },

  {
  id: 2,
  name: "Gligar",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png",
  types: ["Ground", "Flying"],
},
{
id: 3,
  name: "Gliscor",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
  types: ["Ground", "Flying"],
},
{
id: 4,
  name: "Infernape",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
  types: ["Fire", "Fighting"],
},
{
id: 5,
  name: "Darkrai",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
  types: ["Dark"],
},
{
  id: 6,
    name: "Diancie",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png",
    types: ["Fairy", "rock"],
  },
];
const typeC: { [key: string]: string} = {
  fire: "bg-red-300",
  water: "bg-blue-300",
  elettric: "bg-yellow-300",
  poison: "bg-purple-300",
};

function getTypeColor(type: string){
  const color= typeC[type];
  return color;
}


export const App = () => {
  return <div>
    <div className= "flex flex-wrap bg-blue-200 ">
      {data.map((item, idx)=>{
   return (
    <div>
      {item.id} - {item.name} 
      <img src={item.image}/>

      <div className="flex flex-row gap-3 p-3">
      {item.types.map((type)=>{
          return(<div className={`p-1 mx-3 ${getTypeColor(type)}`}>{type}</div>)
      })}
      </div>
      </div>
   );
      })}
    </div>
  </div>
};

export const Detail = () => {
  return null
}
