const TurmasAPI = require('./datasource/turma');
const turmaSchema = require('./schema/turma.graphql');
const turmaResolvers = require('./resolvers/turmaResolver');

module.exports = {
    TurmasAPI, 
    turmaSchema, 
    turmaResolvers
}