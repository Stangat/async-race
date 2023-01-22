export async function sortWinnersBy(sortType: string) {
  const sortOrder = localStorage.getItem('sortOrder');
  if (sortOrder === 'asc') {
    localStorage.setItem('sortOrder', 'desc');
  } else {
    localStorage.setItem('sortOrder', 'asc');
  }
  localStorage.setItem('sortType', sortType);
}
