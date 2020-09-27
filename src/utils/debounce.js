export function debounce(func, wait) {
    let timer;
    return function (...args) {
        const conext = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            func.apply(conext, args);
        }, wait)
    }
}
