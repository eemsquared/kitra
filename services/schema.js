const treasureSchema = {
    type: 'object',
    properties: {
        latitude: { type: 'number' },
        longitude: { type: 'number' },
        distance: { type: 'integer', enum: [1, 10] },
        amt: { type: 'integer', minimum: 10, maximum: 30 }
    },
    required: ['latitude', 'longitude', 'distance'],
    additionalProperties: false
}

const userSchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        age: { type: 'number' },
        password: { type: 'string', format: 'password', minLength: 6, maxLength: 24 },
        email: { type: 'string', format: 'email' }
    },
    required: ['name', 'age', 'password', 'email'],
    additionalProperties: false
}

module.exports = {
    treasureSchema,
    userSchema
}