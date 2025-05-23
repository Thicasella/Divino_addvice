/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    const navbarShrink = function () { 
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) return;
        
        navbarCollapsible.classList.toggle('navbar-shrink', window.scrollY !== 0);
    };
    //thiago aqui

    // Initialize
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    // Bootstrap ScrollSpy
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Mobile menu close functionality - CORREÇÃO PRINCIPAL
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Fecha o menu ao clicar nos links
    document.querySelectorAll('#navbarResponsive .nav-link').forEach(navLink => {
        navLink.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', (event) => {
        if (!navbarCollapse.contains(event.target) && 
            !navbarToggler.contains(event.target) &&
            navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});

// Codigo de efeito dos beneficios da esquerda
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in-left");
    const checkVisibility = () => {
      fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
  
        // Verifica se o elemento está visível na tela
        if (elementTop < window.innerHeight && elementBottom > 100) {
          element.classList.add("active");
        }
      });
    };
  
    // Verifica a visibilidade ao carregar a página e ao rolar
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Verifica a visibilidade inicial
  });

// Codigo de efeito dos beneficios da direita
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in-right");

  const checkVisibility = () => {
    fadeElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      // Verifica se o elemento está visível na tela
      if (elementTop < window.innerHeight && elementBottom > 100) {
        element.classList.add("active");
      }
    });
  };

  // Verifica a visibilidade ao carregar a página e ao rolar
  window.addEventListener("scroll", checkVisibility);
  checkVisibility();// Verifica a visibilidade inicial
});

// Codigo para permitir que insira apenas números no contato telefonico
['phone', 'phone2'].forEach(function(id) {
  const input = document.getElementById(id);
  if (input) {
    input.addEventListener('input', function(e) {
      let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
      e.target.value = !x[2]
        ? x[1]
        : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
  }
});


// Codigo do carrossel portifolio
function handleCarrosselHover(carrossel, event) {
  const container = carrossel.parentElement;
  const rect = container.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const width = rect.width;
  
  // Calcula qual imagem mostrar (1-4, pois a primeira já está visível)
  const imageIndex = Math.min(
      Math.floor((x / width) * 4) + 1,
      4
  );
  
  // Move o carrossel para mostrar a imagem correspondente
  carrossel.style.transform = `translateX(-${imageIndex * 20}%)`;
}

function resetCarrossel(container) {
  const carrossel = container.querySelector('.carrossel');
  carrossel.style.transform = 'translateX(0)';
}

//Codigo para ocultar button float whatsApp
function checkVisibility() {
  const button = document.getElementById('whatsapp-float');
  const sectionsToHideIn = [
    document.getElementById('header'),
    document.getElementById('div-contact'),
    document.getElementById('services-contact'),
    document.getElementById('contact'),
    document.getElementById('footer'),
  ];

  const buttonRect = button.getBoundingClientRect();
  let isOverlapping = false;

  sectionsToHideIn.forEach(section => {
    if (section) {
      const sectionRect = section.getBoundingClientRect();
      const overlap = !(buttonRect.bottom < sectionRect.top || buttonRect.top > sectionRect.bottom);
      if (overlap) isOverlapping = true;
    }
  });

  button.classList.toggle('hidden', isOverlapping);
}

// Verifica quando rolar ou redimensionar a tela
window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);

// Verifica ao carregar
window.addEventListener('load', checkVisibility);


// EmailJS Script
emailjs.init("f48Jibga41l8YPbxM");

// Formulário 1 "Solicite seu orçamento"

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const btn = document.getElementById('submitButton');
  btn.innerText = 'Enviando...';

  emailjs.sendForm("service_22fhgmz", "template_owc3pjq", this)  // ID do Template 1
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      btn.innerText = 'Enviar';
      this.reset();
    })
    .catch((error) => {
      alert("Erro ao enviar: " + JSON.stringify(error));
      btn.innerText = 'Tentar novamente';
    });
});

// Formulário 2 "Contato"
emailjs.init("f48Jibga41l8YPbxM");

document.getElementById('contactForm2').addEventListener('submit', function(e) {
  e.preventDefault();

  const btn = document.getElementById('submitButton');
  btn.innerText = 'Enviando...';

  emailjs.sendForm("service_22fhgmz", "template_iwcj5fk", this) // ID do Template 1
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      btn.innerText = 'Enviar';
      this.reset();
    })
    .catch((error) => {
      alert("Erro ao enviar: " + JSON.stringify(error));
      btn.innerText = 'Tentar novamente';
    });
});

