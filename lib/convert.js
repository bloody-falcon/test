module.exports = {
    jsUcfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
    genRanHex(size) {
        return [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    },
	parseBalance(balance) {
		if (!balance) balance = 0;
		return parseFloat(parseFloat(balance).toFixed(2)); 
	},
	numberWithCommas(x, decimals = 2) {
        if (isNaN(x) == true) x = 0;
        x = parseFloat(x).toFixed(decimals);
        x  = x.split(".");
        x[0] = x[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if (decimals <= 0) {
            x = x[0];
        } else {
            x = x.join('.');
        }
        return x;
    }
};