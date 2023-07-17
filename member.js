function skillsMember() {
  const skills = document.querySelectorAll('.skills__member');
  const skillsList = document.querySelectorAll('.skills__list');
  const skillsItem = document.querySelectorAll('.skills__item');
  const skillsItemTitle = document.querySelectorAll('.skills__item-title');
  const skillsItemText = document.querySelectorAll('.skills__item-text');
  const skillsItemPercent = document.querySelectorAll('.skills__item-percent');
  const skillsItemPercentBar = document.querySelectorAll('.skills__item-percent-bar');

  skills.forEach((item, index) => {
    item.addEventListener('click', () => {
      skillsList[index].classList.toggle('skills__list--active');
      skillsItem[index].classList.toggle('skills__item--active');
      skillsItemTitle[index].classList.toggle('skills__item-title--active');
      skillsItemText[index].classList.toggle('skills__item-text--active');
      skillsItemPercent[index].classList.toggle('skills__item-percent--active');
      skillsItemPercentBar[index].classList.toggle('skills__item-percent-bar--active');
    });
  });
}