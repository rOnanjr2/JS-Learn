// const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
// const fib = [1, 1, 2, 3, 5, 8, 13]

// for (a of fib) {
// 	console.log(a)
// }


// //const pow2 = num => num ** 2
// // const sqrt = num => Math.sqrt(num)
// console.log(fib.map(pow2).map(Math.sqrt))

//console.log(fib.map(pow2).filter())





// console.log(cars.includes('Мазда'))
// const index = cars.findIndex()
// cars[index] = 'Porsche'
// console.log(cars)

// const myArray = []
// myArray.push(1,2,3,4,5,6,7)
// myArray.unshift(0)
// myArray.shift()
// myArray.pop()
// console.log(myArray)
// console.log(myArray.reverse())

// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// // // console.log(reverseText)

// const people = [
// 	{name: 'Vladilen', budget: 4200},
// 	{name: 'Elena', budget: 3500},
// 	{name: 'Victoria', budget: 1700}
// ]


// const allBudget = people
// 	.filter(person => person.budget > 2000)
// 	.reduce((acc, person) => {
// 		acc+= person.budget
// 		return acc
// 	}, 0)

// console.log(allBudget)


// console.log(cars.map(car => car.toUpperCase()))

// console.log(upperCaseCars)
// console.log(cars)

// let findedPerson
// for (const person of people) {
// 	// console.log(person)
// 	if (person.budget === 3500) {
// 		findedPerson = person
// 	}
// }
// console.log(findedPerson)
// // const index = people.findIndex(function(person) {
// // 	return person.budget === 3500
// // })

//  console.log(people.find(person => person.budget === 3500))		//Лямбда-функция?

// console.log(person)

const person = {
	name: 'Vladilen',
	age: 26,
	isProgrammer: true,
	languages: ['ru', 'en', 'de'],
	'complex key': 'Complex value',
	['key_' + (1 + 3)]: 'Computed key',
	greet() {
		console.log('greet from person')
	},
	info() {
		console.log('this:', this)
		console.info('Информация про человека по имени ', this.name)
	}
}

const logger = {
	keys() {
		console.log('Object keys: ', Object.keys(this))
	},

	keysAndValues() {
		Object.keys(this).forEach(key => {
			console.log(`"${key}": ${this[key]}`)
		})
	}
}

logger.keysAndValues.call(person)


// person.info()
//
//
// const bound = logger.keys.bind(person)
// bound()
//
// console.log(person);
//
// Object.keys(person).forEach((key) => {
// 	console.log('key:', key)
// 	console.log('value', person[key])
// });

// for (let key in person) {  //фор ин может быть опасен - может зайти в прототип
// 	if (person.hasOwnProperty(key)) { //чтобы этого не происходило
	// console.log('key:', key)
	// console.log('value', person[key])
// 	}
//}
// const {name, age: personAge = 10, languages} = person 			//деструктуризация
// console.log(name, personAge, languages)
// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])
// person.greet()
// person.age++
// person.languages.push('by')
// person['key_4'] = undefined
// delete person['key_4']
// console.log(person)
