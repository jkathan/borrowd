export default function getVisibleItem(loanList, text) {
	console.log(Object.keys(loanList));
	console.log(loanList);
	console.log(text);
    return Object.keys(loanList).filter(item => {
        const textMatch =
            item.item.toLowerCase().includes(text.toLowerCase()) 
            return textMatch;
        })
}
