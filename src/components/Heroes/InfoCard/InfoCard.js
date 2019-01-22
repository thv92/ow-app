import React from 'react'
import styles from './InfoCard.css';
import { uniqueId } from 'lodash';


class InfoCard extends React.Component {

    createCardTable(data) {
        return data.map((stat) => {
            let key = stat[0];
            let values = <td key={uniqueId()} className={styles.single}>{stat[1]}</td>;
            if (stat[1] instanceof Array) {
                values = stat[1].map((value) => {
                    return (
                        <td key={uniqueId()} className={styles.multi}>{value}</td>
                    );
                });
            }
            return (
                <tr key={uniqueId()} className={styles.row}>
                    <td key={uniqueId()} className={styles.title}>{key}</td>
                    {values}
                </tr>
            );
        });
    }

    render() {
        let infoCardTable = this.createCardTable(this.props.data);
        return (
            <table className={styles.infoTable}>
                <tbody>
                    {infoCardTable}
                </tbody>
            </table>
        );
    }
}

export default InfoCard;