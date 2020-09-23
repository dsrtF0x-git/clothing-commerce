import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeButton({ price }) {
  const priceInCents = price * 100;
  const publishableKey =
    'pk_test_51HU5cbCZ561YYims3aK9TmqenuOjxQ1wTE8TZFJfpfpoXx3e1CiMGlUhf2jOHubJP5aVouHoVrmialsglhxgs2xF00CyEp5lqc';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
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
