export const formatTime = (timestamp, format) => {
	const date = new Date(timestamp);
	const timeCmps = {
		'(y+|Y+)': date.getFullYear(),
		'M+': date.getMonth() + 1,
		'(d+|D+)': date.getDate(),
		'(h+|H+)': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds(),
	};
	for (const pattern in timeCmps) {
		const patternRe = new RegExp(pattern);
		if (patternRe.test(format)) {
			const val = (timeCmps[pattern] + "").padStart(2, "0");
			format = format.replace(patternRe, val);
		}
	}

	return format;
};