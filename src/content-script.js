console.log('🤓 Hello from content script.');

// Create and inject h1 element with the same message
const h1Element = document.createElement('h1');
h1Element.textContent = '🤓 Hello from content script.';
h1Element.style.position = 'fixed';
h1Element.style.top = '10px';
h1Element.style.left = '10px';
h1Element.style.zIndex = '10000';
h1Element.style.background = 'rgba(255, 255, 255, 0.9)';
h1Element.style.padding = '10px';
h1Element.style.border = '2px solid #333';
h1Element.style.borderRadius = '5px';
h1Element.style.fontFamily = 'Arial, sans-serif';
h1Element.style.fontSize = '16px';
h1Element.style.color = '#333';

// Insert the element into the page
document.body.appendChild(h1Element);