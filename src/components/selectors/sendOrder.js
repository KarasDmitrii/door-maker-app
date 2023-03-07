import { url } from "../constructor/Constructor"
export const sendOrder = (order) => {
    fetch(`${url}orders/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            
        },
        
        body: JSON.stringify(order),

    }).then(res => console.log(res))



}

