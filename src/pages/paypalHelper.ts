// paypalHelper.ts
export const loadPayPalScript = () => {
  return new Promise((resolve, reject) => {
    if (window.paypal) {
      resolve(); // PayPal is already loaded
    } else {
      // Dynamically load PayPal's JS SDK script
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&components=buttons`;
      script.onload = () => resolve();  // Resolve once the script is loaded
      script.onerror = (err) => reject(err);  // Reject on error
      document.body.appendChild(script);  // Append script to the body
    }
  });
};
