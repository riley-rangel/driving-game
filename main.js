const $track = document.querySelector('#track')
$track.appendChild(renderCar('images/car.jpg'))

function renderCar(image) {
  const $car = document.createElement('img')
  $car.setAttribute('src', 'images/car.jpg')
  $car.setAttribute('id', 'car')
  return $car
}

class Car {
  constructor(direction, speed, location) {
    this.direction = direction
    this.speed = speed
    this.location = location
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
        this.location[1] += this.speed
        break
      case 'East':
        this.location[0] += this.speed
        break
      case 'South':
        this.location[1] -= this.speed
        break
      case 'West':
        this.location[0] -= this.speed
    }
  }

  static start(car) {
    setInterval(car.move(), 16)
  }
}

console.log(Car)
