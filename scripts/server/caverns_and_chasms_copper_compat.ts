import { DECRAFT_COPPER_TARGET, HIDDEN_COPPER_TARGET } from "../libs/caverns_and_chasms_copper";

ServerEvents.recipes((event) => {
	DECRAFT_COPPER_TARGET.forEach(item => {
		event.remove({ output: cnc(item) });
	});
});

// Hide the item from EMI, including its recipe catalysts
RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
	HIDDEN_COPPER_TARGET.forEach(item => {
		event.remove(cnc(item));
	});
});

// Remove a particular recipe from EMI
RecipeViewerEvents.removeRecipes((event) => {
	HIDDEN_COPPER_TARGET.forEach(item => {
		event.remove(cnc(item));
	});
});

function cnc(name: string) {
	return `caverns_and_chasms:${name}`;
}
