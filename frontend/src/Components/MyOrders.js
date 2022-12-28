import { useEffect, useContext, useState } from 'react';
import { LoginContext } from '../LoginContex'
function MyOrders() {
    const { userLoginName } = useContext(LoginContext)
    useEffect(() => {
        fetch(`/myorders/${userLoginName}`).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data);
        })
    }, [])
    return (
        <>
            <h2>My orders</h2>
        </>
    );
}

export default MyOrders;