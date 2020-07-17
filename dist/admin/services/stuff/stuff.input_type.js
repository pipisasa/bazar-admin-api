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
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
let AddStuffInput = class AddStuffInput {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID),
    __metadata("design:type", String)
], AddStuffInput.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AddStuffInput.prototype, "first_name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AddStuffInput.prototype, "last_name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AddStuffInput.prototype, "contact_number", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AddStuffInput.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AddStuffInput.prototype, "role", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], AddStuffInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], AddStuffInput.prototype, "creation_date", void 0);
AddStuffInput = __decorate([
    type_graphql_1.InputType({ description: 'New stuff data' })
], AddStuffInput);
exports.default = AddStuffInput;
//# sourceMappingURL=stuff.input_type.js.map