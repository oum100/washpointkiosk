export const state = () => ({
    cart: []
})

export const mutations = {
    add(state, asset) {
        state.cart.push({
            asset
        })
    },
    remove(state, { asset }) {
        state.cart.splice(state.cart.indexOf(asset), 1)
    },

}

export const actions = {

}

export const getters = {

}