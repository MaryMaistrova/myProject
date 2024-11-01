function copyToClipboard() {
  const textToCopy = document.getElementById('copyText');
  const statusElement = document.getElementById('copyStatus');

  navigator.clipboard.writeText(textToCopy.value).then(() => {
      statusElement.textContent = '✓ Copied!';
      statusElement.classList.add('text-green-600');
      
      setTimeout(() => {
          statusElement.textContent = '';
          statusElement.classList.remove('text-green-600');
      }, 2000);
  }).catch(err => {
      statusElement.textContent = '✗ Failed to copy';
      statusElement.classList.add('text-red-600');
  });
}