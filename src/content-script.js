console.log("🤓 Hello from content script.");

const domParagraph = document.createElement("p");
domParagraph.textContent = "🤓 Hello from content script.";
domParagraph.style.color = "red";
domParagraph.style.fontFamily = "monospace";
domParagraph.style.fontSize = "2rem";
domParagraph.style.left = "10%";
domParagraph.style.position = "fixed";
domParagraph.style.top = "10%";
document.body.appendChild(domParagraph);
