document.addEventListener('DOMContentLoaded', () => {








  
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
  currentYear: 2024,

  slidesData: {
    2024: [
      {
        images: [
          'img/объекты/03.07.2024г/1.jpeg ',
           'img/объекты/03.07.2024г/2.jpeg',
           'img/объекты/03.07.2024г/3.jpeg',
          'img/объекты/03.07.2024г/4.jpeg',
          'img/объекты/03.07.2024г/5.jpeg',
          'img/объекты/03.07.2024г/6.jpeg',
          'img/объекты/03.07.2024г/7.jpeg',
         
        ],
        date: 'июль 2024'
      },
  
      {
        images: [
          'img/объекты/05.08.2024г/1.jpeg',
           'img/объекты/05.08.2024г/2.jpeg',
           'img/объекты/05.08.2024г/3.jpeg',
          'img/объекты/05.08.2024г/4.jpeg',
          'img/объекты/05.08.2024г/5.jpeg',
          'img/объекты/05.08.2024г/6.jpeg',
          'img/объекты/05.08.2024г/7.jpeg',
          'img/объекты/05.08.2024г/8.jpeg',
          'img/объекты/05.08.2024г/9.jpeg',
          'img/объекты/05.08.2024г/10.jpeg',
          'img/объекты/05.08.2024г/11.jpg',
        ],
        date: 'август 2024'
      },
  
      {
        images: [
          'img/объекты/03.09.2024г/1.jpeg',
           'img/объекты/03.09.2024г/2.jpeg',
           'img/объекты/03.09.2024г/3.jpeg',
          'img/объекты/03.09.2024г/4.jpeg',
          'img/объекты/03.09.2024г/5.jpeg',
          'img/объекты/03.09.2024г/6.jpeg',
          'img/объекты/03.09.2024г/7.jpeg',
          'img/объекты/03.09.2024г/8.jpeg',
     
        ],
        date: 'сентябрь 2024'
      },
  
  
      {
        images: [
          'img/объекты/01.10.2024г/1.jpeg',
           'img/объекты/01.10.2024г/2.jpeg',
           'img/объекты/01.10.2024г/3.jpeg',
          'img/объекты/01.10.2024г/4.jpeg',
          'img/объекты/01.10.2024г/5.jpeg',
          'img/объекты/01.10.2024г/6.jpeg',
          'img/объекты/01.10.2024г/7.jpeg',
          'img/объекты/01.10.2024г/8.jpeg',
        ],
        date: 'октябрь 2024'
      },
  
      {
        images: [
          'img/объекты/02.12.2024г/1.jpeg',
           'img/объекты/02.12.2024г/2.jpeg',
           'img/объекты/02.12.2024г/3.jpeg',
          'img/объекты/02.12.2024г/4.jpeg',
          'img/объекты/02.12.2024г/5.jpeg',
          'img/объекты/02.12.2024г/6.jpeg',
      
        ],
        date: 'декабрь 2024'
      },
  
    
    ],
    2025: [
      {
        images: [
          'img/объекты/02.12.2024г/1.jpeg',
           'img/объекты/02.12.2024г/2.jpeg',
           'img/объекты/02.12.2024г/3.jpeg',
          'img/объекты/02.12.2024г/4.jpeg',
          'img/объекты/02.12.2024г/5.jpeg',
          'img/объекты/02.12.2024г/6.jpeg',
      
        ],
        date: 'декабрь 2024'
      },
  
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
    this.tabButtons.forEach((button) =>
      button.addEventListener('click', (e) => this.onTabClick(e))
    );
  },

  onTabClick(e) {
    const selectedYear = parseInt(e.target.getAttribute('data-year'), 10);
    if (this.currentYear !== selectedYear) {
      this.currentYear = selectedYear;
      this.updateActiveTab();
      this.loadSlides(this.currentYear);
      this.swiper2.update(); // Обновляем Swiper после смены таба
    }
  },

  updateActiveTab() {
    this.tabButtons.forEach((button) =>
      button.classList.toggle(
        'active',
        parseInt(button.getAttribute('data-year'), 10) === this.currentYear
      )
    );
  },

  loadSlides(year) {
    this.sliderWrapper.innerHTML = ''; // Очистить старые слайды

    this.slidesData[year].forEach((slide, index) => {
      const slideElement = document.createElement('div');
      slideElement.classList.add('swiper-slide', 'step__item'); // Добавляем класс step__item для плавного появления

      const uniqueID = `inner-swiper-${year}-${index}`;

      const innerSlides = slide.images
        .map(
          (image) => `
            <div class="swiper-slide">
              <img 
                src="${image}" 
                alt="${slide.date}" 
                style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          `
        )
        .join('');
        console.log(`Генерация слайда для ${year}, индекс: ${index}`);

      slideElement.innerHTML = `
        <div class="step__img swiper-container ${uniqueID}">
          <div class="swiper-wrapper">
            ${innerSlides}
          </div>
          <div class="swiper-button-prev ${uniqueID}-prev"></div>
          <div class="swiper-button-next ${uniqueID}-next"></div>
        </div>
        <div class="step__content">
          <h3>${slide.date}</h3>
        </div>
      `;

      this.sliderWrapper.appendChild(slideElement);

      // Добавляем класс .visible с небольшой задержкой, чтобы запустить анимацию
      setTimeout(() => {
        slideElement.classList.add('visible');
      }, 50); // Задержка перед добавлением класса для плавного появления

      // Инициализация внутреннего Swiper
      const innerSwiper = new Swiper(`.${uniqueID}`, {
        slidesPerView: 1,
        spaceBetween: 10,
       // allowTouchMove:false,
        mousewheel: false,
        loop:true,
        navigation: {
          nextEl: `.${uniqueID}-next`,
          prevEl: `.${uniqueID}-prev`,
        },
      });

      // Принудительное обновление размеров
      setTimeout(() => innerSwiper.update(), 0);
    });

    // Принудительное обновление основного слайдера
    setTimeout(() => {
      if (this.swiper2) this.swiper2.update();
    }, 0);
  },

  initSwiper() {
    // Основной Swiper
    this.swiper2 = new Swiper('.swiper2', {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: false,
      pagination: {
        el: '.swiper-pagination2',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 20 },
        480: { slidesPerView: 2, spaceBetween: 20 },
        640: { slidesPerView: 3, spaceBetween: 20 },
        990: { slidesPerView: 4, spaceBetween: 20 },
      },
    });
  }
    

};
    

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
    // function initTabs(tabsContainerSelector) {
    //   const tabsContainers = document.querySelectorAll(tabsContainerSelector);
    //   tabsContainers.forEach((tabsContainer) => {
    //     const tabs = tabsContainer.querySelectorAll('.tabs__trigger2');
    //     const tabsContent = tabsContainer.querySelectorAll('.tabs__panel');
    //     function hideTabContent() {
    //       tabsContent.forEach(item => {
    //         item.classList.add('hide');
    //         item.classList.remove('show', 'fade');
    //       });
    
    //       tabs.forEach(item => {
    //         item.classList.remove('is-selected');
    //       });
    //     }
    
    //     function showTabContent(i = 0) {
    //       tabsContent[i].classList.add('show', 'fade');
    //       tabsContent[i].classList.remove('hide');
    //       tabs[i].classList.add('is-selected');
    //     }
    
    //     // Инициализация: скрыть все панели, показать первую
    //     hideTabContent();
    //     showTabContent();
    
    //     tabsContainer.addEventListener('click', function(event) {
    //       const target = event.target;
    //       if (target && target.classList.contains('tabs__trigger2')) {
    //         tabs.forEach((item, i) => {
    //           if (target == item && !item.classList.contains('is-selected')) {
    //             hideTabContent();
    //             showTabContent(i);
    //           }
    //         });
    //       }
    //     });
    //   });
    // }
    
    // // Инициализируем все наборы табов с классом .tabs
    // initTabs('.tabs');
    // ВЫБОР КВАРТИРЫ 
    const sectionData = {

      //сделано
      section1: {
        withoutTerrace: {
          img: "img/sec1(2п65,48).jpg",
          title: "Двухкомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: <strong>65,48 м²</strong></li>
        <li>- Жилая площадь: <strong>27,22 кв.м</strong>,</li>
        <li>- Площадь кухни: 11,7 кв.м,</li>
            <li>- Площадь комнаты 1: 11,39 кв.м. </li>
             <li>- Площадь комнаты 2: 15,83 кв.м. </li>
              <li>Вид: во двор и на парк </li>
      </ul>
    `,
        },
        withTerrace: {
          img: "img/sec1(2п69,49).jpg",
          title: "Двухкомнатная квартира с терассой",
          description: `
         <ul>
        <li>- Общая площадь: <strong>69,49 м²</strong></li>
        <li>- Жилая площадь: <strong>27,22 кв.м</strong>,</li>
        <li>- Площадь кухни: 11,7 кв.м,</li>
            <li>- Площадь комнаты 1: 15,83 кв.м. </li>
             <li>- Площадь комнаты 2: 11,39 кв.м. </li>
              <li>Вид: во двор и на парк </li>
      </ul>
        `,
        },
      },


      //сделано
      section2: {
        withoutTerrace: {
          img: "img/sec2(2п35,76).jpg",
          title: "Однокомнатная квартира",
          description: `
          <ul>
            <li>- Общая площадь: 35,76 м²</li>
            <li>- Жилая площадь: 12,99 кв.м,</li>
            <li>- Площадь кухни: 10,91 кв.м,</li>
                <li>- Площадь комнаты: 12,99 кв.м. </li>
                  <li>Вид: на парк</li>
          </ul>
        `,
        },
        withTerrace: {
          img: "img/sec2(2п38,92).jpg",
          title: "Однокомнатная квартира с терассой",
          description: `
          <ul>
            <li>- Общая площадь: 38,92 м²</li>
            <li>- Жилая площадь: 12,99 кв.м,</li>
            <li>- Площадь кухни: 10,91 кв.м,</li>
                <li>- Площадь комнаты: 12,99 кв.м. </li>
                  <li>Вид: на парк</li>
          </ul>
        `,
        },
      },

        //нету номера описания
      section3: {
        withoutTerrace: {
          img: "img/sec3(3п33,88).jpg",
          title: "Однокомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 33,88 м²</li>
        <li>- Жилая площадь: 11,99 кв.м,</li>
        <li>- Площадь кухни: 10,66 кв.м,</li>
         
            <li>- Площадь комната: 11,99 кв.м. </li>
              <li>Вид: во двор и на улицу в сторону дома №16 </li>
      </ul>
    `,
        },
        withTerrace: {
          img: "img/sec3(3п37,51).jpg",
          title: "Однокомнатная квартира с террасой",
          description: `
          <ul>
            <li>- Общая площадь: 37,51 м²</li>
            <li>- Жилая площадь: 11,99 кв.м,</li>
            <li>- Площадь кухни: 10,66 кв.м,</li>
        
                <li>- Площадь комнаты: 11,99 кв.м. </li>
                  <li>Вид: во двор и на улицу в сторону дома №16 </li>
          </ul>
        `,
        },
      },

      section4: {
        withoutTerrace: {
          img: "img/sec4(3п36,43).jpg",
          title: "Однокомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 36,43 м²</li>
        <li>- Жилая площадь: 11,36 кв.м,</li>
        <li>- Площадь кухни: 11,38 кв.м,</li>
            <li>- Площадь комната: 11,36 кв.м. </li>
              <li>Вид: на парк </li>
      </ul>
    `,
        },
        withTerrace: {
          img: "img/sec4(3п39,57).jpg",
          title: "Однокомнатная квартира с терассой",
          description: `
      <ul>
        <li>- Общая площадь: 39,57 м²</li>
        <li>- Жилая площадь: 12,02 кв.м,</li>
        <li>- Площадь кухни: 11,38 кв.м,</li>
            <li>- Площадь комната: 11,36 кв.м. </li>
              <li>Вид: на парк </li>
      </ul>
        `,
        },
      },

      section5: {
        withoutTerrace: {
          img: "img/sec5(3п87,44).jpg",
          title: "Трехкомнатная квартира",
          description: `
          <ul>
            <li>- Общая площадь: 87,44 м²</li>
            <li>- Жилая площадь: 45,2 кв.м,</li>
            <li>- Площадь кухни: 13,29 кв.м,</li>
            
                <li>- Площадь комнаты 1: 10,44 кв.м. </li>
                 <li>- Площадь комнаты 2: 16,49 кв.м. </li>
                 <li>- Площадь комнаты 3: 18,27 кв.м. </li>
                  <li>Вид: на парк </li>
          </ul>
    `,
        },
        withTerrace: {
          img: "img/sec5(3п89,68).jpg",
          title: "Трехкомнатная квартира с террасой",
          description: `
          <ul>
            <li>- Общая площадь: 89,68 м²</li>
            <li>- Жилая площадь: 45,2 кв.м,</li>
            <li>- Площадь кухни: 13,29 кв.м,</li>
            
                <li>- Площадь комнаты 1: 10,44 кв.м. </li>
                 <li>- Площадь комнаты 2: 16,49 кв.м. </li>
                 <li>- Площадь комнаты 3: 18,27 кв.м. </li>
                  <li>Вид: на парк </li>
          </ul>
        `,
        },
      },



      section6: {
        withoutTerrace: {
          img: "img/sec6(4п30,7).jpg",
          title: "Однокомнатная квартира",
          description: `
     <ul>
        <li>- Общая площадь: 30,70 м²</li>
        <li>- Жилая площадь: 10,52 кв.м,</li>
        <li>- Площадь кухни: 9,40 кв.м,</li>
            <li>- Площадь комната: 10,52 кв.м. </li>
              <li>Вид: во двор и на парк </li>
      </ul>
    `,
        },
        withTerrace: {
          img: "img/sec6(4п33,68).jpg",
          title: "Однокомнатная квартира с террасой",
          description: `
          <ul>
          <li>- Общая площадь: 33,68 м²</li>
        <li>- Жилая площадь: 10,52 кв.м,</li>
        <li>- Площадь кухни: 9,40 кв.м,</li>
            <li>- Площадь комната: 10,52 кв.м. </li>
              <li>Вид: во двор и на парк </li>
      </ul>
        `,
        },
      },




      section7: {
        withoutTerrace: {
          img: "img/sec7(4п33,99).jpg",
          title: "Однокомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 33,99 м²</li>
        <li>- Жилая площадь: 12,16 кв.м,</li>
        <li>- Площадь кухни: 9,91 кв.м,</li>
        
            <li>- Площадь комната: 12,16 кв.м. </li>
              <li>Вид: в сторону дома №16 </li>
      </ul>
    `,
        },
        withTerrace: {
          img: "img/sec7(4п37,22).jpg",
          title: "Однокомнатная квартира с террасой",
          description: `
          <ul>
            <li>- Общая площадь: 37,22 м²</li>
            <li>- Жилая площадь: 12,16 кв.м,</li>
            <li>- Площадь кухни: 9,91 кв.м,</li>
            
                <li>- Площадь комната: 12,16 кв.м. </li>
                  <li>Вид: на улицу в сторону дома №16 </li>
          </ul>
        `,
        },
      },


      section8: {
        withoutTerrace: {
          img: "img/sec8(4п33,75).jpg",
          title: "Однокомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 33,75 м²</li>
        <li>- Жилая площадь: 10,75 кв.м,</li>
        <li>- Площадь кухни: 10 кв.м,</li>
          <li>- Площадь комнаты: 10,75 кв.м,</li>
              <li>Вид: на парк </li>
      </ul>
    `,
        },
        withTerrace: {
          img: "img/sec8(4п36,28).jpg",
          title: "Однокомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 36,28 м²</li>
        <li>- Жилая площадь: 10,75 кв.м,</li>
        <li>- Площадь кухни: 10 кв.м,</li>
          <li>- Площадь комнаты: 10,75 кв.м,</li>
              <li>Вид: на парк </li>
      </ul>
        `,
        },
      },


      section9: {
        withoutTerrace: {
          img: "img/sec9(5п54,11).jpg",
          title: "Двухкомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 54,11 м²</li>
        <li>- Жилая площадь: 23,17 кв.м,</li>
        <li>- Площадь кухни: 11,79 кв.м,</li>
            <li>- Площадь комнаты 1: 11,16 кв.м. </li>
             <li>- Площадь комнаты 2: 12,01 кв.м. </li>
              <li>Вид: на парк
 </li>
      </ul>
    `,
        },
        withTerrace: {
          img: "img/sec9(5п58,78).jpg",
          title: "Двухкомнатная квартира с террасой",
          description: `
          <ul>
            <li>- Общая площадь: 58,78 м²</li>
            <li>- Жилая площадь: 23,17 кв.м,</li>
        <li>- Площадь кухни: 11,79 кв.м,</li>
         <li>- Площадь комнаты 1: 11,16 кв.м. </li>
             <li>- Площадь комнаты 2: 12,01 кв.м. </li>
                  <li>Вид: на парк
 </li>
          </ul>
        `,
        },
      },
 
      section10: {
        withoutTerrace: {
          img: "img/sec10(5п60,31).jpg",
          title: "Двухкомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 60,31 м²</li>
        <li>- Жилая площадь: 24,92 кв.м,</li>
        <li>- Площадь кухни: 14,35 кв.м,</li>
       
            <li>- Площадь комната: 15,24 кв.м. </li>
              <li>- Площадь комната: 9,68 кв.м. </li>
              <li>Вид: на парк </li>
      </ul>
    `,
        },
        withTerrace: {
          img: "img/sec10(5п65,57).jpg",
          title: "Двухкомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 65,57 м²</li>
        <li>- Жилая площадь: 24,92 кв.м,</li>
        <li>- Площадь кухни: 14,35 кв.м,</li>
       
            <li>- Площадь комната: 15,24 кв.м. </li>
              <li>- Площадь комната: 9,68 кв.м. </li>
              <li>Вид: на парк </li>
      </ul>
        `,
        },
      },
  
      section11: {
        withoutTerrace: {
          img: "img/sec11(5п32,82).jpg",
          title: "Однокомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 32,82 м²</li>
        <li>- Жилая площадь: 10,19 кв.м,</li>
        <li>- Площадь кухни: 9,71 кв.м,</li>
      
            <li>- Площадь комната: 10,19 кв.м. </li>
              <li>Вид: во двор и на улицу в сторону дома №16 </li>
      </ul>
    `,
        },
      
      },


      section12: {
        withoutTerrace: {
          img: "img/sec12(5п45,35).jpg",
          title: "Двухкомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 45,35 м²</li>
        <li>- Жилая площадь: 19,87 кв.м,</li>
        <li>- Площадь кухни: 13,32 кв.м,</li>
            <li>- Площадь комната: 10,04 кв.м. </li>
             <li>- Площадь комната: 9,83 кв.м. </li>
              <li>Вид: во двор и на школу </li>
      </ul>
    `,
        },
   
      },


      section13: {
        withoutTerrace: {
          img: "img/sec13(5п31,88).jpg",
          title: "Однокомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 31,88 м²</li>
        <li>- Жилая площадь: 10,00 кв.м,</li>
        <li>- Площадь кухни: 9,21 кв.м,</li>
    
            <li>- Площадь комната: 10,00 кв.м. </li>
              <li>Вид: во двор </li>
      </ul>
    `,
        },
    
      },

      section14: {
        withoutTerrace: {
          img: "img/sec14(4п32,87).jpg",
          title: "Однокомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 32,87 м²</li>
        <li>- Жилая площадь: 11,32 кв.м,</li>
        <li>- Площадь кухни: 11,21 кв.м,</li>
       
            <li>- Площадь комната: 11,32 кв.м. </li>
              <li>Вид: во двор </li>
      </ul>
    `,
        },
 
      },

      section15: {
        withoutTerrace: {
          img: "img/sec15(4п40,47).jpg",
          title: "Однокомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 40,47 м²</li>
        <li>- Жилая площадь: 14,04 кв.м,</li>
        <li>- Площадь кухни: 11,6 кв.м,</li>
            <li>- Площадь комната: 14,04 кв.м. </li>
              <li>Вид: во двор и на парк </li>
      </ul>
    `,
        },
        withTerrace: {
          img: "img/sec15(4п41,59).jpg",
          title: "Однокомнатная квартира с террасой",
          description: `
          <ul>
            <li>- Общая площадь: 41,59 м²</li>
            <li>- Жилая площадь: 14,04 кв.м,</li>
            <li>- Площадь кухни: 11,6 кв.м,</li>
              <li>- Площадь комнаты: 14,04 кв.м,</li>
                  <li>Вид: во двор и на парк </li>
          </ul>
        `,
        },
      },

   
      section16: {
        withoutTerrace: {
          img: "img/sec16(2п36,78).jpg",
          title: "Однокомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 36,78 м²</li>
        <li>- Жилая площадь: 12,02 кв.м,</li>
        <li>- Площадь кухни: 10,98 кв.м,</li>
        
            <li>- Площадь комната: 12,02 кв.м. </li>
              <li>Вид: во двор в сторону дома №16 </li>
      </ul>
    `,
        },
     
      },
      section17: {
        withoutTerrace: {
          img: "img/sec17(2п28,79).jpg",
          title: "Однокомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 28,79 м²</li>
        <li>- Жилая площадь: 11,93 кв.м,</li>
        <li>- Площадь кухни: 6,32 кв.м,</li>
        
            <li>- Площадь комнаты: 11,93 кв.м. </li>
              <li>Вид: во двор и на улицу в сторону дома №16 </li>
      </ul>
    `,
        },
       
      },

      section18: {
        withoutTerrace: {
          img: "img/sec18(37,6).jpg",
          title: "Однокомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 37,60 м²</li>
        <li>- Жилая площадь: 10,95 кв.м,</li>
        <li>- Площадь кухни: 12,28 кв.м,</li>
         
            <li>- Площадь комната: 10,95 кв.м. </li>
              <li>Вид: во двор и на улицу в сторону дома №16 </li>
      </ul>
    `,
        },
      },

      section19: {
        withoutTerrace: {
          img: "img/sec19(1п34,7).jpg",
          title: "Однокомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 34,70 м²</li>
        <li>- Жилая площадь: 10,99 кв.м,</li>
        <li>- Площадь кухни: 10,00 кв.м,</li>
     
            <li>- Площадь комната: 10,99 кв.м. </li>
              <li>Вид: во двор и на улицу в сторону дома №16 </li>
      </ul>
    `,
        },
   
      },

      section20: {
        withoutTerrace: {
          img: "img/sec20(1п36,4).jpg",
          title: "Однокомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 36,40 м²</li>
        <li>- Жилая площадь: 12,13 кв.м,</li>
        <li>- Площадь кухни: 10,11 кв.м,</li>
         
            <li>- Площадь комната: 12,13 кв.м. </li>
              <li>Вид: во двор  </li>
      </ul>
    `,
        },
     
      },

      section21: {
        withoutTerrace: {
          img: "img/sec21(1п35,49).jpg",
          title: "Однокомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 35,49 м²</li>
        <li>- Жилая площадь: 11,31 кв.м,</li>
        <li>- Площадь кухни: 10,60 кв.м,</li>
       
            <li>- Площадь комната: 11,31 кв.м. </li>
              <li>Вид: во двор и на улицу на 15 и 16 дом </li>
      </ul>
    `,
        },
       
      },

      section22: {
        withoutTerrace: {
          img: "img/sec22(1п33,4).jpg",
          title: "Однокомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 33,44 м²</li>
        <li>- Жилая площадь: 11,26 кв.м,</li>
        <li>- Площадь кухни: 10,40 кв.м,</li>
            <li>- Площадь комната: 11,26 кв.м. </li>
              <li>Вид: во двор  </li>
      </ul>
    `,
        },
      
      },


      section23: {
        withoutTerrace: {
          img: "img/sec23(2п64,32).jpg",
          title: "Двухкомнатная квартира",
          description: `
      <ul>
        <li>- Общая площадь: 64,32 м²</li>
        <li>- Жилая площадь: 29,35 кв.м,</li>
        <li>- Площадь кухни: 13,7 кв.м,</li>
            <li>- Площадь комната 1: 13,8 кв.м. </li>
              <li>- Площадь комната 2: 15,55 кв.м. </li>
              <li>Вид: во двор и на улицу дома №16  </li>
      </ul>
    `,
        },
      
      },
    };

    const modal = document.getElementById("modal-choice");
    const modalDialog = modal.querySelector('.modal__content');
    const withoutTerraceImage = document.getElementById("without-terrace-image");
    const withoutTerraceTitle = document.getElementById("without-terrace-title");
    const withoutTerraceDescription = document.getElementById("without-terrace-description");
    const withTerraceImage = document.getElementById("with-terrace-image");
    const withTerraceTitle = document.getElementById("with-terrace-title");
    const withTerraceDescription = document.getElementById("with-terrace-description");
    
    function openModals(section) {

    if (sectionData[section]) {
    const withoutTerraceData = sectionData[section].withoutTerrace;
    const withTerraceData = sectionData[section].withTerrace;
    
    if (withoutTerraceData) {
    withoutTerraceImage.src = withoutTerraceData.img;
    withoutTerraceTitle.textContent = withoutTerraceData.title;
    withoutTerraceDescription.innerHTML = withoutTerraceData.description;
    document.getElementById("without-terrace-section").style.display = "block";
    } else {
    document.getElementById("without-terrace-section").style.display = "none";
    }
    
    if (withTerraceData) {
      modalDialog.classList.add('two-sections');
      modalDialog.classList.remove('one-section');
    
    withTerraceImage.src = withTerraceData.img;
    withTerraceTitle.textContent = withTerraceData.title;
    withTerraceDescription.innerHTML = withTerraceData.description;
    document.getElementById("with-terrace-section").style.display = "block";
    } else {
      modalDialog.classList.add('one-section');
      modalDialog.classList.remove('two-sections');
    document.getElementById("with-terrace-section").style.display = "none";
    }
    
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    }
    }
    
    document.querySelectorAll(".clickable-area").forEach((area) => {
    area.addEventListener("click", function () {
    const sectionClass = this.classList[1]; // Получаем класс секции
    openModals(sectionClass);
    });
    });
    


});




