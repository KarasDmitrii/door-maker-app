import styles from './price.module.css';
import { DoorContext, ParamDataContext } from '../../context/Context';
import { useContext, useEffect } from 'react';
export const Price = () => {
    const [doorState, setDoorState] = useContext(DoorContext);
    const [paramDataState] = useContext(ParamDataContext)
    var price = 0;
    const findPrice = (value) => {
        for (var b in paramDataState) {
            paramDataState[b].map((obj) => {
                if (obj.nameValue === a && value === obj.paramValue) {
                    return price += obj.price
                }
            })
        }
    }
    for (var a in doorState) {
        if (doorState[a]) {
            if (a !== 'acces') {
                findPrice(doorState[a])
            } else {
                doorState[a].map((item) => { findPrice(item)})
            }
        }
    }
    useEffect(() => {
        setDoorState({...doorState, 'price': price})
    }, [price])
    return (
        <div className={styles.price}>
            <h1>Итого:</h1>
            <h1>{`${price} руб`}</h1>
        </div>
    )
}