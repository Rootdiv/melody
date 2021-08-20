'use strict';

$(document).ready(function() {
  let currentFloor = 2
  const floorPath = $('.home-image path');
  const counterUp = $('.counter-up');
  const counterDown = $('.counter-down');
  const modal = $('.modal');
  const modalCloseButton = $('.modal-close-button');
  const viewFlats = $('.view-flats');

  floorPath.on('mouseover', function() {
    floorPath.removeClass('current-floor');
    currentFloor = $(this).attr('data-floor');
    $('.counter').text(currentFloor);
  });

  function toggleModal() {
    modal.toggleClass('is-open');
  }

  floorPath.on('click', toggleModal);
  modalCloseButton.on('click', toggleModal);
  viewFlats.on('click', toggleModal);

  function usCounterFloor(floor) {
    return floor.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  }

  function floorToggle(floor) {
    $('.counter').text(usCounterFloor(floor));
    floorPath.removeClass('current-floor');
    $(`[data-floor="${usCounterFloor(floor)}"]`).toggleClass('current-floor');
  };

  counterUp.on('click', function() {
    if (currentFloor < 18) {
      currentFloor++;
      floorToggle(currentFloor);
    }
  });
  counterDown.on('click', function() {
    if (currentFloor > 2) {
      currentFloor--;
      floorToggle(currentFloor);
    }
  });
});
