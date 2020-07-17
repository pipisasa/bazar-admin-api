"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
const type_graphql_1 = require("type-graphql");
const stuff_type_1 = __importDefault(require("./stuff.type"));
const stuff_data_1 = __importDefault(require("../../data/stuff.data"));
const stuff_input_type_1 = __importDefault(require("./stuff.input_type"));
const search_1 = __importDefault(require("../../helpers/search"));
let StuffResolver = class StuffResolver {
    constructor() {
        this.stuffsCollection = stuff_data_1.default();
    }
    stuffs(role, searchBy) {
        return __awaiter(this, void 0, void 0, function* () {
            let stuffs = this.stuffsCollection;
            if (role) {
                stuffs = stuffs.filter(stuff => stuff.role.toLowerCase() === role.toLowerCase());
            }
            return yield search_1.default(stuffs, ['name'], searchBy);
        });
    }
    stuff(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id, 'stuff_id');
            return yield this.stuffsCollection.find(stuff => stuff.id === id);
        });
    }
    createStuff(stuff) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(stuff, 'Stuff');
            return yield stuff;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [stuff_type_1.default]),
    __param(0, type_graphql_1.Arg('role', { nullable: true })),
    __param(1, type_graphql_1.Arg('searchBy', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], StuffResolver.prototype, "stuffs", null);
__decorate([
    type_graphql_1.Query(() => stuff_type_1.default),
    __param(0, type_graphql_1.Arg('id', type => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StuffResolver.prototype, "stuff", null);
__decorate([
    type_graphql_1.Mutation(() => stuff_type_1.default, { description: 'Create Stuff' }),
    __param(0, type_graphql_1.Arg('stuff')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stuff_input_type_1.default]),
    __metadata("design:returntype", Promise)
], StuffResolver.prototype, "createStuff", null);
StuffResolver = __decorate([
    type_graphql_1.Resolver()
], StuffResolver);
exports.default = StuffResolver;
//# sourceMappingURL=stuff.resolver.js.map