import qrCode from '../../image/qrcode_null_null.svg';
import styles from './constructor.module.css';
import { useContext, useEffect, useState } from "react";
import { Selectors } from "../selectors/Selectors";
import { Door } from "../door/Door";
import { Button } from 'antd';
import { Price } from "../price/Price";
import { DoorContext, ParamDataContext } from "../../context/Context";
import { sendOrder } from "../selectors/sendOrder";
export const url = 'http://dkarasfr.beget.tech/'; 
export const Constructor = () => {
    const [paramDataState, setParamDataState] = useContext(ParamDataContext)
    const [doorState] = useContext(DoorContext);
    
    useEffect(() => {
        fetch(url, {
            method: 'GET',
        }).then(res => res.json()).then(res => setParamDataState(res)).catch(err => console.log(err))
    }, []);
    function clickHandler() {
        sendOrder(doorState, Price)
    }

    return (
        <>
            <div className={styles.header}>
                <h1>Конфигуратор входной двери</h1>
            </div>
            <main className={styles.main}>
                <div className={styles.doors}>
                    <Door />
                </div>
                <div className={styles.selectors}>
                    <h2 className={styles.text}>Параметры</h2>
                    {paramDataState && <Selectors />}
                    <div className={styles.priceBox}>
                        <div className={styles.price}>
                            <Price />
                            <Button onClick={clickHandler} className={styles.button} type="primary">Отправить комплентацию</Button>
                        </div>
                        <div className={styles.qr}>
                            <img src={qrCode} alt="qrCode" />
                            <h>Файл заказа тут</h>
                        </div>
                    </div>
                </div>


            </main>
        </>
    )
};