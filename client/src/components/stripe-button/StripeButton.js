import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

function StripeButton({ price }) {
  const priceInCents = price * 100;
  const publishableKey =
    'pk_test_51HU5cbCZ561YYims3aK9TmqenuOjxQ1wTE8TZFJfpfpoXx3e1CiMGlUhf2jOHubJP5aVouHoVrmialsglhxgs2xF00CyEp5lqc';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceInCents,
        token,
      },
    })
      .then(() => {
        alert('Payment Successful');
      })
      .catch((error) => {
        console.log(error, 'payment error');
        alert('There is an issue with your payment.');
      });
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;
