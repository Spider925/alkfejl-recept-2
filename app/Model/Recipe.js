'use strict'

const Lucid = use('Lucid')

class Recipe extends Lucid {
    category () {
        return this.belongsTo('App/Model/Category')
    }
}

module.exports = Recipe
