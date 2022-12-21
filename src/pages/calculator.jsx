import React, { useRef, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../Assets/CSS/calculator.scss';

import { btns, BTN_ACTIONS } from '../Assets/Js/btnConfig';

const Calculator = () => {

    const btnsRef = useRef(null);
    const expRef = useRef(null);

    const [expression, setExpression] = useState('');
    const operation = ["+", "-", "/", "*"];

    useEffect(() => {
        const btns = Array.from(btnsRef.current.querySelectorAll('button'));
        btns.forEach(e => e.style.height = e.offsetWidth + 'px');
    }, []);

    const btnClick = (item) => {
        const expDiv = expRef.current;

        if (item.action === BTN_ACTIONS.THEME) document.body.classList.toggle('dark');

        if (item.action === BTN_ACTIONS.ADD) {
            // addAnimSpan(item.display);

            const oper = item.display !== 'x' ? item.display : '*';
            // setExpression(expression + oper);
            const value = expression.split("");
            addAnimSpan(expression + oper);
            if (operation.includes(value[value.length - 1]) && oper === "%") {
        addAnimSpan(expression);
        return;
      }

      if (
        operation.includes(value[value.length - 1]) &&
        operation.includes(oper)
      ) {
        value.splice(value.length - 1, 1, oper);
        let result = value.join("");

        setExpression(expression);
        addAnimSpan(result);
        return;
      }
        }
     

        if (item.action === BTN_ACTIONS.DELETE) {
            expDiv.parentNode.querySelector('div:last-child').innerHTML = '';
            expDiv.innerHTML = '';

            setExpression('');
        }
        if (item.action === BTN_ACTIONS.BACKSPACE) {
            let output = expression.split('');
            output.pop()
            let result = output.join('');
            console.log(result)

            expDiv.innerHTML = result;
            setExpression(result)
        }

        if (item.action === BTN_ACTIONS.CALC) {
            if (expression.trim().length <= 0) return;

            expDiv.parentNode.querySelector('div:last-child').remove();

            const cloneNode = expDiv.cloneNode(true);
            expDiv.parentNode.appendChild(cloneNode);

            const transform = `translateY(${-(expDiv.offsetHeight + 10) + 'px'}) scale(0.4)`;

            try {
                let value = "";
                if (expression.includes("%")) {
                  value = expression.replace("%", "/100");
                } else {
                  value = expression;
                }
                let res = eval(value);

                setExpression(res.toString());
                setTimeout(() => {
                    cloneNode.style.transform = transform;
                    expDiv.innerHTML = '';
                    addAnimSpan(Math.floor(res * 100000000) / 100000000);
                }, 200);
            } catch {
                setTimeout(() => {
                    cloneNode.style.transform = transform;
                    cloneNode.innerHTML = 'Syntax err';
                }, 200);
            } finally {
                console.log('Calc success');
            }
        }
    }
    const addAnimSpan = (content) => {
        const expDiv = expRef.current;
        const span = document.createElement("span");
    
        expDiv.innerHTML = "";
        span.innerHTML = content;
        span.style.opacity = "0";
        expDiv.appendChild(span);
    
        setExpression(content.toString());

        const width = span.offsetWidth + 'px';
        span.style.width = '0';

        setTimeout(() => {
            span.style.opacity = '1';
            span.style.width = width;
        }, 100);
    }

    return (
        <div className="calculate">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css" />
            <link rel="stylesheet" src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
            <nav>
                <div className="logo">
                    Kelompok 5
                </div>
                <input type="checkbox" id="click" />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars" />
                </label>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Profile</Link></li>
                    <li><Link to="/">Biodata</Link></li>
                    <li><Link to="/Detail">Detail</Link></li>
                    <li><Link to="/Calculator">Calculator</Link></li>
                    <li><Link to="/">Member</Link></li>
                </ul>
            </nav>
            <main>
                <section>
                    <div className="calculator">
                        <div className="calculator__result">
                            <div ref={expRef} className="calculator_result_exp"></div>
                            <div className="calculator_result_exp"></div>
                        </div>
                        <div ref={btnsRef} className="calculator__btns">
                            {
                                btns.map((item, index) => (
                                    <button
                                        key={index}
                                        className={item.class}
                                        onClick={() => btnClick(item)}
                                    >
                                        {item.display}
                                    </button>
                                ))
                            }

                        </div>
                    </div>
                </section>
            </main>

        </div>

    );
}

export default Calculator;
