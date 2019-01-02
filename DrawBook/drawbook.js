function pageCount(n, p) {

    const n_prime = n % 2 === 0 ? n - 1 : n;
    let from_front = Math.floor(p / 2);
    let from_back = Math.floor((n_prime - p) / 2);

    if (n % 2 === 0) { from_back++; }

    from_front < from_back ? console.log(from_front) : console.log(from_back);
}

pageCount(6,2);