export const COPPER_STAGES = [
	"",
	"exposed",
	"weathered",
	"oxidized",
	"waxed",
	"waxed_exposed",
	"waxed_weathered",
	"waxed_oxidized",
];

export const DECRAFT_COPPER_TARGET = [
	"copper_shovel",
	"copper_pickaxe",
	"copper_axe",
	"copper_hoe",
	"copper_sword",
	"copper_helmet",
	"copper_chestplate",
	"copper_leggings",
	"copper_boots",
	"copper_horse_armor",
	"copper_nugget",
]
	.concat(copperVariants([
		"copper_bars",
		"copper_chain",
		"copper_lantern",
		"copper_ingot",
	]))
	.filter(item => item !== "copper_ingot");

export const HIDDEN_COPPER_TARGET = [
	"oxidized_copper_golem",
	"waxed_oxidized_copper_golem",
	"copper_horse_armor",
	"copper_golem_spawn_egg",
]
	.concat(DECRAFT_COPPER_TARGET);

function copperVariants(items: string[]) {
	const results: string[] = [];
	items.forEach((item) => {
		COPPER_STAGES.forEach(prefix => {
			results.push(prefix ? `${prefix}_${item}` : item);
		});
	});

	return results;
}
