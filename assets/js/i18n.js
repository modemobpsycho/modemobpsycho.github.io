/* Vadim Taratuta — CV site, EN/RU switching.
   English lives in index.html; Russian lives in this file.
   Any element with data-i18n="key" is swapped (innerHTML, so <em>/<strong> work too). */
(function () {
  'use strict';

  var RU = {
    /* --- chrome --- */
    'a11y.skip': 'Перейти к содержимому',
    'a11y.menuOpen': 'Открыть меню',
    'a11y.menuClose': 'Закрыть меню',
    'a11y.close': 'Закрыть',
    'nav.experience': 'Опыт',
    'nav.projects': 'Проекты',
    'nav.skills': 'Стек',
    'nav.education': 'Образование',
    'nav.contact': 'Контакты',

    /* --- hero --- */
    'hero.status': 'Открыт к позициям Full Stack и Frontend · Remote или гибрид',
    'hero.lead': 'Делаю продуктовые веб-приложения end-to-end: типизированный React, API на NestJS поверх Prisma, дизайн-системы для больших продуктов. 1,5 года коммерческой работы: франшиза в США с 10M+ клиентов, медицина, e-commerce.',
    'hero.download': 'Скачать CV',
    'hero.meta2': 'Middle · 1,5 года опыта',
    'hero.meta3': 'Английский B1',

    /* --- experience --- */
    'exp.h2': 'Опыт',
    'exp.note': '2024 — 2025 · 3 места',

    'exp.yellow.dates': 'дек 2024 — ноя 2025',
    'exp.yellow.mode': 'Удалённо',
    'exp.yellow.at': 'в Yellow Systems',
    'exp.yellow.sub': 'CHHJ (College H.U.N.K.S.) — американская франшиза в сфере услуг: 10M+ обслуженных клиентов и 1M+ отзывов. Пять внутренних веб-приложений в одном Nx-монорепозитории.',
    'exp.yellow.b1': 'Разрабатывал фичи в пяти внутренних продуктах — <em>Online Customer Service</em>, <em>Tasks</em>, <em>Crew</em>, <em>Agent Booking Tool</em> и <em>Move Estimating Tool</em>; на Tasks вёл полный стек: UI на React, контроллеры и сервисы на NestJS.',
    'exp.yellow.b2': 'Участвовал в CI/CD монорепозитория: писал и ревьюил файлы GitHub Actions-пайплайнов, параллельно делая крупные изменения — отдельные PR по 10–15 тыс. добавленных или переписанных строк.',
    'exp.yellow.b3': 'Внёс компоненты в <em>Oasis</em> — общую дизайн-систему на MUI v4 со Storybook, которая держала единый вид пяти продуктов.',
    'exp.yellow.b4': 'Работал на двух поколениях стека: легаси Redux Toolkit + Yup + TypeORM/MySQL и новый Effector + Zod + Prisma/MongoDB за API на NestJS 11 / Fastify.',
    'exp.yellow.case': 'Кейс',

    'exp.krainet.mode': 'Удалённо',
    'exp.krainet.at': 'в Krainet',
    'exp.krainet.sub': 'Три клиентских продукта за четыре месяца: медицинский портал, сайт национальной железной дороги и интернет-магазин.',
    'exp.krainet.b1': '<em>LeoDoc</em> — чинил критичные баги в портале с медицинской картой (Django + React) перед продажей проекта другой компании.',
    'exp.krainet.b2': '<em>rw.by</em> — переделывал фронтенд публичного сайта Белорусской железной дороги; ревью и рефакторинг легаси-кода на чистом JS.',
    'exp.krainet.b3': '<em>Sontsa</em> — продолжал разработку фронтенда магазина бытовой химии: новые фичи и код-ревью.',

    'exp.itr.mode': 'Удалённо',
    'exp.itr.at': 'стажировка в Itransition Group',
    'exp.itr.sub': 'Три full-stack приложения от и до за три месяца стажировки.',
    'exp.itr.b1': 'Сделал <em>Collections</em>, <em>Real-Time Paint Online</em> и <em>Fake User Data Generator</em> — и клиент, и сервер.',
    'exp.itr.b2': 'Фронтенд на React + Redux Toolkit / RTK Query; бэкенд на Express и NestJS + Prisma + PostgreSQL.',
    'exp.itr.b3': 'Реалтайм-коллаборация на Socket.io, типизированные REST-контракты, юнит-тесты на Jest и Vitest.',

    /* --- work --- */
    'work.h2': 'Избранные проекты',
    'work.note': 'продукты компаний → личные проекты',
    'filter.all': 'Все',
    'filter.react': 'React',
    'filter.nest': 'NestJS / Node',
    'filter.python': 'Python',
    'filter.pet': 'Пет-проекты',

    'proj.chhj.kicker': '01 · Продукт компании',
    'proj.chhj.sub': 'Операционная и букинговая система для американской франшизы: 10M+ клиентов, 1M+ отзывов со средней оценкой 4.9.',
    'proj.chhj.cta': 'Открыть кейс',
    'proj.chhj.surfaces': 'Поверхности продукта',
    'role.frontend': 'фронтенд',
    'role.fullstack': 'full-stack',
    'role.ui': 'общий UI',

    'proj.leo.sub': 'Портал пациента с историей здоровья и анализами — стабилизировал перед сменой владельца проекта.',
    'proj.rw.sub': 'Публичный сайт Белорусской железной дороги — новый фронтенд на легаси-бэкенде на Python.',
    'proj.sontsa.sub': 'Интернет-магазин бытовой химии: новые фичи витрины на существующей кодовой базе.',
    'proj.collections.sub': 'Менеджер личных коллекций со входом через OAuth2 и синхронизацией с Jira.',
    'proj.paint.sub': 'Мультиплеерный холст для рисования: комнаты, штрихи и присутствие через WebSockets.',
    'proj.fake.sub': 'Генератор реалистичных тестовых данных — клиент на React, типизированный API на Express с Faker.',
    'proj.crypto.sub': 'Дашборд крипторынка в реальном времени: состояние на React Context, свой график.',

    'pets.title': '<span class="mono">Ещё на GitHub</span> — четыре проекта здесь, и гораздо больше в профиле',

    /* --- skills --- */
    'skills.h2': 'Стек',
    'skills.note': 'ежедневные инструменты выделены жирным',
    'skills.frontend': 'Фронтенд',
    'skills.backend': 'Бэкенд',
    'skills.data': 'Данные и инфраструктура',
    'skills.quality': 'Качество и инструменты',

    /* --- education --- */
    'edu.h2': 'Образование и языки',
    'edu.uni.sub': 'Белорусский государственный университет информатики и радиоэлектроники',
    'edu.degree.track': 'Геймдизайн',
    'edu.lang.label': 'Языки',
    'edu.lang.sub': 'Уверенно прохожу технические интервью, читаю документацию, работаю в асинхронной переписке.',
    'edu.lang.ru': 'Русский',
    'edu.lang.native': '— родной',

    /* --- contact --- */
    'contact.kicker': '05 — Контакты',
    'contact.title': 'Соберём<br>что-то надёжное<span class="accent">.</span>',
    'contact.lead': 'Открыт к позициям full-stack и frontend — remote или гибрид, готов начать сейчас. Быстрее всего — Telegram или почта; отвечаю в течение дня.',

    /* --- footer --- */
    'footer.text': 'Vadim Taratuta',
    'footer.top': 'Наверх ↑',

    /* --- case study --- */
    'case.kicker': 'Кейс · Yellow Systems',
    'case.lead': 'College H.U.N.K.S. — американская франшиза в сфере услуг: 10M+ обслуженных клиентов, 1M+ отзывов. Полевые операции работают на наборе веб-приложений в одном Nx-монорепозитории — я работал в пяти из них и в общей дизайн-системе.',
    'case.role': 'Роль',
    'case.role.value': 'Full Stack Engineer',
    'case.period': 'Период',
    'case.scale': 'Масштаб',
    'case.scale.value': '5 приложений · 10M+ клиентов',
    'case.what': 'Что делает платформа',
    'case.app1': '<strong>Online Customer Service</strong> — букинг и управление записями клиентов.',
    'case.app2': '<strong>Tasks</strong> — операционное приложение для диспетчеризации и управления заявками; полный стек, включая контроллеры и сервисы NestJS.',
    'case.app3': '<strong>Crew</strong> — веб-приложение, в котором бригады ведут свою работу по дням.',
    'case.app4': '<strong>Agent Booking Tool</strong> — расчёты, квоты и записи для агентов.',
    'case.app5': '<strong>Move Estimating Tool</strong> — расчёт стоимости переездов.',
    'case.app6': '<strong>Oasis</strong> — общая библиотека компонентов на MUI v4 со Storybook.',
    'case.eng': 'Инженерные решения',
    'case.eng1': 'Контрактный подход: TS-Rest + Zod, OpenAPI/Swagger как единый источник правды между клиентом и API.',
    'case.eng2': 'Nx-монорепозиторий с общими библиотеками типов, UI и API-клиентов — одна версия каждого контракта.',
    'case.eng3': 'Два поколения стека: легаси Redux Toolkit + Yup + TypeORM/MySQL и новый Effector + Zod + Prisma поверх MongoDB/Redis за API на NestJS 11 / Fastify.',
    'case.eng4': 'Участвовал в построении прозрачного CI/CD при миграции на монорепозиторий; крупные PR по 10–15 тыс. строк были нормой.',
    'case.eng5': 'Четыре окружения — Development, Testing, Training, Production — как код; PHP 7.3 продолжал работать за новыми сервисами.',
    'case.stack': 'Стек',
    'case.links': 'Публичные поверхности',
    'case.link1': 'бренд-сайт',
    'case.link2': 'расчёты и квоты',
    'case.link3': 'портал клиентов',
    'case.note': 'Внутренние поверхности — Tasks, Crew, диспетчерские дашборды — за корпоративным SSO.'
  };

  var META = {
    en: {
      title: 'Vadim Taratuta — Full Stack Engineer · React / NestJS',
      description: 'Full Stack Engineer building product web apps end to end: React & TypeScript front ends, NestJS APIs, Prisma data layers, design systems. Experience at Yellow Systems (CHHJ), Krainet and Itransition.',
      ogTitle: 'Vadim Taratuta — Full Stack Engineer',
      ogDescription: 'React · NestJS · TypeScript. Product web apps end to end: booking, operations, healthcare, e-commerce.'
    },
    ru: {
      title: 'Вадим Таратута — Full Stack Engineer · React / NestJS',
      description: 'Full Stack Engineer: продуктовые веб-приложения end-to-end — React и TypeScript на фронтенде, API на NestJS, Prisma, дизайн-системы. Опыт в Yellow Systems (CHHJ), Krainet и Itransition.',
      ogTitle: 'Вадим Таратута — Full Stack Engineer',
      ogDescription: 'React · NestJS · TypeScript. Продуктовые веб-приложения: букинг, операции, медицина, e-commerce.'
    }
  };

  var current = 'en';
  var cache = new WeakMap();
  var counter = document.querySelector('.filter-count');
  var lastCount = counter && counter.getAttribute('data-count') ? parseInt(counter.getAttribute('data-count'), 10) : 8;

  function apply(root) {
    var scope = root || document.body;
    var els = [];
    if (scope.nodeType === 1 && scope.getAttribute && scope.getAttribute('data-i18n')) els.push(scope);
    if (scope.querySelectorAll) {
      els = els.concat(Array.prototype.slice.call(scope.querySelectorAll('[data-i18n]')));
    }
    els.forEach(function (el) {
      if (!cache.has(el)) cache.set(el, el.innerHTML);
      var k = el.getAttribute('data-i18n');
      el.innerHTML = (current === 'ru' && RU[k] != null) ? RU[k] : cache.get(el);
    });

    var aria = [];
    if (scope.nodeType === 1 && scope.getAttribute && scope.getAttribute('data-i18n-aria')) aria.push(scope);
    if (scope.querySelectorAll) {
      aria = aria.concat(Array.prototype.slice.call(scope.querySelectorAll('[data-i18n-aria]')));
    }
    aria.forEach(function (el) {
      if (!cache.has(el)) cache.set(el, el.getAttribute('aria-label') || '');
      var k = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', (current === 'ru' && RU[k] != null) ? RU[k] : cache.get(el));
    });
  }

  function setMetaTag(attr, name, value) {
    var tag = document.querySelector('meta[' + attr + '="' + name + '"]');
    if (tag) tag.setAttribute('content', value);
  }

  function countLabel(n) {
    if (current === 'ru') {
      var mod10 = n % 10, mod100 = n % 100;
      var word = 'проектов';
      if (mod10 === 1 && mod100 !== 11) word = 'проект';
      else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) word = 'проекта';
      return n + ' ' + word;
    }
    return n + (n === 1 ? ' project' : ' projects');
  }

  function t(key) {
    if (current === 'ru' && RU[key] != null) return RU[key];
    return null;
  }

  function refreshCount() {
    if (counter) {
      counter.textContent = countLabel(lastCount);
      counter.setAttribute('data-count', lastCount);
    }
  }

  function setLang(lang, persist) {
    current = lang === 'ru' ? 'ru' : 'en';
    var meta = META[current];
    document.documentElement.lang = current;
    document.title = meta.title;
    setMetaTag('name', 'description', meta.description);
    setMetaTag('property', 'og:title', meta.ogTitle);
    setMetaTag('property', 'og:description', meta.ogDescription);
    apply(document.body);
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      var on = btn.getAttribute('data-lang') === current;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    refreshCount();
    if (persist !== false) {
      try { localStorage.setItem('cv-lang', current); } catch (e) {}
    }
    try {
      var url = new URL(window.location.href);
      if (current === 'ru') url.searchParams.set('lang', 'ru');
      else url.searchParams.delete('lang');
      window.history.replaceState(null, '', url.toString());
    } catch (e) {}
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: current } }));
  }

  window.I18N = {
    apply: apply,
    setLang: setLang,
    countLabel: countLabel,
    refreshCount: refreshCount,
    setCount: function (n) { lastCount = n; refreshCount(); },
    t: function (key) { return t(key) || ''; },
    get lang() { return current; }
  };

  document.querySelectorAll('[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang')); });
  });

  var params = new URLSearchParams(window.location.search);
  var stored = null;
  try { stored = localStorage.getItem('cv-lang'); } catch (e) {}
  var fromParam = params.get('lang');
  var auto = (navigator.language || 'en').toLowerCase().indexOf('ru') === 0 ? 'ru' : 'en';
  setLang(fromParam || stored || auto, false);
})();
