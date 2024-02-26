const Cart = (prop)=>{
    return(
        <div>
            <img src={prop.image} alt={prop.title}/>
            <div>{prop.title}</div>
            <div>{prop.id}</div>

        </div>

    )
}

export default Cart;