import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>New York, NY</p>

          </div>

        </div>

        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map(item => (
              <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
              />
            ))}
          </div>
          
        </div>

        {/* Payment section - Payment Method */}
        <div className="payment__section">
          <div className="payment__title">
              <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe function */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
