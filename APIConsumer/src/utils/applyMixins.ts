export function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
        const descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
        if (!descriptor) return;
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          descriptor
        );
      });
    });
}