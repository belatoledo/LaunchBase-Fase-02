const users = [
    { name: "Carlos", technologies: ["HTML", "CSS"] },
    { name: "Jasmine", technologies: ["JavaScript", "CSS"] },
    { name: "Tuane", technologies: ["HTML", "Node.js"] }
]


function checkUsersCss() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].technologies[0] || users[i].technologies[1] == 'CSS') {
            console.log(`O usuário ${users[i].name} trabalha com CSS.`);
            
        }else {
            console.log(`Ninguém trabalha com CSS`);
            
        }
    }
}