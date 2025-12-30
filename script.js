// ------------------------------------- Waiting for the entire site to load ------------------------------------------------//

jQuery(window).load(function() { 
		jQuery("#loaderInner").fadeOut(); 
		jQuery("#loader").delay(400).fadeOut("slow"); 
		$('.teaserTitle ').stop().animate({marginTop :'330px', opacity:"1"}, 1000, 'easeOutQuint');
		$('.shortcat a ').stop().animate({marginTop :'65px', opacity:"1"}, 600, 'easeOutQuint');
});



$(document).ready(function(){

// Minimal site script (no jQuery required)

document.addEventListener('DOMContentLoaded', function(){
  var navToggle = document.getElementById('nav-toggle');
  var siteNav = document.getElementById('site-nav');

  if(navToggle && siteNav){
    navToggle.addEventListener('click', function(){
      var shown = siteNav.style.display === 'block';
      siteNav.style.display = shown ? 'none' : 'block';
    });
    siteNav.addEventListener('click', function(e){
      if(e.target.tagName === 'A') siteNav.style.display = 'none';
    });
  }

  // smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var href = this.getAttribute('href');
      if(href && href.length > 1){
        var target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
        }
      }
    });
  });

  // set current year
  var yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // basic form validation
  var form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      var email = form.querySelector('[name=email]');
      if(email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)){
        e.preventDefault();
        alert('Please enter a valid email address');
        email.focus();
      }
    });
  }
});



//---------------------------------- Clients animation-----------------------------------------//



$('.clientList a').css({opacity:0.5});

		$('.clientList a').hover( function(){ 

			$(this).stop().animate({opacity:"1"}, 100, 'easeOutQuint');
//------------------------------------- Waiting for the entire site to load ------------------------------------------------//

jQuery(window).load(function() { 
		jQuery("#loaderInner").fadeOut(); 
		jQuery("#loader").delay(400).fadeOut("slow"); 
		$('.teaserTitle ').stop().animate({marginTop :'330px', opacity:"1"}, 1000, 'easeOutQuint');
		$('.shortcat a ').stop().animate({marginTop :'65px', opacity:"1"}, 600, 'easeOutQuint');
});



$(document).ready(function(){

// Minimal site script (no jQuery required)

document.addEventListener('DOMContentLoaded', function(){
  var navToggle = document.getElementById('nav-toggle');
  var siteNav = document.getElementById('site-nav');

  if(navToggle && siteNav){
	navToggle.addEventListener('click', function(){
	  var shown = siteNav.style.display === 'block';
	  siteNav.style.display = shown ? 'none' : 'block';
	});
	siteNav.addEventListener('click', function(e){
	  if(e.target.tagName === 'A') siteNav.style.display = 'none';
	});
  }

  // smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
	a.addEventListener('click', function(e){
	  var href = this.getAttribute('href');
	  if(href && href.length > 1){
		var target = document.querySelector(href);
		if(target){
		  e.preventDefault();
		  target.scrollIntoView({behavior:'smooth', block:'start'});
		}
	  }
	});
  });

  // set current year
  var yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // basic form validation
  var form = document.getElementById('contact-form');
  if(form){
	form.addEventListener('submit', function(e){
	  var email = form.querySelector('[name=email]');
	  if(email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)){
		e.preventDefault();
		alert('Please enter a valid email address');
		email.focus();
	  }
	});
  }
});




//---------------------------------- Clients animation-----------------------------------------//



$('.clientList a').css({opacity:0.5});

		$('.clientList a').hover( function(){ 

			$(this).stop().animate({opacity:"1"}, 100, 'easeOutQuint');
