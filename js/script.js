const modalTriggers = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal');
const modalCloseBtns = document.querySelectorAll('[data-close]');

// Функция для открытия модального окна
function openModal(modal) {
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
}

// Функция для закрытия модального окна
function closeModal(modal) {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

// Открытие модального окна при клике на триггер
modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const modalId = trigger.getAttribute('data-modal');
    const modal = document.querySelector(modalId);
    if (modal) {
      openModal(modal);
    }
  });
});

// Закрытие модального окна при клике на кнопку закрытия
modalCloseBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    if (modal) {
      closeModal(modal);
    }
  });
});

// Закрытие модального окна при клике вне его
modals.forEach(modal => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});


// ПЛАВНАЯ ПРОКРУТКА К БЛОКАМ С МЕНЮ
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
};



// Маска на телефон
  var phoneInput = document.getElementById("phone");
  var phoneMask = IMask(phoneInput, {
    mask: "+{7} (000) 000-00-00",
  });

  

// СЛАЙДЕР ГАЛЕРЕЯ
    const swiper1 = new Swiper('.swiper', {
      slidesPerView: 2,
      spaceBetween: 20,
      // Optional parameters
      loop: true,
      dots:true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination1',
        clickable: true,
      
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
        clickable: true
      },
     
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 640px
        840: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    });


// Ход работы

const SliderTabs = {
  currentYear: 2024, // Год по умолчанию
  slidesData: {
    2024: [
      { image: 'img/building.png', date: 'декабрь 2024' },
      { image: 'img/building.png', date: 'ноябрь 2024' },
      { image: 'img/building.png', date: 'сентябрь 2024' },
      { image: 'img/building.png', date: 'октябрь 2024' },
      { image: 'img/building.png', date: 'февраль 2024' },
      // Другие данные для 2023 года
    ],
    2025: [
      { image: 'img/building.png', date: 'март 2025' },


      // Другие данные для 2024 года
    ],
    2027: [
      { image: 'img/building.png', date: 'январь 2027' },
      { image: 'img/building.png', date: 'февраль 2027' },
      // Другие данные для 2025 года
    ],
  },

  init() {
    this.cacheElements();
    this.bindEvents();
    this.loadSlides(this.currentYear);
    this.initSwiper();
  },

  cacheElements() {
    this.tabButtons = document.querySelectorAll('.tabs__trigger');
    this.sliderWrapper = document.querySelector('.swiper2 .swiper-wrapper');
  },

  bindEvents() {
    this.tabButtons.forEach(button =>
      button.addEventListener('click', (e) => this.onTabClick(e))
    );
  },

  onTabClick(e) {
    const selectedYear = parseInt(e.target.getAttribute('data-year'));
    if (this.currentYear !== selectedYear) {
      this.currentYear = selectedYear;
      this.updateActiveTab();
      this.loadSlides(this.currentYear);
      this.swiper2.update(); // Обновление Swiper после изменения слайдов
    }
  },

  updateActiveTab() {
    this.tabButtons.forEach(button =>
      button.classList.toggle('active', parseInt(button.getAttribute('data-year')) === this.currentYear)
    );
  },

  loadSlides(year) {
    this.sliderWrapper.innerHTML = ''; 
    this.slidesData[year].forEach(slide => {
      const slideElement = document.createElement('div');
      slideElement.classList.add('swiper-slide');
      slideElement.innerHTML = `

        <div class="step__item">
          <div class="step__img">
            <img src="${slide.image}" alt="${slide.date}">
            <div class="step__content">
              <h3>${slide.date}</h3>
            </div>
          </div>
        </div>`;
      this.sliderWrapper.appendChild(slideElement);
    });
  },

  initSwiper() {
    this.swiper2 = new Swiper('.swiper2', {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      dots:true,
    
      pagination: {
            el: '.swiper-pagination2',
            clickable: true,
          },
          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
            clickable: true
          },
        
          breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 20
            },
           990: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }
    });
  },
};

// Инициализация объекта
SliderTabs.init();

// Получаем элементы бургер-меню и навигации
const burger = document.getElementById('burger');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.navigation__list a');

// Обработчик клика по бургер-меню
burger.addEventListener('click', () => {
  burger.classList.toggle('active'); // Переключаем класс для анимации бургер-крестика
  navigation.classList.toggle('navigation--active'); // Переключаем видимость навигации
});

// Закрытие меню при клике на ссылку
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    navigation.classList.remove('navigation--active');
  });
});


// ТАБЫ В МОДАЛЬНОМ ОКНЕ С КВАРТИРОЙ

    function initTabs(tabsContainerSelector) {
      const tabsContainers = document.querySelectorAll(tabsContainerSelector);
    
      tabsContainers.forEach((tabsContainer) => {
        const tabs = tabsContainer.querySelectorAll('.tabs__trigger2');
        const tabsContent = tabsContainer.querySelectorAll('.tabs__panel');
    
        function hideTabContent() {
          tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
          });
    
          tabs.forEach(item => {
            item.classList.remove('is-selected');
          });
        }
    
        function showTabContent(i = 0) {
          tabsContent[i].classList.add('show', 'fade');
          tabsContent[i].classList.remove('hide');
          tabs[i].classList.add('is-selected');
        }
    
        // Инициализация: скрыть все панели, показать первую
        hideTabContent();
        showTabContent();
    
        tabsContainer.addEventListener('click', function(event) {
          const target = event.target;
          if (target && target.classList.contains('tabs__trigger2')) {
            tabs.forEach((item, i) => {
              if (target == item && !item.classList.contains('is-selected')) {
                hideTabContent();
                showTabContent(i);
              }
            });
          }
        });
      });
    }
    
    // Инициализируем все наборы табов с классом .tabs
    initTabs('.tabs');