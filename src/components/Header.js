import './Header.css'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import React, { useRef, useState } from "react";

const Header = ({ setInitialBalance, finalBalance, setFinalBalance}) => {
    const initialBalanceRef = useRef();
    const finalBalanceRef = useRef();


    const handleBalanceInput = () => {
        let value = initialBalanceRef.current.value;
        setInitialBalance(value);
        setFinalBalance(value);
        console.log("Saldo: " + value);
    };

    return (
        <div className="header">
            <div className="left">
                <figure>
                   <a href="#"><img className="logo" src="https://www.sodapdf.com/blog/wp-content/uploads/2019/07/1-image-placeholder-how-to-wireframe-pdf.png" alt="" /></a>
                </figure>
                <h1>Title</h1>
            </div>
            <div className="inputs">
                <div className="input">
                    <p>Saldo Inicial:</p>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>$</InputGroup.Text>
                        <FormControl aria-label="" 
                        type="number"
                        ref={initialBalanceRef} 
                        onChange={handleBalanceInput}/>
                    </InputGroup>
                </div>
                <div className="input">
                    <p>Saldo Final:</p>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>$</InputGroup.Text>
                        <FormControl aria-label="" 
                        disabled="true" 
                        ref={finalBalanceRef} 
                        placeholder={finalBalance}
                        />
                    </InputGroup>
                </div>
            </div>
        </div>
    );
};

export default Header;
