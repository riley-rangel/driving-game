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
        this.element.style.left = this.xVal
        break
      case 'West':
        this.xVal = parseInt(this.xVal, 10) - this.speed + 'px'
        this.element.style.top = this.yVal
    }
  }

  static start(car) {
    this.intervalId = setInterval(() => car.move(), 16)
  }

  static stop(car) {
    clearInterval(this.intervalId)
    car.speed = 0
  }
}

const $car = document.querySelector('#car')
const playerCar = new Car($car, 'East', 0, [0, 0])

$track.addEventListener('click', () => Car.start(playerCar))

document.addEventListener('keydown', () => {
  if (event.key !== 'ArrowRight') {
    return
  }
  playerCar.accelerate(1)
})
