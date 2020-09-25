const technology = [
    { name: 'C++', expertise: 'Desktop' },
    { name: 'Python', expertise: 'Data Science' },
    { name: 'JavaScript', expertise: 'Web/Mobile' }
]

const dev = {
    name: 'Antonio',
    age: 34,
    technology: technology[1]
}

console.log(`O usuário ${dev.name} tem ${dev.age} e usa a tecnologia ${dev.technology.name} com expertise em ${dev.technology.expertise}.`);