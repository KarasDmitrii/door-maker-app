import { useContext } from "react"
import styles from './door.module.css';
import { DoorContext } from "../../context/Context";
export const Door = () => {
    const [doorState] = useContext(DoorContext);
    const colorConvert = (value) => {
        switch (doorState[value]) {
            case 'Kрасный':
                return 'red';
            case 'Синий':
                return 'blue';
            case 'Зелёный':
                return 'green';
            case 'Жёлтый':
                return 'yellow';
            default:
                return 'red';    
        }
    }
    // const openedConvert = () => {
    //     return doorState.openred === 'Вправо' ? 'flex-end' : 'flex-start'; 
    // }
    
    return (
        <div className={styles.content}>
            <div className={styles.print} style={{ backgroundColor: colorConvert('colorPrint') }}>
                <div className={styles.skin} style={{ backgroundColor: colorConvert('colorSkin'), justifyContent: (doorState.opened === 'Правое' ? 'flex-start' : 'flex-end' ) }}>
                    <div className={styles.handle} style={{ backgroundColor: colorConvert('colorHandle') }}/>
                </div>
            </div>
            <div className={styles.print} style={{ backgroundColor: colorConvert('colorPrint') }}>
                <div className={styles.skin} style={{ backgroundColor: colorConvert('colorSkin'), justifyContent: (doorState.opened === 'Правое' ? 'flex-end' : 'flex-start') }}>
                    <div className={styles.handle} style={{ backgroundColor: colorConvert('colorHandle') }}/>
                </div>
            </div>
        </div>
    )
}
