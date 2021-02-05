import log from './decorator/log.decorator';
import cache from './decorator/cache.decorator';

class Factorial {
    @cache
    @log
    static calculate(n: number): number {
        if (n <= 1) {
            return 1;
        }

        return n * this.calculate(n - 1);
    }
}

console.log(`3! = ${Factorial.calculate(3)}`);
console.log(`4! = ${Factorial.calculate(4)}`);
