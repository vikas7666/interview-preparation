function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

function handleChange(event) {
    console.log(event.target.value);
}

const apiCall = debounce(handleChange, 1000);
