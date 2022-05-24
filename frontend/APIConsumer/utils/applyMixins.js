"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMixins = void 0;
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            const descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
            if (!descriptor)
                return;
            Object.defineProperty(derivedCtor.prototype, name, descriptor);
        });
    });
}
exports.applyMixins = applyMixins;
