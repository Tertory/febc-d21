import React from 'react'
import { useState } from 'react'

function Water() {
    const [weight,setWeight] = useState<number>(0);
    const [summary,setSummary] = useState<number>(0);
    const [toggle,setToggle] = useState<boolean>(false);

    const Cal = (event) => {
        event.preventDefault();
        const processS = weight * 2.2 * (30/2)
        setSummary(processS);
        console.log(summary);
    }

    const handleWeight = (event:React.ChangeEvent<HTMLInputElement>) => {
        setWeight(parseFloat(event.target.value));
        console.log(weight);
    }

    const resetResult = () => {
        setWeight(0);
        setSummary(0);
    }

    const toggleTheme = () => {
        setToggle(prev => !prev);
    }

  return (
    //{`content-wrap ${toggle ? 'light' : 'dark'}`}
    <div className={`bigwrap ${toggle ? 'light' : 'dark'}`}>
        <div className={`content-wrap ${toggle ? 'light' : 'dark'}`}>
            <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
            <div className='preparewording'>
                { summary === 0
                    ? <h1>Please Input Information</h1>
                    : <h1>คุณควรดื่มน้ำวันละ {summary.toFixed(0)} มล.</h1>
                }
            </div>    
            <form onSubmit={Cal}>
                <input placeholder='Input weight here (Kg)' onChange={handleWeight} type="text" id="weight" />
                <div className='btnSet'>
                    <button type="submit" value="submit" >Calculated</button>
                    <button onClick={resetResult} type='reset'>reset here</button>
                </div>
            </form>
            
        <div onClick={toggleTheme} style={{cursor:'pointer', display:'flex' , justifyContent:'flex-end'}}>
            { toggle
                ? <i className="fa-solid fa-toggle-on"></i>
                : <i className="fa-solid fa-toggle-off"></i>
            }
        </div>
        </div>
    </div>
  )
}

export default Water