const middleware = {}

middleware['isAdmin'] = require('../middleware/isAdmin.js')
middleware['isAdmin'] = middleware['isAdmin'].default || middleware['isAdmin']

middleware['isAuthenticated'] = require('../middleware/isAuthenticated.js')
middleware['isAuthenticated'] = middleware['isAuthenticated'].default || middleware['isAuthenticated']

export default middleware
