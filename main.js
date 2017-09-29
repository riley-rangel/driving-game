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
}

console.log(Car)
