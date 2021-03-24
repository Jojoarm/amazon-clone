import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';

function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    
    

    return (
        <div className="subtotal">
            {/* CurrencyFormat helps us to work on currencies */}
            <CurrencyFormat 
                renderText= {(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This orders
                            contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"$"}
            />

            {/* We use history.push instead of link so we can preserve the format of the button instead of turning it into a link */}
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
