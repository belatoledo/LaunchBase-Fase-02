const data = {
    programmer: 'Carlos',
    age: '32',
    technologies:[
        {name: 'C++', specialty: 'Desktop'},
        {name: 'Python', specialty: 'Data Science'},
        {name: 'JavaScript', specialty: 'Web/Mobile'}
    ]
}


console.log(`O usuário ${data.programmer} tem ${data.age} e usa a tecnologia ${data.technologies[0].name} com especialidade em ${data.technologies[0].specialty}`);
