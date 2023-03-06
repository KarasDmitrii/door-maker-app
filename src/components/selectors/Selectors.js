import { Select } from "antd";
import { useContext, useState } from "react";
import { DoorContext, ParamDataContext } from "../../context/Context";
import styles from './selector.module.css';
export const Selectors = () => {
    const [doorState, setDoorState] = useContext(DoorContext);
    const [paramDataState, setParamDataState] = useContext(ParamDataContext)

    


    const colorPrintChange = (value) => {
        setDoorState({ ...doorState, ['colorPrint']: value })      
    }
    const colorSkinChange = (value) => {
        setDoorState({ ...doorState, ['colorSkin']: value })
    }
    const colorHandleChange = (value) => {
        setDoorState({ ...doorState, ['colorHandle']: value })
    }
    const widthChange = (value) => {
        setDoorState({ ...doorState, ['width']: value })
    }
    const heightChange = (value) => {
        setDoorState({ ...doorState, ['height']: value })
    }
    const openedChange = (value) => {
        setDoorState({ ...doorState, ['opened']: value })
    }
    const accesChange = (value) => {
        setDoorState({ ...doorState, ['acces']: value })
    }



    // const filteredOptions = (i) => {
    //     const options = [];
    //     data[i].map(({ paramValue }) => {
    //         return options.push({
    //             label: paramValue,
    //             value: paramValue,
    //         });
    //     })
    //     return options;
    // };

    const filteredOptions = (i) => {
        const options = [];
        paramDataState[i].map(({ paramValue }) => {
            
            return options.push({
                label: paramValue,
                value: paramValue,
            });
        })
       
        return options;
    };

    return (
        <div className={styles.selectors}>
            <div className={styles.selector}>
                <label htmlFor="colorPrint">{`${paramDataState[1][0].name}: `}</label>
                <Select
                    id="colorPrint"
                    name='colorPrint'
                    style={{ width: '120px' }}
                    placeholder="Please select"
                    defaultValue={['Красный']}
                    onChange={colorPrintChange}
                    options={filteredOptions(1)}
                />
            </div>
            <div className={styles.selector}>
                <label htmlFor="colorSkin">{`${paramDataState[2][0].name}: `}</label>
                <Select
                    id="colorSkin"
                    name='colorSkin'
                    style={{ width: '120px' }}
                    placeholder="Please select"
                    defaultValue={['Красный']}
                    onChange={colorSkinChange}
                    options={filteredOptions(2)}
                />
            </div>
            <div className={styles.selector}>
                <label htmlFor="colorHandle">{`${paramDataState[3][0].name}: `}</label>
                <Select
                    id="colorHandle"
                    name='colorHandle'
                    style={{ width: '120px' }}
                    placeholder="Please select"
                    defaultValue={['Красный']}
                    onChange={colorHandleChange}
                    options={filteredOptions(3)}
                />
            </div>
            <div className={styles.selector}>
                <label htmlFor="width">{`${paramDataState[4][0].name}: `}</label>
                <Select
                    id="width"
                    name='width'
                    style={{ width: '120px' }}
                    placeholder="Please select"
                    defaultValue={['700 мм']}
                    onChange={widthChange}
                    options={filteredOptions(4)}
                />
            </div>
            <div className={styles.selector}>
                <label htmlFor="height">{`${paramDataState[5][0].name}: `}</label>
                <Select
                    id="height"
                    name='height'
                    style={{ width: '120px' }}
                    placeholder="Please select"
                    defaultValue={['1800 мм']}
                    onChange={heightChange}
                    options={filteredOptions(5)}
                />
            </div>
            <div className={styles.selector}>
                <label htmlFor="opened">{`${paramDataState[6][0].name}: `}</label>
                <Select
                    id="opened"
                    name='opened'
                    style={{ width: '120px' }}
                    placeholder="Please select"
                    defaultValue={['Левое']}
                    onChange={openedChange}
                    options={filteredOptions(6)}
                />
            </div>
            <div className={styles.selector}>
                <label htmlFor="acess">{`${paramDataState[7][0].name}: `}</label>
                <Select
                    id="acess"
                    mode="multiple"
                    style={{ width: '120px' }}
                    placeholder="Please select"
                    // defaultValue={}
                    onChange={accesChange}
                    options={filteredOptions(7)}
                />
            </div>

        </div>
    )
}