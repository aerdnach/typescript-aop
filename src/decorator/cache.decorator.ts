export default function memoization(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const originalValue = descriptor.value;
    const cache = new Map<any, any>();

    descriptor.value = function (arg: any) { // we only support one argument
        if (cache.has(arg)) {
            return cache.get(arg);
        }

        // call the original function
        const result = originalValue.apply(this, [arg]);

        // cache the result
        cache.set(arg, result);
        return result;
    }
}