import { useEffect, useState } from "react";
import Menu from "./Menu";


const Menus = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => {
          const filter =  data.filter(item => item.category === 'popular')
          setMenu(filter)
        })
    },[])


    return (
        <div className="max-w-5xl mx-auto">
           <div className="text-center mb-12">
           <p className="text-yellow-700">----- Check it out -----</p>
            <h2 className="text-3xl">FROM OUR MENU</h2>
           </div>
           
           <div className="grid grid-cols-2 gap-8"> 

           {
            menu.map(ittem => <Menu key={ittem.id} ittem={ittem}></Menu>)
           }

           </div>

            
        </div>
    );
};

export default Menus;