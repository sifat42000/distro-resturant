import pic from '../assets/home/slide5.jpg'

const Addcart = () => {
    return (
       <div>
       <div className='text-center relative top-36'>
       <p className='text-yellow-700 '>---Should Try---</p>
        <h2 className='text-3xl'>CHEF RECOMMENDS</h2>
       </div>
<div>
<div className="flex  p-6">
{/* -----------1st card-------------- */}
<div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col ">
<img src={pic} className="max-w-sm rounded-lg shadow-2xl h-60 w-72" />
<div className="text-center">
<h1 className="text-3xl font-bold">Caeser Salad</h1>
<p className="py-6">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
<button className="btn btn-outline btn-warning">Add to cart</button>
</div>
</div>
</div>        
  {/* -----------2nd card-------------- */}

  <div className="hero min-h-screen bg-base-200">      
<div className="hero-content flex-col ">
<img src={pic} className="max-w-sm rounded-lg shadow-2xl h-60 w-72" />
<div className="text-center">
<h1 className="text-3xl font-bold">Caeser Salad</h1>
<p className="py-6">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
<button className="btn btn-outline btn-warning">Add to cart</button>
</div>
</div>
</div> 

   {/* -----------3rd card-------------- */}
<div className="hero min-h-screen bg-base-200">
   <div className="hero-content flex-col ">
<img src={pic} className="max-w-sm rounded-lg shadow-2xl h-60 w-72" />
<div className="text-center">
<h1 className="text-3xl font-bold">Caeser Salad</h1>
<p className="py-6">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
<button className="btn btn-outline btn-warning">Add to cart</button>
</div>
</div>
</div> 


</div>
</div>
       </div>
    );
};

export default Addcart;