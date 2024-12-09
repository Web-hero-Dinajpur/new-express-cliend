import React from 'react';

const AddCoffee = () => {

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee);

        //send data to the server
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data) 
        })
    
    }

    return (
        <div className='bg-[#f4f3f0] p-24 mt-12 '>
            <div className='container mx-auto'>
                <h1 className='text-3xl font-bold text-center mb-6'>Add coffee</h1>

                <form onSubmit={handleSubmit}>
                    <div className='md:flex gap-6 justify-center'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Coffee Name</span>
                            </div>
                            <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Available Quantity</span>
                            </div>
                            <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered w-full " />
                        </label>
                    </div>
                    <div className='md:flex gap-6 justify-center'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Supplier</span>
                            </div>
                            <input type="text" name='supplier' placeholder="Supplier" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Taste</span>
                            </div>
                            <input type="text" name='taste' placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='md:flex gap-6 justify-center'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <input type="text" name='category' placeholder="Category" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Details</span>
                            </div>
                            <input type="text" name='details' placeholder="Details" className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className=''>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Photo Url</span>
                            </div>
                            <input type="text" name='photo' placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input type="submit" value="Add Coffee" className='font-bold btn btn-block mt-8 bg-slate-500' />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;