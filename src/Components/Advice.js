import React, { useState, useEffect } from 'react';
import styles from '../Components/Advice.module.css';
import desktopDivider from '../Assets/pattern-divider-desktop.svg';
import mobileDivider from '../Assets/pattern-divider-mobile.svg';
import dice from '../Assets/icon-dice.svg';

function Advice() {

    const [advice, setAdvice] = useState({
        id:"",
        advice:""
    })

    const [buttonClick, setButtonClick] = useState(0);

    useEffect(() => {
        fetch("	https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => setAdvice({
            id: data.slip.id,
            advice: data.slip.advice
        }))
        .catch(error => console.error(error))
    }, [buttonClick])

    const getAdvice = () => {
        setButtonClick(buttonClick + 1);
    }

  return (
    <div className={styles.container}> 
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div className={styles.id}>
                    <p>ADVICE #{advice.id}</p>
                </div>
                <div className={styles.advice}>
                <p>"{advice.advice}"</p>
                </div>
                <div className={styles.image}>
                    <picture>
                        <source media="(min-width: 394px)" srcSet={desktopDivider} />
                        <source media="(max-width: 393px)" srcSet={mobileDivider} />
                        <img src={desktopDivider} alt="Divider" />
                    </picture>
                </div>
            </div>
            <div className={styles.dice}>
                <img src={dice} alt="dice" className="dice" onClick={getAdvice}/>
            </div>
        </div>
    </div>
  )
}

export default Advice