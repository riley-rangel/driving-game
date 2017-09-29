const $track = document.querySelector('#track')
$track.appendChild(renderCar('images/car.jpg'))

function renderCar(image) {
  const $car = document.createElement('img')
  $car.setAttribute('src', 'images/car.jpg')
  $car.setAttribute('id', 'car')
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
        this.yVal = parseInt(this.yVal) + this.speed + 'px'
        break
      case 'East':
        this.xVal = parseInt(this.xVal) + this.speed + 'px'
        break
      case 'South':
        this.yVal = parseInt(this.yVal) - this.speed + 'px'
        break
      case 'West':
        this.xVal = parseInt(this.xVal) - this.speed + 'px'
    }
  }

  static start(car) {
    setInterval(() => car.move(), 16)
  }
}

const playerCar = new Car('East', 0, [0, 0])

$track.addEventListener('click', () => Car.start(playerCar))
