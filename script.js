const hungerBar = document.querySelector('#container div.stats div.stat-cont div.fome div');
const stressBar = document.querySelector('#container div.stats div.stat-cont div.estresse div');
const happinessBar = document.querySelector('#container div.stats div.stat-cont div.felicidade div');

const DogSitting = document.querySelector('#container div.dog img:nth-child(2)');
const DogRunning = document.querySelector('#container div.dog img:nth-child(3)');

const dog = {
  Feed(value) {
    animations.Feed();

    let actualHunger = parseInt(hungerBar.style.width)
    let newHunger = actualHunger - value;

    if (newHunger < 0) {
      hungerBar.style.width = `0%`
    } else {
      hungerBar.style.width = `${newHunger}%`
    }

    if (newHunger > 70) {
      hungerBar.style.backgroundColor = "red"
    } else {
      hungerBar.style.backgroundColor = "rgb(29, 221, 29)"
    }

    let actualHappiness = parseInt(happinessBar.style.width);
    let newHappiness = actualHappiness + 10;

    if (newHappiness > 100) {
      happinessBar.style.width = `100%`
    } else {
      happinessBar.style.width = `${newHappiness}%`
    }

    if (newHappiness < 20) {
      happinessBar.style.backgroundColor = "red"
    } else {
      happinessBar.style.backgroundColor = "rgb(29, 221, 29)"
    }


    let actualStress = parseInt(stressBar.style.width)
    let newStress = actualStress - 8;

    if (newStress < 0) {
      stressBar.style.width = `0%`
    } else {
      stressBar.style.width = `${newStress}%`
    }

    if (newStress > 70) {
      stressBar.style.backgroundColor = "red"
    } else {
      stressBar.style.backgroundColor = "rgb(29, 221, 29)"
    }
  },
  Pet(value) {
    let actualHappiness = parseInt(happinessBar.style.width);
    let newHappiness = actualHappiness + value;

    if(actualHappiness > 90){
      animations.Trick();
    } else {
      animations.Pet();
    }

    if (newHappiness > 100) {
      happinessBar.style.width = `100%`
    } else {
      happinessBar.style.width = `${newHappiness}%`
    }

    if (newHappiness < 20) {
      happinessBar.style.backgroundColor = "red"
    } else {
      happinessBar.style.backgroundColor = "rgb(29, 221, 29)"
    }


    let actualStress = parseInt(stressBar.style.width)
    let newStress = actualStress - 18;

    if (newStress < 0) {
      stressBar.style.width = `0%`
    } else {
      stressBar.style.width = `${newStress}%`
    }

    if (newStress > 70) {
      stressBar.style.backgroundColor = "red"
    } else {
      stressBar.style.backgroundColor = "rgb(29, 221, 29)"
    }

  },
  Out(value) {
    animations.Out();

    let actualStress = parseInt(stressBar.style.width)
    let newStress = actualStress - value;

    if (newStress < 0) {
      stressBar.style.width = `0%`
    } else {
      stressBar.style.width = `${newStress}%`
    }

    if (newStress > 70) {
      stressBar.style.backgroundColor = "red"
    } else {
      stressBar.style.backgroundColor = "rgb(29, 221, 29)"
    }

    let actualHappiness = parseInt(happinessBar.style.width);
    let newHappiness = actualHappiness + 20;

    if (newHappiness > 100) {
      happinessBar.style.width = `100%`
    } else {
      happinessBar.style.width = `${newHappiness}%`
    }

    if (newHappiness < 20) {
      happinessBar.style.backgroundColor = "red"
    } else {
      happinessBar.style.backgroundColor = "rgb(29, 221, 29)"
    }
  },
}

const status = {
  Hunger() {
    setInterval(function () {
      let actualHunger = parseInt(hungerBar.style.width)
      let newHunger = actualHunger + 15;

      if (newHunger > 70) {
        hungerBar.style.backgroundColor = "red"
      } else {
        hungerBar.style.backgroundColor = "rgb(29, 221, 29)"
      }

      if (newHunger > 100) {
        hungerBar.style.width = `100%`
      } else {
        hungerBar.style.width = `${newHunger}%`
      }
    }, 8000)

    this.Stress()
  },
  Stress() {
    setInterval(function () {
      let actualStress = parseInt(stressBar.style.width)
      let newStress = actualStress + 15;

      if (newStress > 70) {
        stressBar.style.backgroundColor = "red"
      } else {
        stressBar.style.backgroundColor = "rgb(29, 221, 29)"
      }

      if (newStress > 100) {
        stressBar.style.width = `100%`
      } else {
        stressBar.style.width = `${newStress}%`
      }
    }, 5000)
    this.Heppiness()
  },
  Heppiness() {
    setInterval(function () {
      let actualHappiness = parseInt(happinessBar.style.width);
      let newHappiness = actualHappiness - 15;

      if (newHappiness < 20) {
        happinessBar.style.backgroundColor = "red"
      } else {
        happinessBar.style.backgroundColor = "rgb(29, 221, 29)"
      }

      if (newHappiness < 0) {
        happinessBar.style.width = `0%`
      } else {
        happinessBar.style.width = `${newHappiness}%`
      }
    }, 8000)
  },
}

const animations = {
  Pet(){
    DogSitting.classList.add('pet');
    setTimeout(() => {
      DogSitting.classList.remove('pet');
    }, 2500)
  },
  Feed(){
    DogSitting.classList.add('feed');
    setTimeout(() => {
      DogSitting.classList.remove('feed');
    }, 7500)
  },
  Out(){
    DogSitting.classList.add('out');
    DogRunning.classList.remove('out');

    setTimeout(()=>{
      DogSitting.classList.remove('out');
      DogRunning.classList.add('out');
    }, 8000)
  },
  Trick(){
    DogSitting.classList.add('trick');
    setTimeout(() => {
      DogSitting.classList.remove('trick');
    }, 3500)
  },
}

const start = {
  Init(){
    let modalOverlay = document.querySelector('div.modal-overlay');
    modalOverlay.classList.add('out');

    status.Hunger()

    console.log('teste');
  }
}