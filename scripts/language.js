//Смена языка
let rus = {
    li1st: 'ПРОДУКТ',
    li2nd: 'ДОКИ',
    li3th: 'АУДИТЫ',
    li4th: 'СОЦИАЛКА',
    li5th: 'ПАРТНЕРЫ',
    mainp: 'Присоединяйтесь к нашей <span>криптоэкосистеме</span> и откройте новые возможности для своих финансов уже сегодня! Получайте кешбэк, образование, сбережения, токенизацию, оплату счетов, майнинг и поддержку при запуске стартапов.',
    mainh2: 'все в одном месте.<br> присоединяйтесь',
    formh1: 'Вход',
    btnreg: 'Регистрация',
    btnlogin: 'Вход',
};
  
let eng = {
    li1st: 'PRODUCT',
    li2nd: 'DOCKS',
    li3th: 'AUDITS',
    li4th: 'SOCIAL',
    li5th: 'PARTNERSHIPS',
    mainp: 'Join our <span>crypto ecosystem</span> and discover new opportunities for your finances today! Get cashback, education, savings, tokenization, bill payments, mining and support when launching startups.',
    mainh2: 'all in one place.<br> join us',
    formh1: 'Sign up',
    btnreg: 'Registration',
    btnlogin: 'Login',
};

// let ua = {
//     li1st: 'ПРОДУКТ',
//     li2nd: 'ДОКИ',
//     li3th: 'АУДIТЫ',
//     li4th: 'СОЦИАЛКА',
//     li5th: 'ПАРТНЕРЫ',
// };
  
  changeLagnuage();
  
  function changeLagnuage(){
    let language = lang.checked ? rus : eng;
    document.querySelectorAll('[text]').forEach(el => {
      el.innerHTML = language[el.getAttribute('text')];
  })
}
