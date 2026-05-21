import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react'
import Navbar from './Navbar.jsx'


function Landing() {
  const [displayans, setDisplayans] = useState([]);
  const [result, setResult] = useState([]);
  function handelclike(e){
    if (e.target.innerText=="AC"){
      setDisplayans('');
      setResult([]);
      return;
    }else if(e.target.innerText=="="){
        let l=[]
        let count = "";
        for(let i=0;i<displayans.length;i++){
            if("1234567890".includes(displayans[i])){
                count += displayans[i];
            }else{
                l.push(Number(count));
                count="";
                l.push(displayans[i])
            }
        }
        l.push(Number(count));
        let finalresult = l[0];
        for(let i=1;i<l.length-1;i+=2){
            if(l[i]=="+"){
                finalresult += l[i+1]
            }else if(l[i]=="-"){
                finalresult -= l[i+1]
            }else if(l[i]=="*"){
                finalresult *= l[i+1]
            }else if(l[i]=="/"){
                if (l[i+1]==0){
                    setDisplayans("Error: Division by zero");
                    setResult("Error: Division by zero");
                    return;
                }
                finalresult /= l[i+1]
            }
            setDisplayans(finalresult)
            setResult(finalresult)

    }}
    
    else if(e.target.innerText=="Cross"){
        let x = [];
        for(let i=0;i<displayans.length-1;i++){
            x.push(displayans[i])
        }
        setDisplayans(x)

    }
    else {

        setDisplayans([displayans ]+[ e.target.innerText]);
        setResult(pri=>[pri]+[ e.target.innerText])
    }
  }
  const detectkey = (e)=>{
    if (e.key=="Enter"){
        let l=[]
        let count = "";
        for(let i=0;i<displayans.length;i++){
            if("1234567890".includes(displayans[i])){
                count += displayans[i];
            }else{
                l.push(Number(count));
                count="";
                l.push(displayans[i])
            }
        }
        l.push(Number(count));
        let finalresult = l[0];
        for(let i=1;i<l.length-1;i+=2){
            if(l[i]=="+"){
                finalresult += l[i+1]
            }else if(l[i]=="-"){
                finalresult -= l[i+1]
            }else if(l[i]=="*"){
                finalresult *= l[i+1]
            }else if(l[i]=="/"){
                if (l[i+1]==0){
                    setDisplayans("Error: Division by zero");
                    setResult("Error: Division by zero");
                    return;
                }
                finalresult /= l[i+1]
            }
            setDisplayans(finalresult)
            setResult(finalresult)

    }}
    else if(e.key=="Backspace"){
        let x = [];
        for(let i=0;i<displayans.length-1;i++){
            x.push(displayans[i])
        }
        setDisplayans(x)
    }
    else if("1234567890+-*/".includes(e.key)){
        setDisplayans([displayans ]+[ e.key]);
        setResult(pri=>[pri]+[ e.key])
    }

  }
  useEffect(()=>{
    document.addEventListener('keydown',detectkey,true)
  },[])



  return (
    <div>
      <Navbar />
      <style>{`
        * {
          box-sizing: border-box;
          outline: none;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          background-color: #09090e;
          background-image: 
            radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.12) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(168, 85, 247, 0.12) 0px, transparent 50%),
            radial-gradient(at 50% 100%, rgba(236, 72, 153, 0.08) 0px, transparent 50%);
          background-attachment: fixed;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Centered layout wrapper */
        .borrder {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: minmax(84px, auto);
          gap: 16px;
          padding: 28px;
          max-width: 450px;
          width: 90%;
          margin: 4.5rem auto;
          background: rgba(18, 18, 30, 0.55);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 32px;
          box-shadow: 
            0 28px 56px -14px rgba(0, 0, 0, 0.55),
            0 0 50px rgba(99, 102, 241, 0.06),
            inset 0 1px 1px rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        /* Display box - Tech Screen style */
        .box {
          grid-column: 1 / -1;
          background-color: rgba(9, 9, 14, 0.85);
          color: #f8fafc;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 22px;
          font-size: 2.6rem;
          font-weight: 600;
          text-align: right;
          word-wrap: break-word;
          word-break: break-all;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          min-height: 120px;
          margin-bottom: 10px;
          box-shadow: 
            inset 0 4px 12px rgba(0, 0, 0, 0.8),
            0 1px 1px rgba(255, 255, 255, 0.05);
          text-shadow: 0 0 12px rgba(99, 102, 241, 0.3);
          font-family: 'Plus Jakarta Sans', monospace;
          transition: all 0.2s ease;
          cursor: default;
        }

        /* Base button styles */
        .one, .two, .three, .four, .five, .six, .seven, .eight, .nine, 
        .ten, .Zero, .plus, .sub, .multi, .divide, .cross, .AC {
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 20px;
          font-size: 1.45rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0;
          user-select: none;
        }

        /* Number buttons - Glass dark theme */
        .one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .Zero {
          background-color: rgba(255, 255, 255, 0.03);
          color: #e2e8f0;
          box-shadow: 
            0 4px 10px rgba(0, 0, 0, 0.2),
            inset 0 1px 0px rgba(255, 255, 255, 0.05);
        }

        .one:hover, .two:hover, .three:hover, .four:hover, .five:hover, 
        .six:hover, .seven:hover, .eight:hover, .nine:hover, .Zero:hover {
          background-color: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
          color: #ffffff;
          box-shadow: 
            0 8px 16px rgba(0, 0, 0, 0.3),
            inset 0 1px 0px rgba(255, 255, 255, 0.1);
        }

        .one:active, .two:active, .three:active, .four:active, .five:active, 
        .six:active, .seven:active, .eight:active, .nine:active, .Zero:active {
          transform: translateY(1px);
          background-color: rgba(255, 255, 255, 0.05);
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.2),
            inset 0 1px 0px rgba(255, 255, 255, 0.03);
        }

        /* Operator buttons - Neon Amber Accent */
        .plus, .sub, .multi, .divide {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: #ffffff;
          grid-column: span 1;
          box-shadow: 0 4px 12px rgba(217, 119, 6, 0.2);
        }

        .plus:hover, .sub:hover, .multi:hover, .divide:hover {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(245, 158, 11, 0.4);
        }

        .plus:active, .sub:active, .multi:active, .divide:active {
          transform: translateY(1px);
          box-shadow: 0 2px 6px rgba(217, 119, 6, 0.3);
        }

        /* Action buttons - Rose warning style */
        .cross, .AC {
          background: linear-gradient(135deg, #f43f5e 0%, #be123c 100%);
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(225, 29, 72, 0.2);
        }

        .cross:hover, .AC:hover {
          background: linear-gradient(135deg, #fb7185 0%, #f43f5e 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(244, 63, 94, 0.4);
        }

        .cross:active, .AC:active {
          transform: translateY(1px);
          box-shadow: 0 2px 6px rgba(225, 29, 72, 0.3);
        }

        /* Equals button - Indigo action style */
        .ten {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .ten:hover {
          background: linear-gradient(135deg, #818cf8 0%, #a78bfa 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.5);
        }

        .ten:active {
          transform: translateY(1px);
          box-shadow: 0 2px 6px rgba(99, 102, 241, 0.3);
        }

        /* Zero button spans 2 columns */
        .Zero {
          grid-column: span 2;
        }

        /* Tablet View (up to 768px) */
        @media (max-width: 768px) {
          .borrder {
            margin: 3rem auto;
            padding: 22px;
            gap: 14px;
            grid-auto-rows: minmax(78px, auto);
          }

          .box {
            font-size: 2.2rem;
            min-height: 110px;
            padding: 20px;
          }

          .one, .two, .three, .four, .five, .six, .seven, .eight, .nine, 
          .ten, .Zero, .plus, .sub, .multi, .divide, .cross, .AC {
            font-size: 1.3rem;
            border-radius: 16px;
          }
        }

        /* Mobile View (up to 480px) */
        @media (max-width: 480px) {
          .borrder {
            margin: 2rem auto;
            padding: 18px;
            gap: 12px;
            grid-auto-rows: minmax(68px, auto);
            border-radius: 26px;
          }

          .box {
            font-size: 1.9rem;
            min-height: 95px;
            padding: 16px;
            border-radius: 18px;
          }

          .one, .two, .three, .four, .five, .six, .seven, .eight, .nine, 
          .ten, .Zero, .plus, .sub, .multi, .divide, .cross, .AC {
            font-size: 1.2rem;
            border-radius: 14px;
          }
        }

        /* Extra Small Mobile (up to 360px) */
        @media (max-width: 360px) {
          .borrder {
            padding: 14px;
            gap: 10px;
            grid-auto-rows: minmax(58px, auto);
            border-radius: 22px;
          }

          .box {
            font-size: 1.6rem;
            min-height: 85px;
            padding: 12px;
            border-radius: 14px;
          }

          .one, .two, .three, .four, .five, .six, .seven, .eight, .nine, 
          .ten, .Zero, .plus, .sub, .multi, .divide, .cross, .AC {
            font-size: 1.1rem;
            border-radius: 12px;
          }
        }
      `}</style>
      <div className='borrder'>
        
        
        <button className='box'>{displayans}</button>
        
        <button className='one'
        onClick={(e)=>{
            handelclike(e)
        }}
        >1</button>

        <button className='two'
        onClick={(e)=>{
            handelclike(e)
        }}
        >2</button>

        <button className='three'
        onClick={(e)=>{
            handelclike(e)
        }}
        >3</button>
        <button className='AC'
        onClick={(e)=>{
            handelclike(e)
        }}
        >AC</button>

        <button className='four'
        onClick={(e)=>{
            handelclike(e)
        }}
        >4</button>

        <button className='five'
        onClick={(e)=>{
            handelclike(e)
        }}
        >5</button>

        <button className='six'
        onClick={(e)=>{
            handelclike(e)
        }}
        >6</button>

        <button className='plus'
        onClick={(e)=>{
            handelclike(e)
        }}
        >+</button>
        <button className='seven'
        onClick={(e)=>{
            handelclike(e)
        }}
        >7</button>

        <button className='eight'
        onClick={(e)=>{
            handelclike(e)
        }}
        >8</button>

        <button className='nine'
        onClick={(e)=>{
            handelclike(e)
        }}
        >9</button>

        <button className='sub'
        onClick={(e)=>{
            handelclike(e)
        }}
        >-</button>
        <button className='ten'
        onClick={(e)=>{
            handelclike(e)
        }}
        >=</button>



        <button className='multi'
        onClick={(e)=>{
            handelclike(e)
        }}
        >*</button>

        <button className='divide'
        onClick={(e)=>{
            handelclike(e)
        }}
        >/</button>

        <button className='cross'
        onClick={(e)=>{
            handelclike(e)
        }}
        >Cross</button>


        <button className='Zero'
        onClick={(e)=>{
            handelclike(e)
        }}
        >0</button>

      </div>
    </div>
  );
}

export default Landing;

