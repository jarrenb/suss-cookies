////////////////////////
// MASTER COOKIE LIST //
////////////////////////
const masterCookieList = [
  {
    name: 'Samoas', 
    image: 'https://cdn.glitch.com/a937f878-fbbb-4839-aa08-d25fd3a98c5f%2Fsamoa.png?1515173855397',
    description: 'A wonderful blend of real samoa, another flavor, and white chocolate',
    ingredients: 'INGREDIENTS: SAMOA, SOMOA, SAMOA, SOMETHING ELSE, REAL SOMOA, SOMETHING ELSE TOO, AND SOME GREAT HERBS AND SPICES AND SUCH',
    popularity: 1
  },
  {
    name: 'Peanut Butter',
    image: 'https://cdn.glitch.com/a937f878-fbbb-4839-aa08-d25fd3a98c5f%2Fpeanut-butter.png?1516143454940',
    description: 'Smooth natural peanut butter with chocolate chips, peanut butter chips and rolled in sugar. Once finished with a chocolate drizzle and you’ve found a peanut butter cookie worth sharing.',
    ingredients: 'INGREDIENTS: PEANUT BUTTER, PEANUT BUTTER, PEANUT BUTTER, SOMETHING ELSE, REAL PEANUT BUTTER, SOMETHING ELSE TOO, AND SOME GREAT HERBS AND SPICES AND SUCH',
    popularity: 2
  },
  {
    name: 'Ginger Snap',
    image: 'https://cdn.glitch.com/a937f878-fbbb-4839-aa08-d25fd3a98c5f%2Fginger-snap.png?1515173855018',
    description: 'Enjoy the holidays year round with this rich, molasses and ginger spice cookie. A dip into white chocolate offers the perfect balance to the spicy flavor.',
    ingredients: 'INGREDIENTS: GINGERSNAP, GINGERSNAP, GINGERSNAP, SOMETHING ELSE, REAL GINGER, SOMETHING ELSE TOO, AND SOME GREAT HERBS AND SPICES AND SUCH',
    popularity: 3
  },
  {
    name: 'Classic Chocolate Chip',
    image: 'https://cdn.glitch.com/a937f878-fbbb-4839-aa08-d25fd3a98c5f%2Fclassic-chocolate-chip.png?1515173855209',
    description: 'Everyone’s favorite. The must have. The classic. Crisp on the outside, soft on the inside. This is the best chocolate chip cookie you will ever eat.',
    ingredients: 'INGREDIENTS: CLASSIC CHOCOLATE CHIP, CLASSIC CHOCOLATE CHIP, CLASSIC CHOCOLATE CHIP, SOMETHING ELSE, CLASSIC CHOCOLATE CHIP, SOMETHING ELSE TOO, AND SOME GREAT HERBS AND SPICES AND SUCH',
    popularity: 4
  },
  {
    name: 'CocoNut Joy',
    image: 'https://cdn.glitch.com/a937f878-fbbb-4839-aa08-d25fd3a98c5f%2Fcoconut-joy.png?1515173855422',
    description: 'Our best selling cookie! Sweet shredded coconut, almonds, and chocolate chips in a light coconut flavored dough. Dipped in chocolate and garnished with fresh coconut.',
    ingredients: 'INGREDIENTS: COCONUT JOY, COCONUT JOY, COCONUT JOY, SOMETHING ELSE, JOYFUL COCONUT, SOMETHING ELSE TOO, AND SOME GREAT HERBS AND SPICES AND SUCH',
    popularity: 5
  },
  {
    name: 'Cowboy Cookie',
    image: 'https://cdn.glitch.com/a937f878-fbbb-4839-aa08-d25fd3a98c5f%2Fcowboy-cookie.png?1515173855214',
    description: 'This hearty oatmeal cookie is just right for the open range. Littered with dried cranberry, white chocolate chips, coconut, and pecans this cookie will hit the spot.',
    ingredients: 'INGREDIENTS: COWBOY COOKIE, COWBOY COOKIE, COWBOY COOKIE, SOMETHING ELSE, REAL COWBOY, SOMETHING ELSE TOO, AND SOME GREAT HERBS AND SPICES AND SUCH',
    popularity: 6
  },
  {
    name: 'Double Chocolate Chip',
    image: 'https://cdn.glitch.com/a937f878-fbbb-4839-aa08-d25fd3a98c5f%2Fdouble-chocolate-chip.png?1515173855946',
    description: 'A Chocolate lovers dream! Rich semi-sweet double chocolate chip dough with white chocolate chips creates a cookie sure to leave your milk brown.',
    ingredients: 'INGREDIENTS: DOUBLE CHOCOLATE CHIP, DOUBLE CHOCOLATE CHIP, DOUBLE CHOCOLATE CHIP, SOMETHING ELSE, TWO CHOCOLATE CHIPS, SOMETHING ELSE TOO, AND SOME GREAT HERBS AND SPICES AND SUCH',
    popularity: 7
  },
  {
    name: 'SnickerDoodle',
    image: 'https://cdn.glitch.com/a937f878-fbbb-4839-aa08-d25fd3a98c5f%2Fsnickerdoodle.png?1515173855096',
    description: 'A light and crunchy cinnamon sugar outside veils the soft and buttery inside. Sprinkled with a toffee surprise in almost every bite.',
    ingredients: 'INGREDIENTS: SNICKERDOODLE, SNICKERDOODLE, SNICKERDOODLE, SOMETHING ELSE, SNICKERS, DOODLES, SOMETHING ELSE TOO, AND SOME GREAT HERBS AND SPICES AND SUCH',
    popularity: 8
  },
  {
    name: 'Sour Cream Lemon',
    image: 'https://cdn.glitch.com/a937f878-fbbb-4839-aa08-d25fd3a98c5f%2Fsour-cream-lemon.png?1515173855163',
    description: 'Fresh and light! This lemon sugar cookie coated with a sour cream glazé and fresh lemon zest will make your lips pucker.',
    ingredients: 'INGREDIENTS: SOUR CREAM LEMON, SOUR CREAM LEMON, SOUR CREAM LEMON, SOMETHING ELSE, SOUR, CREAM, LEMON, SOMETHING ELSE TOO, AND SOME GREAT HERBS AND SPICES AND SUCH',
    popularity: 9
  }
];



///////////////////
// COOKIE SLIDER //
///////////////////
function getCookieSliderList(counter) {
  // create copy of masterCookieList
  let masterCookieListCopy = masterCookieList.slice(0);
  // using counter, create cookieSlotArray from masterCookieListCopy
  let cookieSlotArray = masterCookieListCopy.slice(counter, counter + 3);
  
  // if cookieSlotArray has three values, it's ready to go
  // if cookieSlotArray only has 2 values, it needs the first value of masterCookieListCopy pushed onto the end of it
  if (cookieSlotArray.length == 2) {
    cookieSlotArray.push(masterCookieListCopy.shift());
  } 
  // if cookieSlotArray only has 1 value, it needs the first two values of masterCookieListCopy pushed on the end of it
  if (cookieSlotArray.length == 1) {
    for (let i = 0; i < 2; i++) {
      cookieSlotArray.push(masterCookieListCopy.shift());
    }
  }
  // using cookieSlotArray, fill cookie slots with data
  return cookieSlotArray;
}

// grab .cookie-slot
const cookieSlot = document.getElementsByClassName('cookie-slot');

// create cookieSlotCounter
let cookieSlotCounter = 0;

// call getCookieSliderList(cookieSlotCounter)
let cookieSliderList = getCookieSliderList(cookieSlotCounter);
// fill cookie slots with cookieSliderList data
for (let i = 0; i < cookieSlot.length; i++) {
  // cookie image
  cookieSlot[i].querySelector('img.cookie-slot-image').setAttribute('src', cookieSliderList[i].image);
  // cookie name
  const cookieName = cookieSlot[i].querySelector('div.cookie-name');
  const cookieNameText = document.createTextNode(cookieSliderList[i].name);
  cookieName.appendChild(cookieNameText);
  // learn more content
  cookieSlot[i].querySelector('.tooltip-text').innerHTML = cookieSliderList[i].description + '<br><br><span class="tooltip-ingredients"></span>';
  cookieSlot[i].querySelector('.tooltip-ingredients').innerHTML = cookieSliderList[i].ingredients;
}

// ON LEFT ARROW CLICK
document.getElementById('leftArrow').addEventListener('click', function() {
  // determine the new value of cookieSlotCounter
  if (cookieSlotCounter == 0) {
    cookieSlotCounter = masterCookieList.length - 1; 
  } else {
    cookieSlotCounter = cookieSlotCounter - 1; 
  }
  // call getCookieSliderList
  cookieSliderList = getCookieSliderList(cookieSlotCounter);
  // fill cookie slots with cookieSliderList data
  for (let i = 0; i < cookieSlot.length; i++) {
    // cookie image
    cookieSlot[i].querySelector('img.cookie-slot-image').setAttribute('src', cookieSliderList[i].image);
    // cookie name
    const cookieName = cookieSlot[i].querySelector('div.cookie-name');
    cookieName.innerHTML = cookieSliderList[i].name;
    // learn more content
    cookieSlot[i].querySelector('.tooltip-text').innerHTML = cookieSliderList[i].description + '<br><br><span class="tooltip-ingredients"></span>';
    cookieSlot[i].querySelector('.tooltip-ingredients').innerHTML = cookieSliderList[i].ingredients;
  }
});

// ON RIGHT ARROW CLICK
document.getElementById('rightArrow').addEventListener('click', function() {
  // update cookieSlotCounter value
  if (cookieSlotCounter == masterCookieList.length - 1) {
    cookieSlotCounter = 0;
  } else {
    cookieSlotCounter = cookieSlotCounter + 1; 
  }
  // call getCookieSliderList
  cookieSliderList = getCookieSliderList(cookieSlotCounter);
  // fill cookie slots with cookieSliderList data
  for (let i = 0; i < cookieSlot.length; i++) {
    // cookie image
    cookieSlot[i].querySelector('img.cookie-slot-image').setAttribute('src', cookieSliderList[i].image);
    // cookie name
    const cookieName = cookieSlot[i].querySelector('div.cookie-name');
    cookieName.innerHTML = cookieSliderList[i].name;
    // learn more content
    cookieSlot[i].querySelector('.tooltip-text').innerHTML = cookieSliderList[i].description + '<br><br><span class="tooltip-ingredients"></span>';
    cookieSlot[i].querySelector('.tooltip-ingredients').innerHTML = cookieSliderList[i].ingredients;
  }
});



////////////////////
// PRODUCT SELECT //
////////////////////
function productAmount() {
  // if (dozen)
  // return 12;
  // else if (bakers-dozen)
  // return 13;
  // else
  return 6;
}



///////////////////
// COOKIE SELECT //
///////////////////

// FLAVOR SELECT
function getCookieSelectArray(product) {
  
}

function getFlavorSelectValue(value) {
  let flavorSelectValue = '<div class="value">';
  if (value == undefined) {
    flavorSelectValue += 'Choose Cookie Flavor';
  } else {
    flavorSelectValue += value;
  }
  flavorSelectValue += '</div>';
  return flavorSelectValue;
}

function getFlavorSelectOptions() {
  let flavorSelectOptions = '';
  masterCookieList.forEach(function(cookie) {
    flavorSelectOptions += '<li class="option">';
    flavorSelectOptions += '<div class="cookie-image">';
    flavorSelectOptions += '<img src="' + cookie.image + '"' + ' ' + 'alt="' + cookie.name + '">';
    flavorSelectOptions += '</div>';
    flavorSelectOptions += '<div class="cookie-option-name">';
    flavorSelectOptions += cookie.name;
    flavorSelectOptions += '</div>';
    flavorSelectOptions += '</li>';
  });
  return flavorSelectOptions;
}

function getFlavorSelectList() {
  let flavorSelectList = '<ul class="list hidden">';
  flavorSelectList += getFlavorSelectOptions();
  flavorSelectList += '</ul>';
  return flavorSelectList;
}

function getFlavorSelect(disabled) {
  let flavorSelect = '';
  if (disabled) {
    flavorSelect = '<div class="disabled-select flavor">';
  } else {
    flavorSelect = '<div class="select flavor">';
  }
  flavorSelect += getFlavorSelectValue();
  flavorSelect += getFlavorSelectList();
  flavorSelect += '</div>';
  return flavorSelect;
}


// AMOUNT SELECT
function createAmountOptionsArray() {
  let amountOptionsArray = ['Remove', '1', '2', '3', '4', '5', '6'];
  return amountOptionsArray;
}

function getAmountValue() {
  let amountValue = '<div class="value">';
  amountValue += '0';
  amountValue += '</div>';
  return amountValue;
}

function getAmountListOptions() {
  let amountListOptions = '';
  const array = createAmountOptionsArray();
  array.forEach(function(amount) {
    amountListOptions += '<li class="option">';
    amountListOptions += amount;
    amountListOptions += '</li>';
  });
  return amountListOptions;
}

function getAmountList() {
  let amountList = '<ul class="list hidden">';
  amountList += getAmountListOptions();
  amountList += '</ul>';
  return amountList;
}

function getAmountSelect(disabled) {
  let amountSelect = '';
  if (disabled) {
    amountSelect = '<div class="disabled-select amount">';
    amountSelect += getAmountValue();
  } else {
    amountSelect = '<div class="select amount">';
    amountSelect += getAmountValue();
    amountSelect += getAmountList();
  }
  amountSelect += '</div>';
  return amountSelect;
}


// FLAVOR AND AMOUNT
function getFlavorAndAmount(disabled) {
  let flavorAndAmount = '<div class="flavor-and-amount">';
  if (disabled) {
    flavorAndAmount += getFlavorSelect(disabled);
    flavorAndAmount += getAmountSelect(disabled);
  } else {
    flavorAndAmount += getFlavorSelect();
    flavorAndAmount += getAmountSelect();
  }
  flavorAndAmount += '</div>';
  return flavorAndAmount;
}


// FLAVORS AND AMOUNTS SECTION
for (var i = 0; i < 2; i++) {
  $('#flavorsAmounts').append(getFlavorAndAmount());
}
for (var i = 0; i < 3; i++) {
  $('#flavorsAmounts').append(getFlavorAndAmount('disabled'));
}


// SHOW/HIDE SELECT OPTIONS
$('.select').each(function() {
  $(this).attr('tabindex', '0');
});

$('.select').on('click', function() {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).find('.list').eq(0).addClass('hidden');
  } else {
    $(this).addClass('active');
    $(this).find('.list').eq(0).removeClass('hidden');
  }
});

$('.select').on('blur', function() {
  $(this).removeClass('active');
  $(this).find('.list').eq(0).addClass('hidden');
});

$('.select').on('keydown', function() {
  if (event.which == 27) {
    $(this).removeClass('active');
    $(this).find('.list').eq(0).addClass('hidden');
  }
});


// UPDATE SELECT VALUE
$('.select .list .option').on('click', function() {
  let newValue = $(this).html();
  if (newValue == 'Remove')
    newValue = 0;
  let selectValue = $(this).parents('.select').eq(0).children('.value');
  selectValue.html(newValue);
});