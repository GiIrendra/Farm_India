function headerBg(){
  const element = document.getElementsByClassName('filter-div4')[0];
  const elementText = document.getElementsByClassName('container-div13')[0];
  const currentBackgroundColor = window.getComputedStyle(element).background;
  const currentColorEText = window.getComputedStyle(elementText).background;

    if (currentBackgroundColor === 'rgba(0, 0, 0, 0) linear-gradient(89.83deg, rgb(255, 255, 255), rgb(255, 255, 255) 0.01%, rgba(255, 255, 255, 0)) repeat scroll 0% 0% / auto padding-box border-box' && currentColorEText==='rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box') {
     element.style.background = 'linear-gradient(89.83deg, rgb(255, 255, 255), rgb(8, 46, 71) 0.01%, rgba(255, 255, 255, 0))';
     elementText.style.color = 'white';
    } else {
      element.style.background = 'rgba(0, 0, 0, 0) linear-gradient(89.83deg, rgb(255, 255, 255), rgb(255, 255, 255) 0.01%, rgba(255, 255, 255, 0)) repeat scroll 0% 0% / auto padding-box border-box';
      elementText.style.color = 'black';
    }
  
}

function googleBg() {
  const element = document.getElementById('google_translate_element');
  const currentBackgroundColor = window.getComputedStyle(element).backgroundColor;
  if (currentBackgroundColor === 'rgba(0, 0, 0, 0)' || currentBackgroundColor === 'white') {
   element.style.backgroundColor = 'rgb(8, 46, 71)';
  } else {
  element.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
}

function TextColor(){
  const element = document.getElementsByClassName('paragraph-div11')[0];
  const elementColor = window.getComputedStyle(element).color;

  if(elementColor==='rgb(115, 115, 115)' ){
    element.style.color='white';
  }
  else
    element.style.color='rgb(115, 115, 115)';

}
function weatcherText(){
  const element = document.getElementsByClassName('paragraph-div14')[0];
  const elementColor = window.getComputedStyle(element).color;

  if(elementColor==='rgb(115, 115, 115)' ){
    element.style.color='white';
  }
  else
    element.style.color='rgb(115, 115, 115)';

}
function WeatherCrp(){
  const element = document.getElementsByClassName('layout-1-div3')[0];
  const currentBackgroundColor = window.getComputedStyle(element).backgroundColor;
  if (currentBackgroundColor === 'rgb(255, 255, 255)') {
   element.style.backgroundColor = 'rgb(45, 77, 97)';
  } else {
  element.style.backgroundColor = 'white';
  }
}
function FooterBg(){
  const element = document.getElementsByClassName('div13')[0];
  const currentBackgroundColor = window.getComputedStyle(element).backgroundColor;
  if (currentBackgroundColor === 'rgb(255, 255, 255)') {
   element.style.backgroundColor = 'rgb(45, 77, 97)';
  } else {
  element.style.backgroundColor = 'white';
  }
}
function last2ndFooterBg(){
  const element = document.getElementsByClassName('layout-1-div2')[0];
  const currentBackgroundColor = window.getComputedStyle(element).backgroundColor;
  console.log(currentBackgroundColor);
  if (currentBackgroundColor === 'rgb(239, 239, 239)') {
   element.style.backgroundColor = 'rgb(26, 59, 81)';
  } else {
  element.style.backgroundColor = 'rgb(239, 239, 239)';
  }
}
function NavB(){
  const element = document.getElementsByClassName('collapse-navbar-collapse-div4')[0];
  const element1 = document.getElementsByClassName('link-b49')[1];
  const currentBackgroundColor = window.getComputedStyle(element).color;
  console.log(currentBackgroundColor);
  if (currentBackgroundColor === 'rgb(239, 239, 239)') {
   element.style.color = 'rgb(26, 59, 81)';
   element1.style.color = 'rgb(26, 59, 81)';
  } else {
  element.style.color = 'rgb(239, 239, 239)';
  element1.style.color = 'rgb(239, 239, 239)';
  }
}

// know your crops here
// 
function DarkFunc() {
  googleBg();
  headerBg();
  TextColor();
  WeatherCrp();
  weatcherText();
  FooterBg();
  last2ndFooterBg();
  NavB();
    const element = document.getElementsByClassName('layout-2-div')[0];
    const currentBackgroundColor = window.getComputedStyle(element).backgroundColor;

    if (currentBackgroundColor === 'rgb(245, 245, 245)') {
     element.style.backgroundColor = 'rgb(26, 59, 81)';
    } else {
    element.style.backgroundColor = 'rgb(245, 245, 245)';
    }
  };