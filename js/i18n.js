// Simple i18n implementation
var lang = 'en';

var translations = {
  en: {
    share: 'Share',
    helpStart: "No worries, you've got this!",
    learnXPath: "You're about to learn Xpath Selectors! Selectors are how you pick which elements to focus.",
    exhibit: 'Exhibit 1 - A Xpath Selector',
    stepInfo: 'Here, the "//" and "Div" means it will check all paths until it finds a Div element in your document (XML/HTML). "[@class=\'header\']" means the Div has to contain a class attribute with the value header.',
    typeSelectorInfo: 'To play, type in a Xpath selector in the editor below to select the correct items on the table.If you get it right, you\'ll advance to the next level.',
    hoverHint: 'Hover over the items on the table to see their HTML markup.',
    helpRight: 'Get help with selectors on the right! \u2192',
    okGotIt: 'Ok, got it!',
    helpStuck: "Help, I'm stuck!",
    placeholder: 'Type in a Xpath selector',
    enter: 'enter',
    chooseLevel: 'Choose a level',
    resetProgress: 'Reset Progress',
    examplesTitle: 'Examples',
    madeBy: 'Made by <a href="http://www.topswagcode.com">TopSwagCode</a> &mdash; come say hi!',
    feedback: 'Have feedback or questions? Please file an isssue on <a href="https://github.com/kiksen1987/xpath-diner/issues">the Github repo</a>.',
    win: '<span class="winner"><strong>You did it!</strong><br>You rock at Xpaths.</span>',
    levelLabel: function(cur, total){ return 'Level ' + cur + ' of ' + total; }
  },
  ru: {
    share: 'Поделиться',
    helpStart: 'Не волнуйтесь, у вас получится!',
    learnXPath: 'Сейчас вы познакомитесь с XPath‑селекторами. Селекторы помогают выбирать нужные элементы.',
    exhibit: 'Пример 1 — XPath‑селектор',
    stepInfo: 'Здесь "//" и "Div" означают поиск элемента Div во всём документе (XML/HTML). "[@class=\'header\']" требует наличие атрибута class со значением header.',
    typeSelectorInfo: 'Введите XPath‑селектор в редакторе ниже, чтобы выбрать правильные элементы на столе. Если всё верно, перейдёте на следующий уровень.',
    hoverHint: 'Наведите курсор на элементы, чтобы увидеть их HTML‑разметку.',
    helpRight: 'Подсказки по селекторам справа \u2192',
    okGotIt: 'Понятно!',
    helpStuck: 'Нужна помощь!',
    placeholder: 'Введите XPath‑селектор',
    enter: 'ввод',
    chooseLevel: 'Выберите уровень',
    resetProgress: 'Начать сначала',
    examplesTitle: 'Примеры',
    madeBy: 'Сделано <a href="http://www.topswagcode.com">TopSwagCode</a> — заходите в гости!',
    feedback: 'Есть предложения или вопросы? Создайте issue на <a href="https://github.com/kiksen1987/xpath-diner/issues">GitHub</a>.',
    win: '<span class="winner"><strong>Вы прошли игру!</strong><br>Вы отлично знаете XPath.</span>',
    levelLabel: function(cur, total){ return 'Уровень ' + cur + ' из ' + total; }
  }
};

var levelTranslations = {
  ru: [
    { helpTitle: 'Выбор элементов по типу', doThis: 'Выберите тарелки' },
    { doThis: 'Выберите коробочки бенто' },
    { doThis: 'Выберите красивую тарелку', helpTitle: 'Выбор элементов с атрибутом' },
    { helpTitle: 'Выбор элемента внутри другого', doThis: 'Выберите яблоко на тарелке' },
    { doThis: 'Выберите огурец на красивой тарелке', helpTitle: 'Комбинация Descendant и ID селекторов' },
    { doThis: 'Выберите маленькие яблоки', helpTitle: 'Выбор по классу' },
    { doThis: 'Выберите маленькие апельсины', helpTitle: 'Более точный выбор по атрибуту' },
    { doThis: 'Выберите маленькие апельсины в бенто', helpTitle: 'Соберите всё воедино' },
    { doThis: 'Выберите все тарелки и бенто', helpTitle: 'Комбинирование селекторов' },
    { doThis: 'Выберите всё на тарелке', helpTitle: 'Универсальный селектор' },
    { doThis: 'Выберите каждое яблоко рядом с тарелкой', helpTitle: 'Соседний селектор' },
    { doThis: 'Выберите третий огурец', helpTitle: 'Селектор по индексу' },
    { doThis: 'Выберите яблоко прямо на тарелке', helpTitle: 'Селектор прямых детей' },
    { doThis: 'Выберите большое яблоко и большой апельсин', helpTitle: 'Выбор последнего элемента' },
    { doThis: 'Выберите элементы с атрибутом', helpTitle: 'Выбор элементов с атрибутом' },
    { doThis: 'Выберите тарелки для кого-нибудь', helpTitle: 'Выбор элементов с атрибутом' },
    { doThis: 'Выберите блюдо Виталия', helpTitle: 'Выбор по значению атрибута' },
    { doThis: "Выберите блюда на имена, начинающиеся с 'Sa'", helpTitle: 'Значение атрибута начинается с' },
    { doThis: "Выберите блюда на имена, оканчивающиеся на 'ato'", helpTitle: 'Значение атрибута оканчивается на' }
  ]
};

function applyTranslations() {
  var t = translations[lang] || translations.en;
  $('[data-i18n]').each(function(){
    var key = $(this).data('i18n');
    if(typeof t[key] === 'function') {
      $(this).html(t[key]($(this).data('param1'), $(this).data('param2')));
    } else if(t[key]) {
      $(this).html(t[key]);
    }
  });
  $('[data-i18n-placeholder]').each(function(){
    var key = $(this).data('i18n-placeholder');
    if(t[key]) {
      $(this).attr('placeholder', t[key]);
    }
  });
  if(levelTranslations[lang]){
    levelTranslations[lang].forEach(function(tr, i){
      levels[i] = Object.assign({}, levels[i], tr);
    });
  }
}

function initI18n(){
  var browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  if(browserLang.indexOf('ru') === 0){
    lang = 'ru';
  }
  var select = $('<select id="lang-select"><option value="en">English</option><option value="ru">Русский</option></select>');
  select.val(lang);
  select.on('change', function(){
    lang = this.value;
    localStorage.setItem('lang', lang);
    applyTranslations();
    loadLevel();
  });
  $('header').append(select);
  var stored = localStorage.getItem('lang');
  if(stored){
    lang = stored;
    select.val(lang);
  }
  applyTranslations();
}
