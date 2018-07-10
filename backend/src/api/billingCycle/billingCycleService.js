const BillingCycle = require('./billingCycle')

BillingCycle.methods([ 'get', 'post', 'put', 'delete' ])
BillingCycle.updateOption({ new: true, runValidators: true })

module.exports = BillingCycle