import React, { useState } from "react";
import style from './style.module.css'

const AddItem = () => {
    const [id, setId] = useState(1);
    const [name, setName] = useState("Something");
    const [qty, setQty] = useState(20);

    return(
        <div className={style.AddItemForm}>
            <form action="" method="post">
                <table>
                    <tbody>
                        <tr>
                            <th><label htmlFor="pid">Id : </label></th>
                            <td><input type="number" name="pid" id="pid" value={id} /></td>
                        </tr>
                        <tr>
                            <th><label htmlFor="pName">Name : </label></th>
                            <td><input type="text" name="pName" id="pName" value={name} /></td>
                        </tr>
                        <tr>
                            <th><label htmlFor="qty">Quantity : </label></th>
                            <td><input type="number" name="qty" id="qty" value={qty} /></td>
                        </tr>
                    </tbody>
                </table>
                <button>Add Item </button>
            </form>
        </div>
    )
};

export default AddItem;