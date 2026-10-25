export function getGlobal(): typeof globalThis {
	return function() {
		// @ts-expect-error
		return this;
	}.call(null);
}

export function getObjectFields(obj: any) {
	const keys = new Set();

	let o: any = obj;
	while (o) {
		try {
			skipError(() => {
				Object.getOwnPropertyNames(obj).forEach(name => {
					keys.add(name);
				});
			});

			skipError(() => {
				Object.keys(obj).forEach(name => {
					keys.add(name);
				});
			});

			o = Object.getPrototypeOf(o);
		} catch (e) {
			console.log(`Error getting object fields for ${obj}:`, e);
			throw e;
		}
	}

	return Array.from(keys.values());
}

const skipError = (block: () => void) => {
	try {
		block();
	} catch (e) {
		if (e instanceof TypeError && e.message.includes("Expected argument of type")) {
			return;
		}

		throw e;
	}
};
