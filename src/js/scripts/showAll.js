const showAll = () => {
  const list = document.querySelectorAll('.js-show');

  list.forEach(item => {
    item.addEventListener('click', event => {
      event.target.closest('.catalog__tab').classList.add('show');
    })
  })
}