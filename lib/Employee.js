

class Employee {
    constructor(name, id, email)  {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
}

// const html = renderHTML(data);
// console.log(html);

// function renderHTML({name, id, email}) {
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
//         <link rel="stylesheet" href="./style.css">
//         <title>My Team</title>
//     </head>
//     <body>
//         <div id="jumbo" class="jumbotron jumbotron-fluid">
//             <div class="container">
//             <h1 class="display-4">My Team</h1>
//             <p class="lead"></p>
//             </div>
//           </div>
//         <div class="card-deck">
//             <div class="card">
//             <div class="card-body">
//             <h5 id="title" class="card-title">${name}</h5>
//                 <h5 id="title" class="card-title">Manager</h5>
//                 <p class="card-text">
//                     <ul>
//                     <li>Id:${id}</li>
//                     <li>Email:${email}</li>
//                      <li>Office Number:</li>
//                     </ul>
//                 </p>
//                 <p class="card-text"><small class="text-muted"></small></p>
//               </div>
//             </div>
//             <div class="card">
            
//               <div class="card-body">
//                 <h5 id="title"class="card-title">${name}</h5>
//                 <h5 id="title" class="card-title">Engineer</h5>
//                 <p class="card-text">       
//                     <ul>
//                     <li>Id:${id}</li>
//                     <li>Email:${email}</li>
//                     <li>Github:</li>
//                 </ul>
//             </p>
//                 <p class="card-text"><small class="text-muted"></small></p>
//               </div>
//             </div>
//             <div class="card">
            
//               <div class="card-body">
//                 <h5 id="title" class="card-title">Scott</h5>
//                 <h5 id="title" class="card-title">Intern</h5>
//                 <p class="card-text">     
//                     <ul>
//                         <li>Id:</li>
//                         <li>Email:</li>
//                         <li>School:</li>
//                     </ul>
//             </p>
//                 <p class="card-text"><small class="text-muted"></small></p>
//               </div>
//             </div>
//           </div>
//     </body>
//     </html>`;
// }
module.exports = Employee;

//tasks 

// setup - initialize npm
// install packages- inquirer
// create files 

//get user input
//generate html and save to file 

//html markup - static html (complete)
//write a function that accepts user info as an obj and returns html
//

//gather user input
// prompt user for info
//call function with array

//connect user input with markup

//write main function that gets user input then passes input to function
//that generates html
//