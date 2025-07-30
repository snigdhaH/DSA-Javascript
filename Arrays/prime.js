function prime(num) {
    if (num <= 1) {
        console.log(num + " is Not Prime");
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(num + " is Not Prime");
            return;
        }
    }

    console.log(num + " is Prime");
}

// Test cases
prime(0);   // Not Prime
prime(1);   // Not Prime
prime(2);   // Prime
prime(-1);  // Not Prime
prime(17);  // Prime
prime(15);  // Not Prime
