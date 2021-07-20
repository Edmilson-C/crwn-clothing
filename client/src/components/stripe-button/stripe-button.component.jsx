import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

import Logo from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const PUBLISHABLE_KEY = 'pk_test_51JE9xTHTzvjwUlJCjrzBfcjq11GBgxmPV7sfprYkaTt6qQM8Xa72EB31rXtvdJTv3scYh6XXNyhIZDPC6QS3yDQo00YFWQNhCk'

  function onToken(token) {
    axios({
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token: token
      }
    }).then(response => {
      alert('Payment successful')
    }).catch(error => {
      alert('Error making payment')
      console.log('Payment error', error);
    })
  }

  return (
    <StripeCheckout
      label='Pay now'
      name='Crwn Clothing'
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={PUBLISHABLE_KEY}
    />
  )
}

export default StripeCheckoutButton