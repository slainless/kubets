import { HIDDEN_COPPER_TARGET } from "../libs/caverns_and_chasms_copper";
import { CREATIVE_TABS } from "../libs/creative";

for (const tab of CREATIVE_TABS) {
	StartupEvents.modifyCreativeTab(tab, event => {
		for (const item of HIDDEN_COPPER_TARGET) {
			event.remove(cnc(item));
		}
	});
}

function cnc(name: string) {
	return `caverns_and_chasms:${name}`;
}
