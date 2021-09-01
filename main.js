const myHeading = document.querySelector('h1');
myHeading.textContent = 'Mozilla is cool! R v v';
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', Naveen);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }