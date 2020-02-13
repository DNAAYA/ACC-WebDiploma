/*  
=========> =======> #1: Example OF Asynchronus
*/
   const second = () => {
             setTimeout(() => {
                 console.log('Async Hey there');
             }, 2000);
    }

    const first = () => {
        console.log('Hey there');
        second();
        console.log('The end');
    }

    first();

/*  
=========> =======> #2: Understanding the asynchronus
Note: Need powerpoint presntation
*/

/* =========> =======> #3: The old way Asynchrouns Callbacks */
    function getEmployee() {
        setTimeout(() => {
            const employeeId = [29099, 87675, 54674, 2233];
            console.log(employeeId);
            setTimeout((id) => {
                const employee = {
                    name: 'Sara Soliman',
                    job: 'Software Developer'
                }
                console.log(`ID: ${id}, Name:${employee.name}`);
                setTimeout(job => {
                    const employee2 = {
                        name: 'Ahmed Farag',
                        job: 'Graphic Designer'
                    }
                    console.log(employee)
                },1500, employee.jop)

            }, 1500 , employeeId[2])
        }, 1500);
        getEmployee();
    }
/* =========> =======> #4: Callback Hell to Promises */

const getIDs = new Promise((resolve, reject) => {
         setTimeout(() => {
             resolve([29099, 87675, 54674, 2233]);
         }, 1500);
    
 });
 const getEmployee = empID => {
         return new Promise((resolve, reject) => {
             setTimeout(ID => {
                const employee = {
                    name: 'Sara Soliman',
                    job: 'Software Developer'
                }
                 resolve(`${ID}: ${employee.name}`);
             }, 1500, empID);
         });
     };

     const getRelated = employeeJob => {
             return new Promise((resolve, reject) => {
                 setTimeout(job => {
                    const employee = {
                        name: 'Sara Soliman',
                        job: 'Software Developer'
                    }
                     resolve(`${job}: ${employee.name}`);
                 }, 1500, employeeJob);
             });
         };

         getIDs.then(Ids => {
             console.log('IDs: ', Ids);
             return getEmployee(Ids[2])
         })
         .then(employee => {
            console.log('Employee:', employee)
            return getRelated('Software Developer')
         })
         .then(result => {
             console.log('Employee:', result)

             // Error In REsult ********
         })
         .catch(err => {
             console.log('Error!', err)
         })


/* =========> =======> #5: From Promises to ASync/Await */
        async function getEmployees() {
             const IDs = await getIDs;
             console.log(IDs);
             const employee = await getEmployee(IDs[2]);
             console.log(employee);
             const related = await getRelated('Software Developer');
             console.log(related);

             return employee;
         }
         getEmployees().then(result => console.log(`${result} is the best ever!`));


         