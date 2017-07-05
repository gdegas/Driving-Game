/* eslint-disable no-unused-vars */

let isMoving = false

class Car {
  constructor(element, direction, speed, location) {
    this.direction = direction
    this.speed = speed
    this.location = location
    this.element = element
  }
  turn(direction) {
    this.direction = direction
    switch (direction) {
      case 'south': this.element.style.transform = 'rotate(90deg)'
    }
    switch (direction) {
      case 'north': this.element.style.transform = 'rotate(-90deg)'
    }
    switch (direction) {
      case 'east': this.element.style.transform = 'rotate(0deg)'
    }
    switch (direction) {
      case 'west': this.element.style.transform = 'rotate(-180deg)'
    }
  }
  accelerate(amount) {
    this.speed += amount
  }
  move() {
    switch (this.direction) {
      case 'north':
        this.location[1] -= this.speed
        this.element.style.top = this.location[1] + 'px'
        break
      case 'south':
        this.location[1] += this.speed
        this.element.style.top = this.location[1] + 'px'
        break
      case 'east':
        this.location[0] += this.speed
        this.element.style.left = this.location[0] + 'px'
        break
      case 'west':
        this.location[0] -= this.speed
        this.element.style.left = this.location[0] + 'px'
    }
  }
  static stopCar(car) {

  }
  static start(car) {

    const intervalId = setInterval(function () {
      car.move()
    }, 2)
  }
}

function renderCar() {
  const $car = document.createElement('div')
  $car.classList.add('car')
  return $car
}

const carToyota = renderCar()

document.body.appendChild(carToyota)

const toyota = new Car(carToyota, 'south', 1, [4, 4])

window.addEventListener('keydown', function () {
  switch (event.keyCode) {
    case 40:
      toyota.turn('south')
      console.log(this.direction)
      if (!isMoving) {
        isMoving = true
        Car.start(toyota)
      }
      break
    case 38:
      toyota.turn('north')
      console.log(this.direction)
      if (!isMoving) {
        isMoving = true
        Car.start(toyota)
      }
      break
    case 37:
      toyota.turn('west')
      console.log(this.direction)
      if (!isMoving) {
        isMoving = true
        Car.start(toyota)
      }
      break
    case 39:
      toyota.turn('east')
      console.log(this.direction)
      if (!isMoving) {
        isMoving = true
        Car.start(toyota)
      }
      break
  }
})

