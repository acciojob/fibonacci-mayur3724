function fibonacci(num) {
// your code here
	let n1=0,n2=1,nextTerm;
	nextTerm=n1+n2;
	while(nextTerm<=num){
		console.log(nextTerm);
		n1=n2;
		n2=nextTerm;
		nextTerm=n1+n2;
	}
}
module.exports = fibonacci;
