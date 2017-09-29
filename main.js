const $track = document.querySelector('#track')
$track.appendChild(renderCar('images/car.jpg'))

function renderCar(image) {
  const $car = document.createElement('img')
  $car.setAttribute('src', 'images/car.jpg')
  $car.setAttribute('id', 'car')
  $car.setAttribute('style', 'top: 0px; left: 0px')
  return $car
}

class Car {
  constructor(element, direction, speed, location) {
    this.direction = direction
    this.speed = speed
    this.location = location
    this.element = element
    this.yVal = this.element.style.top
    this.xVal = this.element.style.left
    this.intervalId = null
    this.power = 'off'
  }

  turn(direction) {
    this.direction = direction
  }

  accelerate(speed) {
    this.speed += speed
  }

  move() {
    switch (this.direction) {
      case 'North':
        this.yVal = parseInt(this.yVal, 10) - this.speed + 'px'
        this.element.style.top = this.yVal
        break
      case 'East':
        this.xVal = parseInt(this.xVal, 10) + this.speed + 'px'
        this.element.style.left = this.xVal
        break
      case 'South':
        this.yVal = parseInt(this.yVal, 10) + this.speed + 'px'
        this.element.style.top = this.yVal
        break
      case 'West':
        this.xVal = parseInt(this.xVal, 10) - this.speed + 'px'
        this.element.style.left = this.xVal
    }
  }

  static start(car) {
    if (car.power === 'off') {
      car.power = 'on'
      car.speed = 1
      car.intervalId = setInterval(() => car.move(), 16)
    }
  }

  static stop(car) {
    if (car.power === 'on') {
      car.power = 'off'
      clearInterval(car.intervalId)
      car.speed = 0
    }
  }
}

const $car = document.querySelector('#car')
const playerCar = new Car($car, 'East', 0, [0, 0])

document.addEventListener('keydown', () => {
  console.log('test')
  Car.start(playerCar)
})

document.addEventListener('keydown', () => {
  const key = event.keyCode
  if (key === 37 || key === 38 || key === 39 || key === 40) {
    switch (key) {
      case 37:
        playerCar.direction = 'West'
        break
      case 38:
        playerCar.direction = 'North'
        break
      case 39:
        playerCar.direction = 'East'
        break
      case 40:
        playerCar.direction = 'South'
        break
    }
  }
})

document.addEventListener('keydown', () => {
  if (event.key !== ' ') {
    return
  }
  Car.stop(playerCar)
})
