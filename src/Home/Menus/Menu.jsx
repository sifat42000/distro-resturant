

const Menu = ({ittem}) => {
    const {image,name,recipe,price} = ittem

    return (
        <div className="flex space-x-4">
            <div>
                <img className="w-36"  src={image}></img>
            </div>

            <div>

                  <div className="flex gap-11">
                    <h2 className="mb-2  font-bold">{name} ---------------</h2>
                    <p className="text-yellow-600">${price}</p>
                  </div>
                  
                  <p>{recipe}</p>

            </div>

            
        </div>
    );
};

export default Menu;