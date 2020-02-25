
 function getRecipe() {
    setTimeout(()=> {
        var recipeID = [523,883,432,974];
        console.log(recipeID);

        setTimeout ((id) => {
            var recipe = {title: 'pizza', publisher: 'mahmoud'}
            console.log(`${id} : ${recipe.title}`)

            setTimeout((publisher)=> {
                console.log(`this is the ${publisher}`)
            },2000,recipe.publisher)
        },2000,recipeID[2])
    },2000)
}
getRecipe()

//////////////////////////////////////////////////

var recipe = {title: 'pizza', publisher: 'mahmoud'}

const getIDs = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve([523,883,432,974]);
    },2000)
})

const getRecipe = recID => {
    return new Promise((resolve,reject)=>{
        setTimeout((id)=> {
            resolve(`${id}: ${recipe.title}`)
        },2000,recID)
    })
}

const getPublisher = publisher => {
    return new Promise((resolve,reject)=> {
        setTimeout((pub)=>{
            resolve(`this is the ${pub}`)
        },2000,publisher)
    })
}

//Async
async function getRecipeAW() {
    var IDs = await getIDs;
    console.log(IDs)
    var rec = await getRecipe(IDs[2]);
    console.log(rec)
    var publisher = await getPublisher(recipe.publisher)
    console.log(publisher)

    return rec
}

getRecipeAW().then(result => {
    console.log(`the recipe is ${result}`)
})


// promises 
 getIDs
.then(IDs => {
    console.log(IDs)
    return getRecipe(IDs[2])
})
.then(rec => {
    console.log(rec)
    return getPublisher(recipe.publisher)
})
.then(publisher => {
    console.log(publisher)
})
.catch(() => {
    console.log('getIDs failed')
}) 