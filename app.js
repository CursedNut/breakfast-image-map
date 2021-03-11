const polys = {
  croissants: 'круассаны',
  tosts: 'тосты',
  coffee: 'кофе',
  juice: 'сок',
  fruit: 'фрукты',
  breakfast: 'яичница с беконом, помидорами и зеленью'
};

const popoverOffsetY = 40;

const imgMap = document.querySelector('#img-map');

function openPopover({ target }) {
  const currentPopover = document.getElementById('popoverMouse');

  if (currentPopover) document.querySelector('body').removeChild(currentPopover);

  const polygon = target.closest('a');

  if (polygon) {
    const popover = document.createElement('div');
    const title = polygon.dataset.title;

    popover.id = 'popoverMouse';
    popover.className = 'popover';
    popover.style.position = 'absolute';
    popover.innerHTML = title in polys ? polys[title] : '';

    polygon.addEventListener(
      'mousemove',
      ({ clientX, clientY }) => {
        popover.style.top = (clientY - popoverOffsetY - popover.offsetHeight) + 'px';
        popover.style.left = clientX + 'px';
      }
    );

    document.querySelector('body').appendChild(popover);
  }
};

function closePopover() {
  const currentPopover = document.getElementById('popoverMouse');

  if (currentPopover) document.querySelector('body').removeChild(currentPopover);
};

imgMap.addEventListener('mouseover', openPopover);
imgMap.addEventListener('mouseout', closePopover);