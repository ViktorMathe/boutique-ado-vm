var stripe_public_key = $('#id_stripe_public_key').text().slice(1, -1);
var client_secret = $('#id_client_secret').text().slice(1, -1);
var stripe = Stripe(stripe_public_key);
var elements = stripe.elements();
const style = {
    theme: 'stripe',
    base: {
      colorPrimary: '#000000',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    rules: {
    '.Input--invalid': {
        boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.07), 0 0 0 2px var(--colorDanger)',
        color: '#dc3545',
        iconColor: '#dc3545'
      },

      // See all supported class names and selector syntax below
    }
};
var card = elements.create('card',  {style: style});
card.mount('#card-element',);