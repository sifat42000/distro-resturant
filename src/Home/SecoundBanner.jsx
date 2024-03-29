import imgg from '../assets/home/featured.jpg'

const SecoundBanner = () => {
    return (
        <div >
            <div className="hero h-[600px] bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/YppTNf6/chef-service.jpg)' }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className=" text-center text-neutral-content">
      <div className="text-center mb-16">
        <p className="text-yellow-400">---Check it out---</p>
        <h2 className="text-3xl">FROM OUR MENU</h2>
      </div>
    <div className=" flex gap-5 p-16">
       <div>
          <img className='w-[1000px] relative -top-12' src={imgg}></img>
       </div>

       <div >
          <p className='font-bold'>March 20, 2023</p>
          <p className='font-bold'>Where can i get some?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
 
       </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default SecoundBanner;