import Swal from "sweetalert2";


const Coffees = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;



    const handleDelete = _id => {
        console.log(_id)
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"

                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl mt-12">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="card-body flex flex-row justify-between">
                <div>
                    <h2 className="card-title">Name : {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <button className="btn">View</button>
                        <button className="btn">Edit</button>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-orange-600">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffees;