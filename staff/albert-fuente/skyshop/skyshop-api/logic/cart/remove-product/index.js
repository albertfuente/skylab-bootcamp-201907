const { models: { Product, User, Order, Item } } = require('skyshop-data')
const { validate } = require('skyshop-utils')

/**
 * 
 * @param {*} userId 
 * @param {*} productId 
 * 
 * @returns {Promise}
 */

module.exports = function (userId, productId) {
    
    validate.string(userId, 'userId')
    validate.string(productId, 'productId')
    return (async () => {
        const user = await User.findById(userId)
        

        if (!user) throw Error('User not found')

        let item = user.cart.findIndex(item => { 
            debugger
            return item.product.toString() === productId
            
         })

        if (item > -1) await user.cart.splice(item,1)
        if (item <0) throw Error("Item not found")
        
        await user.save()
    })()
}

