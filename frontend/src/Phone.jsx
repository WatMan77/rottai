import React, { useState, useEffect } from 'react';


function Phone({phone, setPhone}){


    const [curPhoneBuf, setCurBuf] = useState("");
    const [newNumBuf, setNewNumBuf] = useState(0);


    const addNumber = () => {
        setCurBuf((n)=>n+newNumBuf)
        setPhone(curPhoneBuf);
    }
    const removeNumber = () => {
        setCurBuf((n) => n.substring(0,n.length-1));
        setPhone(curPhoneBuf);
    };


    useEffect(() => {
        // Set up an interval to update newNum every second
        const intervalId = setInterval(() => {
            setNewNumBuf(prevNum => {
                prevNum += 1
                if(prevNum>=10){
                    prevNum=0;
                }

                return prevNum;
            }); // Increment newNum by 1 every second
        }, 250);
    
        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
      }, []);


    return(
        <>
        
        <div>
            Phone number:
            <input type="text" value={curPhoneBuf + newNumBuf} readOnly/>
        </div>

        <button type="button" onClick={addNumber}>Add!</button>
        <button type="button" onClick={removeNumber}>Wait no</button>

        </>
    );
}




export default Phone;