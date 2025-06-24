// Simple i18n implementation
var lang = 'en';

var translations = {
  en: {
    share: 'Share',
    helpStart: "No worries, you've got this!",
    learnXPath: "You're about to learn XPath Selectors! Selectors are how you pick which elements to focus.",
    exhibit: 'Exhibit 1 - A P Selector',
    stepInfo: 'Here, the "//" and "div" means it will check all paths until it finds a div element in your document (XML/HTML). "[@class=\'header\']" means the Div has to contain a class attribute with the value header.',
    typeSelectorInfo: 'To play, type in a XPath selector in the editor below to select the correct items on the table.If you get it right, you\'ll advance to the next level.',
    hoverHint: 'Hover over the items on the table to see their HTML markup.',
    helpRight: 'Get help with selectors on the right! \u2192',
    okGotIt: 'Ok, got it!',
    helpStuck: "Help, I'm stuck!",
    placeholder: 'Type in a XPath selector',
    enter: 'enter',
    chooseLevel: 'Choose a level',
    resetProgress: 'Reset Progress',
    examplesTitle: 'Examples',
    madeBy: 'Improve your QA skills with <a href="https://inzhenerka.tech/testing">Inzhenerka.Tech</a>',
    feedback: 'Have feedback or questions? Please file an isssue on <a href="https://github.com/Inzhenerka/xpath-diner/issues">the Github repo</a>.',
    win: '<span class="winner"><strong>You did it!</strong><br>You rock at XPaths.</span>',
    levelLabel: function(cur, total){ return 'Level ' + cur + ' of ' + total; }
  },
  ru: {
    share: 'Поделиться',
    helpStart: 'Не волнуйтесь, у вас получится!',
    learnXPath: 'Сейчас вы познакомитесь с XPath‑селекторами. Селекторы помогают выбирать нужные элементы.',
    exhibit: 'Пример 1 — XPath‑селектор',
    stepInfo: 'Здесь "//" и "div" означают поиск элемента div во всём документе (XML/HTML). "[@class=\'header\']" требует наличие атрибута class со значением header.',
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
    madeBy: 'Прокачай навыки QA с <a href="https://inzhenerka.tech/testing">Inzhenerka.Tech</a>',
    feedback: 'Есть предложения или вопросы? Создайте issue на <a href="https://github.com/Inzhenerka/xpath-diner/issues">GitHub</a>.',
    win: '<span class="winner"><strong>Вы прошли игру!</strong><br>Вы отлично знаете XPath.</span>',
    levelLabel: function(cur, total){ return 'Уровень ' + cur + ' из ' + total; }
  }
};

var levelTranslations = {
  ru: [
    {
      helpTitle: 'Выбор элементов по типу',
      doThis: 'Выберите тарелки',
      help: 'Выбирает все элементы типа <strong>A</strong>. Тип соответствует тегу: <tag>div</tag>, <tag>p</tag> и <tag>ul</tag> — разные типы.',
      examples: [
        '<strong>//div</strong> выбирает все элементы <tag>div</tag>.',
        '<strong>//p</strong> выбирает все элементы <tag>p</tag>.'
      ]
    },
    {
      doThis: 'Выберите коробочки бенто',
      help: 'Выбирает все элементы типа <strong>A</strong>. Тип соответствует тегу: <tag>div</tag>, <tag>p</tag> и <tag>ul</tag> — разные типы.',
      examples: [
        '<strong>//div</strong> выберет все элементы <tag>div</tag>.',
        '<strong>//p</strong> выберет все элементы <tag>p</tag>.'
      ]
    },
    {
      doThis: 'Выберите красивую тарелку',
      helpTitle: 'Выбор элементов с атрибутом',
      help: 'Выбирает элемент по атрибуту <strong>id</strong>. Селектор ID можно сочетать с выбором по типу. Работает и для других атрибутов, например <strong>class</strong>, <strong>name</strong>, <strong>placeholder</strong>.',
      examples: [
        '<strong>//*[@id="Element ID"]</strong> выберет любой элемент с <strong>id="cool"</strong>',
        '<strong>//ul[@id="long"]</strong> выберет <strong>&lt;ul id="long"&gt;</strong>'
      ]
    },
    {
      helpTitle: 'Выбор элемента внутри другого',
      doThis: 'Выберите яблоко на тарелке',
      help: 'Выбирает все <strong>B</strong> внутри <strong>A</strong>. Здесь <strong>B</strong> — потомок, то есть элемент, находящийся внутри другого.',
      examples: [
        '<strong>//p/strong</strong> выберет все <strong>&lt;strong&gt;</strong>, которые являются потомками любого <strong>&lt;p&gt;</strong>',
        '<strong>//*[@id="fancy"]/span</strong> выберет любой <strong>&lt;span&gt;</strong>, являющийся потомком элемента с <strong>id="fancy"</strong>'
      ]
    },
    {
      doThis: 'Выберите огурец на красивой тарелке',
      helpTitle: 'Комбинация Descendant и ID селекторов',
      help: 'Любой селектор можно сочетать с селектором потомка.',
      examples: [
        '<strong>//*[@id="cool"]/span</strong> выберет все элементы <strong>&lt;span&gt;</strong> внутри элементов с <strong>id="cool"</strong>'
      ]
    },
    {
      doThis: 'Выберите маленькие яблоки',
      helpTitle: 'Выбор по классу',
      help: 'Функция contains выбирает элементы с атрибутом, содержащим указанное значение. У элемента может быть только один ID, но классов может быть несколько.',
      examples: [
        '<strong>//*[contains(@class,"neato")]</strong> выбирает все элементы с <strong>class="neato"</strong>'
      ]
    },
    {
      doThis: 'Выберите маленькие апельсины',
      helpTitle: 'Более точный выбор по атрибуту',
      help: 'Селекторы позволяют делать более точный выбор.',
      examples: [
        '<strong>//ul[contains(@class,"important")]</strong> выберет все элементы <strong>&lt;ul&gt;</strong> с <strong>class="important stuff"</strong>',
        '<strong>//input[@placeholder="Name"]</strong> выберет все элементы <strong>&lt;input&gt;</strong> с <strong>placeholder="Name"</strong>'
      ]
    },
    {
      doThis: 'Выберите маленькие апельсины в бенто',
      helpTitle: 'Вы справитесь...',
      syntax: 'Поднажмите!',
      help: 'Скомбинируйте всё, что вы узнали в прошлых уровнях, чтобы пройти этот уровень.'
    },
    {
      doThis: 'Выберите все тарелки и бенто',
      helpTitle: 'Комбинирование селекторов',
      help: '<strong>//A</strong> | <strong>//B</strong> — так можно объединять любые селекторы и перечислять больше двух.',
      examples: [
        '<strong>//p| //*[@id="fun"]</strong> выберет все элементы <tag>p</tag> и все элементы с <strong>id="fun"</strong>',
        '<strong>//a|//p|//div</strong> выберет все элементы <tag>a</tag>, <tag>p</tag> и <tag>div</tag>'
      ]
    },
    {
      doThis: 'Выберите всё на тарелке',
      helpTitle: 'Универсальный селектор',
      help: 'Выберет все элементы внутри <strong>A</strong>.',
      examples: [
        '<strong>//p/*</strong> выберет каждый элемент внутри всех элементов <strong>&lt;p&gt;</strong>',
        '<strong>//ul[@id="fancy"]/*</strong> выберет каждый элемент внутри всех элементов <strong>&lt;ul id="fancy"&gt;</strong>'
      ]
    },
    {
      doThis: 'Выберите каждое яблоко рядом с тарелкой',
      helpTitle: 'Соседний селектор',
      help: 'Выбирает все элементы <strong>B</strong>, которые непосредственно следуют за <strong>A</strong>. Такие элементы называют соседними и они находятся на одном уровне.',
      examples: [
        '<strong>//p/following-sibling::div</strong> выберет каждый элемент <strong>&lt;div&gt;</strong>, который непосредственно следует за <tag>p</tag>',
        '<strong>//div//following-sibling::a</strong> выберет каждый элемент <tag>a</tag>, который непосредственно следует за <tag>div</tag>'
      ]
    },
    {
      doThis: 'Выберите третий огурец',
      helpTitle: 'Селектор по индексу',
      help: 'Можно выбрать конкретный элемент из результата XPath.',
      examples: [
        '<strong>(//a)[2]</strong> выберет второй элемент <strong>A</strong>'
      ]
    },
    {
      doThis: 'Выберите яблоко прямо на тарелке',
      helpTitle: 'Селектор прямых детей',
      help: 'Можно выбрать элементы, которые являются прямыми потомками других элементов. Более глубокие элементы называются descendant.',
      examples: [
        '<strong>A/B</strong> выберет все <strong>B</strong>, которые являются прямыми детьми <strong>A</strong>'
      ]
    },
    {
      doThis: 'Выберите последние предметы на всех тарелках',
      helpTitle: 'Выбор последнего элемента',
      help: 'Этот селектор позволяет выбрать последний дочерний элемент внутри другого элемента.<br><br>Pro Tip \u2192 Если элемент один, он считается и первым, и единственным, и последним.',
      examples: [
        '<strong>(//div)[last()]</strong> выбирает последний элемент <strong>&lt;div&gt;</strong>',
        '<strong>//div/*[last()]</strong> выбирает все последние элементы внутри <strong>&lt;div&gt;</strong>'
      ]
    },
    {
      doThis: 'Выберите элементы с атрибутом',
      helpTitle: 'Выбор элементов с атрибутом',
      help: 'Атрибуты указываются в открывающем теге элемента, например <tag>span attribute="value"</tag>. Атрибут может быть и без значения.',
      examples: [
        '<strong>//a[@href]</strong> выбирает все элементы <tag>a</tag> с атрибутом <strong>href="anything"</strong>',
        '<strong>//*[@type]</strong> выбирает все элементы с атрибутом <strong>type="anything"</strong>'
      ]
    },
    {
      doThis: 'Выберите тарелки для кого-нибудь',
      helpTitle: 'Выбор элементов с атрибутом',
      help: 'Селектор по атрибуту можно объединять с другими, например с именем тега, добавив его в конец.',
      examples: [
        '<strong>//*[@value]</strong> выбирает все элементы с атрибутом <strong>value="anything"</strong>',
        '<strong>//a[@href]</strong> выбирает все элементы <tag>a</tag> с атрибутом <strong>href="anything"</strong>',
        '<strong>//input[@disabled]</strong> выбирает все элементы <tag>input</tag> с атрибутом <strong>disabled</strong>'
      ]
    },
    {
      doThis: 'Выберите блюдо Виталия',
      helpTitle: 'Выбор по значению атрибута',
      help: 'Значения атрибутов учитывают регистр, совпадать должны все символы.',
      examples: [
        '<strong>//input[@type="checkbox"]</strong> выбирает все элементы ввода типа checkbox'
      ]
    },
    {
      doThis: "Выберите блюда на имена, начинающиеся с 'Sa'",
      helpTitle: 'Выберите все элементы, значение атрибута которых начинается с указанных символов',
      examples: [
        '<strong>//toy[starts-with(@category,"Swim")]</strong> выбирает элементы <tag>toy</tag> с <strong>category="Swimwear"</strong> или <strong>category="Swimming"</strong>'
      ]
    },
    {
      doThis: "Выберите блюда на имена, оканчивающиеся на 'ato'",
      helpTitle: 'Выберите все элементы, значение атрибута которых оканчивается на указанные символы. Функция ends-with является частью XPath 2.0, но браузеры обычно поддерживают только 1.0',
      examples: [
        '<strong>//img[substring(@src, string-length(@src) - string-length(\'.jpg\')+1 ) = \'jpg\']</strong> выбирает все изображения с форматом <strong>.jpg</strong>'
      ]
    },
    {
      doThis: 'Выберите яблоки перед красивой тарелкой',
      helpTitle: 'Выбор элемента перед другим элементом',
      help: 'Этот селектор находит все элементы <strong>B</strong>, которые непосредственно предшествуют элементу <strong>A</strong>. Элементы на одном уровне вложенности называются соседями.',
      examples: [
        '<strong>//h2/preceding-sibling::p</strong> выберет каждый элемент <tag>p</tag>, который расположен сразу перед <tag>h2</tag>'
      ]
    },
    {
      doThis: 'Выберите тарелки с огурцами',
      helpTitle: 'Выбор родительского элемента',
      help: 'Ось parent позволяет получить непосредственного родителя узла. В этом примере будут выбраны все <strong>B</strong>, являющиеся родителями <strong>A</strong>.',
      examples: [
        '<strong>//em/parent::p</strong> выберет родительский элемент <tag>p</tag> каждого <tag>em</tag>'
      ]
    },
    {
      doThis: 'Выберите первую тарелку при помощи =>',
      helpTitle: 'Связывание функций в XPath 3.1',
      help: 'XPath 3.1 вводит оператор => для передачи результата одной функции в другую. Браузеры обычно поддерживают только XPath 1.0, поэтому этот синтаксис может не работать.',
      examples: [
        '<strong>//items/item => sort-by(@price) => head()</strong> выбирает самый дешёвый элемент'
      ]
    }
  ]
};

// keep a copy of the original English level data so switching languages
// doesn't permanently overwrite it
var baseLevels;

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
  if(levelTranslations[lang] && baseLevels){
    levels = baseLevels.map(function(base, i){
      var tr = levelTranslations[lang][i] || {};
      return Object.assign({}, base, tr);
    });
  } else if(baseLevels){
    // restore original levels when no translations exist
    levels = baseLevels.map(function(base){ return Object.assign({}, base); });
  }
}

function initI18n(){
  var browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  if(browserLang.indexOf('ru') === 0){
    lang = 'ru';
  }
  if(!baseLevels){
    // deep clone the default English levels
    baseLevels = JSON.parse(JSON.stringify(levels));
  }
  var select = $('<select id="lang-select"><option value="en">English</option><option value="ru">Русский</option></select>');
  select.val(lang);
  select.on('change', function(){
    lang = this.value;
    localStorage.setItem('lang', lang);
    applyTranslations();
    $('.level-menu .levels').empty();
    if (typeof buildLevelmenu === 'function') {
      buildLevelmenu();
    }
    loadLevel();
  });
  var wrapper = $('<span class="lang-select"/>').append(select);
  $('header .share-menu').before(wrapper);
  var stored = localStorage.getItem('lang');
  if(stored){
    lang = stored;
    select.val(lang);
  }
  applyTranslations();
}
