export function renderPagination() {
  const pagination = document.createElement('div');
  pagination.className = 'pagination';
  pagination.innerHTML = `
  <button class="pagination-button pagination-button_prev" disabled>Prev</button>
  <button class="pagination-button pagination-button_next" disabled>Next</button>
  `;
  document.body.append(pagination);
}
