declare const ServerEvents: {
	recipes: (listener: (event: any) => void) => void;
};

declare const RecipeViewerEvents: {
	removeEntriesCompletely: (type: string, listener: (event: any) => void) => void;
	removeRecipes: (listener: (event: any) => void) => void;
};

declare const StartupEvents: {
	modifyCreativeTab: (tab: string, listener: (event: any) => void) => void;
};
