/*
// https://projecteuler.net/problem=1
//
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.
*/


// expects first number to be the limit and all arguments proceeding it to be those it compares against
function euler1() 
{
	var int_sum = 0,
		int_limit = arguments[0],
		str_evalStatement = "";

	for (i = 0, l = arguments.length; i < l; i++)
	{
		
		// some quick and dirty testing to make sure input is numeric
		try
		{
			if(typeof arguments[i] !== 'number') 
			{
				throw i + "is not a number.";
			}
		}
		catch(err)
		{
			alert("Error: Argument " + err);
		}
		
		if(i > 0) 
		{
			if(l > i+1)
			{
				str_evalStatement = str_evalStatement + "x %" + arguments[i] + " === 0" + " || ";
			} 
			else 
			{
				str_evalStatement = str_evalStatement + "x %" + arguments[i] + " === 0";
			}
		}	
		
		// retained for debugging of eval statement creation
		// console.log(str_evalStatement);
	}
	
	for(x = 0; x < int_limit; x++) 
	{
		if(eval(str_evalStatement)) 
		{
			int_sum += x;
		}
	}

	return int_sum;
}

document.write(euler1(1000, 3, 5));

