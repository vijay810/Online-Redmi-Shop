import React from 'react';
import Itemcard from "./Itemcard";
import Data from "./Data";
const Home = () =>{
    return(
        <>
            <h1 className="text-center mt-3">Online Shopping</h1>
            <section className='py-4 container'>
                <div className = "row justify-content-center">
                    {Data.productData.map((item, index) => {
                        return(
                            <Itemcard 
                                img={item.img} 
                                title={item.title} 
                                desc={item.desc} 
                                price={item.price} 
                                item={item} 
                                key={index}
                                camera={item} 
                            />
                        )
                    })}

                   

                </div>
            </section>
        </>
    );
};
export default Home;