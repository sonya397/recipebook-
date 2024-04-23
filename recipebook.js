const recipesData = {
    breakfast: [
        {name: "Avocado toast", description: "Ingredients: 2 bread slise, 1/2 avocado, cucumber, egg and cherry tomatoes", photo:"https://i.pinimg.com/564x/eb/31/1b/eb311bfa2d8574ad9e36995b253c4d6c.jpg"},
        {name: "Yogurt bowl", description: "Ingredients: yogurt, strawberry, berry, maple syrup, almond slices and granola  ", photo: "https://i.pinimg.com/564x/71/08/9d/71089d6e6c4c27e0c8ad8f623ba538d3.jpg"},
        {name: "Omlet", description: "Ingredients: 2 eggs, oatmilk, cheese, cherry tomatos and bacon", photo: "https://i.pinimg.com/564x/8e/be/bd/8ebebdac738ed0c952565e24bb098596.jpg"}
    ],
    lunch: [
        {name:"Carbonara", description:"Ingredients: spaghetti, bacon, eggs, peper, parmesan, grated, garlic, olive oil", photo:"https://i.pinimg.com/564x/e6/fe/ff/e6feff3970dff16aaaba8c334ca11947.jpg"},
        {name:"Chesse pasta", description:"Ingredients: any pasta, cheese, butter, milk, salt, all-purpose flour, peper and parmesan for garnish", photo:"https://i.pinimg.com/564x/e4/c1/cc/e4c1ccba12c63d0ec350fb72e1746848.jpg"},
        {name:"Ramen", description:"Ingredients: chicken/tofu, soy souce, nori, green onions, ramen noodles, sesame oil, sweet rice wine and soft-boiled eggs ", photo:"https://i.pinimg.com/564x/8c/38/7e/8c387e962839b00345a634e412275f44.jpg"}
    ],
    dinner: [
        {name: "Salmon and rice", description: "Ingredients: salmon, rise, lemon, asparagus and seasonings", photo: "https://i.pinimg.com/564x/20/ac/c3/20acc33dbcd496048548e2a87fbcf305.jpg"},
        {name: "Rice bowl", description: "Ingredients: 50 gr. rise, chicken/shrims, avocado, vegetables", photo: "https://i.pinimg.com/564x/c5/9b/11/c59b1100c9b3ee4f609910fcbe180a25.jpg"},
        {name: "Cesar", description: "Ingredients: grillede chicken, bacon bits, cherry tomatos, parmesan ", photo: "https://i.pinimg.com/564x/5b/ed/3d/5bed3d41fd85d137df0e0f1ac2e75583.jpg" }
    ]
};

function showRecipes(meal){
    const recipesSection = document.getElementById("resipes");
    const recipesList = recipesData[meal];
    recipesSection.innerHTML = "";
    recipesList.forEach(recipe => {
        const recipeItem = document.createElement("div");
        const recipeLink = document.createElement("a");
        const recipePhoto = document.createElement("img");
        const recipeDescription = document.createElement("p");
        recipePhoto.src = recipe.photo;
        recipeLink.textContent = recipe.name;
        recipeDescription.textContent = recipe.description;
        recipeItem.appendChild(recipeLink);
        recipeItem.appendChild(recipeDescription);
        recipeItem.appendChild(recipePhoto);
        recipesSection.appendChild(recipeItem);

    });
}
