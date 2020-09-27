export function memoize(cb) {
    let cache = {};
    return function (...args) {
        const key = args[1].toLowerCase();
        const allKeys = Object.keys(cache);
        if (allKeys.length > 0 && allKeys.includes(key)) {
            console.log('From Cache');
            return cache[key];
        } else {
            const results = cb(...args);
            cache[key] = results;
            console.log('Not from Cache');
            return results;
        }
    }
}