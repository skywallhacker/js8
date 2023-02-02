let cars = [28000, 5000, 11000, 12000, 16000, 8000, 7000, 22000, 45000, 80000, 55000, 20000]

let from = prompt('from') // 10000
let upto = prompt('upto') // 20000 


let filterResult = cars.filter((item) => {
    if (item >= from && item < upto) return item; {
        console.log();
    }
}
)
alert(filterResult)

let isSelected = confirm('выбрали машину?')


if (isSelected === true) {
    let name = +prompt('Какую машину выбрали ')
    let idx = cars.indexOf(name)
    if (idx !== -1) {
        cars.splice(idx, 1)
    } else {
        alert('error')
    }
} else { }

console.log(cars);













