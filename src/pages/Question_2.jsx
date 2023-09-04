import React, { useState } from 'react';


function Question_2() {
    const [inputNum, setInputNum] = useState('');
    const [selectedDropdown, setSelectedDropdown] = useState('isPrime');
    const [result, setResult] = useState(null);

    const handleNum = (event) => {
        let value = parseInt(event.target.value);
        if (value < 1) {
            value = 1;
        } if (isNaN(value)) {
            value = ''
        }
        setInputNum(value);
        calculateResult(value, selectedDropdown);
    };

    const handleSelectChange = (event) => {
        const newDropdown = event.target.value;
        setInputNum('');
        setSelectedDropdown(newDropdown);
        calculateResult(inputNum, newDropdown);
    };

    const calculateResult = (value, dropdown) => {
        if (dropdown === 'isPrime') {
            const isPrime = checkIsPrime(value);
            setResult(isPrime);
        } else if (dropdown === 'isFibonacci') {
            const isFibonacci = checkIsFibonacci(value);
            setResult(isFibonacci);
        }
    };

    const checkIsPrime = (n) => {
        if (n <= 1)
            return false;
        for (let i = 2; i < n; i++)
            if (n % i == 0)
                return false;
        return true;
    }

    const checkIsFibonacci = (n) => {
        if (n === 0 || n === 1 || n === 2) {
            return true;
        }
        let a = 1;
        let b = 2;
        let c = 0;
        while (b <= n) {
            if (a + b === n) {
                return true;
            };
            c = a;
            a = b;
            b += c;
        };
        return false;
    };

    return (
        <div className="container">
            <div className="column">
                <input type="number" placeholder="number" value={inputNum} onChange={handleNum} />
            </div>
            <div className="column">
                <select value={selectedDropdown} onChange={handleSelectChange}>
                    <option value="isPrime">isPrime</option>
                    <option value="isFibonacci">isFibonacci</option>
                </select>
            </div>
            <div className="column">
                {result !== null && (
                    <div className="result">
                        {result ? (
                            <h3 style={{ color: 'green' }}>true</h3>
                        ) : (
                            <h3 style={{ color: 'red' }}>false</h3>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Question_2
