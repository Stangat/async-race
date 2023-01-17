export function renderResultMessage() {
  const garageSection = document.querySelector('.garage-section');
  if (garageSection) {
    const resultMessageContainer = document.createElement('div');
    resultMessageContainer.className = 'result-message-container';
    resultMessageContainer.innerHTML = ' <p class="result-message"></p>';

    garageSection.append(resultMessageContainer);
  }
}

