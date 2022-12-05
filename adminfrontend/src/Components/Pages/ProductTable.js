import { Link } from "react-router-dom";

function ProductTable(props) {
    const { product, keys } = props
    return (
        <>

            <tr>
                <td>{keys + 1}</td>
                <td>{product.productName}</td>
                <td>{product.productDesc}</td>
                <td>{product.productPrice}</td>
                {product.productStatus === "Unpublished" ?
                    <td><p className="btn btn-danger">{product.productStatus}</p></td>
                    :
                    <td><button className="btn btn-success">{product.productStatus}</button></td>
                }
                <td><Link to={`/admin/productdetails/${product._id}`}><button className="btn btn-primary">Update</button></Link></td>
            </tr>
        </>
    );
}

export default ProductTable;