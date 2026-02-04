/* ============================================
   AGROTESP - JAVASCRIPT PROFISSIONAL
   Pulverização Agrícola com Drones
   (Versão para Páginas Separadas)
   ============================================ */

(function() {
  'use strict';

  /* ============================================
     ELEMENTOS DO DOM
     ============================================ */
  const elements = {
    navToggle: document.getElementById('navToggle'),
    sideNav: document.getElementById('sideNav'),
    overlay: document.getElementById('overlay'),
    navLinks: document.querySelectorAll('.nav-link'),
    faqItems: document.querySelectorAll('.faq-item'),
    contactForm: document.getElementById('contactForm')
  };

  /* ============================================
     MENU LATERAL - ABRIR/FECHAR
     ============================================ */
  
  // Abrir/Fechar menu ao clicar no botão toggle
  if (elements.navToggle) {
    elements.navToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
    });
  }

  // Fechar menu ao clicar no overlay
  if (elements.overlay) {
    elements.overlay.addEventListener('click', closeMenu);
  }

  // Fechar menu ao pressionar ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && elements.sideNav.classList.contains('active')) {
      closeMenu();
    }
  });

  // Função para abrir/fechar menu
  function toggleMenu() {
    elements.navToggle.classList.toggle('active');
    elements.sideNav.classList.toggle('active');
    elements.overlay.classList.toggle('active');
    
    // Prevenir scroll do body quando menu está aberto
    if (elements.sideNav.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // Função para fechar menu
  function closeMenu() {
    elements.navToggle.classList.remove('active');
    elements.sideNav.classList.remove('active');
    elements.overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ============================================
     NAVEGAÇÃO - Fechar menu ao clicar em links
     ============================================ */
  
  // Event listeners para links do menu lateral
  elements.navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Fecha o menu ao clicar em qualquer link
      closeMenu();
    });
  });

  /* ============================================
     FAQ ACCORDION
     ============================================ */
  
  // Event listeners para perguntas do FAQ
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.parentElement;
      const isActive = faqItem.classList.contains('active');
      
      // Fecha todos os itens
      elements.faqItems.forEach(item => {
        item.classList.remove('active');
      });
      
      // Se o item clicado não estava ativo, abre ele
      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });

  /* ============================================
     SMOOTH SCROLL PARA ÂNCORAS
     ============================================ */
  
  // Adiciona smooth scroll para links com href="#"
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Se o href é apenas "#", previne comportamento padrão
      if (href === '#') {
        e.preventDefault();
        return;
      }
      
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  /* ============================================
     ANIMAÇÕES AO SCROLL
     ============================================ */
  
  // Observer para animações ao entrar na viewport
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Aplica animação fade-in para cards
  const animatedElements = document.querySelectorAll('.card, .value-item, .contact-card, .step');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  /* ============================================
     MÁSCARAS DE FORMULÁRIO
     ============================================ */
  
  // Máscara para telefone
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  
  phoneInputs.forEach(input => {
    input.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      
      if (value.length <= 11) {
        // Formato: (00) 00000-0000 ou (00) 0000-0000
        if (value.length <= 10) {
          value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
        } else {
          value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
        }
      }
      
      e.target.value = value;
    });
  });

  /* ============================================
     DETECÇÃO DE TAMANHO DE TELA
     ============================================ */
  
  // Fecha menu automaticamente em telas grandes
  function handleResize() {
    if (window.innerWidth > 768 && elements.sideNav.classList.contains('active')) {
      closeMenu();
    }
  }

  window.addEventListener('resize', handleResize);

  /* ============================================
     PREVENÇÃO DE CLIQUE DUPLO EM BOTÕES
     ============================================ */
  
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      if (this.classList.contains('processing')) {
        return false;
      }
      
      this.classList.add('processing');
      
      setTimeout(() => {
        this.classList.remove('processing');
      }, 1000);
    });
  });

  /* ============================================
     ACESSIBILIDADE - NAVEGAÇÃO POR TECLADO
     ============================================ */
  
  // Foco no primeiro elemento ao abrir menu
  if (elements.navToggle) {
    elements.navToggle.addEventListener('click', function() {
      if (elements.sideNav.classList.contains('active')) {
        setTimeout(() => {
          const firstLink = elements.sideNav.querySelector('.nav-link');
          if (firstLink) {
            firstLink.focus();
          }
        }, 300);
      }
    });
  }

  // Navegação por TAB dentro do menu
  if (elements.sideNav) {
    elements.sideNav.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        const focusableElements = this.querySelectorAll('.nav-link');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });
  }

  /* ============================================
     LAZY LOADING DE IMAGENS
     ============================================ */
  
  // Observer para lazy loading
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          
          imageObserver.unobserve(img);
        }
      });
    });

    // Aplica lazy loading em imagens com data-src
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }

  /* ============================================
     INICIALIZAÇÃO
     ============================================ */
  
  // Log de inicialização (pode ser removido em produção)
  console.log('%c🚁 AGROTESP - Sistema Inicializado', 'color: #1e7d3c; font-weight: bold; font-size: 14px;');
  console.log('%cPulverização Agrícola com Drones', 'color: #0d4d8c; font-size: 12px;');

})();
