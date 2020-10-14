"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Hello_1 = require("./resolvers/Hello");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield typeorm_1.createConnection();
    const schema = yield type_graphql_1.buildSchema({
        resolvers: [Hello_1.HelloResolver],
        validate: false,
    });
    const app = express_1.default();
    const server = new apollo_server_express_1.ApolloServer({
        schema,
    });
    server.applyMiddleware({
        app,
        path: "/typegraphql",
    });
    const PORT = process.env.PORT || 3005;
    app.listen(PORT, () => console.log(`Connected at Port ${PORT}`));
});
main();
//# sourceMappingURL=index.js.map