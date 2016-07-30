function euler2(limit)
{
	let sum = 0,
    a = 0,
	b = 1,
	f = 1;
    
	for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    
		if(f % 2 === 0) {
			sum += f;
		}
	}
}

console.log(euler2(4000000));