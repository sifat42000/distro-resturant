import Addcart from "./Addcart";
import Banner from "./Banner";
import Bistrotittle from "./Bistrotittle";
import Menus from "./Menus/Menus";
import SecoundBanner from "./SecoundBanner";
import Underbanner from "./Underbanner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <p className="mb-10"><Underbanner></Underbanner></p>
            <Bistrotittle></Bistrotittle>
            <Menus></Menus>
            <Addcart></Addcart>
            <SecoundBanner></SecoundBanner>
            
        </div>
    );
};

export default Home;