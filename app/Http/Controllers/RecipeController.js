'use strict'

const Database = use('Database')
const Category = use('App/Model/Category')


class RecipeController {
    * index (request, response) {

        //const categories = yield Database.from('categories').select('*');
        //response.send(categories)

        const categories = yield Category.all()

        for (let category of categories) {
            const topRecipes = yield category.recipes().limit(3).fetch()
            category.topRecipes = topRecipes.toJSON()

        }

        yield response.sendView('main', {
            categories: categories.toJSON()
        })
    }
}

module.exports = RecipeController
