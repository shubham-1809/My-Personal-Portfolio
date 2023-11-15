document.getElementById('copy-link-button').addEventListener('click', function() {
  // Get the URL of your portfolio website
  const websiteURL = 'https://shubham-1809.github.io/My-Personal-Portfolio/';

  // Create a temporary input element
  const tempInput = document.createElement('input');
  tempInput.value = websiteURL;

  // Append the input element to the document
  document.body.appendChild(tempInput);

  // Select the input content
  tempInput.select();

  // Copy the selected text to the clipboard
  document.execCommand('copy');

  // Remove the temporary input element
  document.body.removeChild(tempInput);

  // Provide user feedback (e.g., tooltip or message)
  alert('Link copied to clipboard');
});

document.getElementById('clicked').addEventListener('click', function(){
  alert('Hey man! You are viewing it live...Hahaha');
})

function closeMenu() {
  const checkbox = document.getElementById('click');
  checkbox.checked = false;
}
