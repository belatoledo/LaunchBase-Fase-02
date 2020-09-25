const name = 'Silvana'
const gender = 'F'
const age = 40
const tax = 35

const canRetire = age + tax

if (tax<30 || canRetire<85) {
    console.log(`${name} você ainda não pode se aposentar`);
} else if (gender == 'F' && canRetire >= 85 || gender == 'M' && canRetire >= 95) {
    console.log(`${name}, você pode aposentar!`);
} 