import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../utils/ProductServices';

const Home = () => {

    const [prodArr, setProdArr] = useState(null);
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState("Page is Loading Please Wait");

    useEffect(() => {
        getAllProducts()
            .then((result) => {
                console.log(result.data);
                setProdArr(result.data);
            })
            .catch((err) => {
                setErr(err);
            })
            .finally(() => {
                setLoading(null);
            })
    }, []);

    return (
        <div>
            {loading &&
                <h1>{loading}</h1>
            }
            {
                err &&
                <h1>{err.message}</h1>
            }

            {
                prodArr &&
                <div>
                    <h1>this is home</h1>
                    <table>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Quantity</th>
                            </tr>
                            {prodArr.map(p => 
                                <tr key={p.id}>
                                    <th>{p.id}</th>
                                    <th>{p.name}</th>
                                    <th>{p.qty}</th>
                                    <th><button>Edit</button></th>
                                    <th><button>Delete</button></th>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default Home;