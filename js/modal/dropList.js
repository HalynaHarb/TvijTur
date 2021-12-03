$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
  msg = '<span class="msg">Hidden input value: ';
$('.msg').html(msg + input + '</span>');
}); 

(() => {
    const refs = {
      openModalBtn: document.querySelectorAll('.price-btn'),
      closeModalBtn: document.getElementById('close'),
      modal: document.getElementById('modal'),
    };
    
  for(let i=0; i<refs.openModalBtn.length;i++){
    refs.openModalBtn[i].addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  }
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();