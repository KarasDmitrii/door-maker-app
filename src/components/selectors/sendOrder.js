
export const sendOrder = (order) => {
    fetch('http://door-maker/orders/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            // "Origin": "http://localhost:3000"
        },
        // headers: { 'Content-Type':'application/x-www-form-urlencoded' },
        body: JSON.stringify(order),

    }).then(res => console.log(res))



}

// .then(res => res.json())
// headers: { 'Content-Type': 'multipart/form-data' }
// .then(res => setParamDataState(res))