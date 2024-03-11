const mesureWidth = (item) => {
	const screenWidth = $(window).width();
	const container = item.closest(".product-menu");
	const titleBlocks = container.find("product-menu__title");
	const titleWidth = titleBlocks.width() * titleBlocks.length;
	
	const isMobile = window.matchMedia("(max-width: 768px)").matches;

	if (isMobile) {
		return screenWidth - titleWidth;
	} else {
		return	500;
	}	
};

const closeEveryItemInContainer = (container) => {
	const items = container.find(".product-menu__item");
	const content = container.find(".product-menu__content");

	items.removeClass("active");
	content.width(0);
};

const openBlock = (item) => {
	const hiddenContent = item.find(".product-menu__content");
	const reqWidth = mesureWidth(item);

	item.addClass("active");
	hiddenContent.width(reqWidth);
}

$(".product-menu__title").on("click", e => {
	e.preventDefault();

	const $this = $(e.currentTarget);
	const item = $this.closest(".product-menu__item");
	const itemOpened = item.hasClass("active");
	const container = $this.closest(".product-menu");

	if (itemOpened) {
		closeEveryItemInContainer(container)
	} else {
		closeEveryItemInContainer(container)
		openBlock(item);
	}
});


$(".product-menu__close").on("click", e => {
	e.preventDefault();

	closeEveryItemInContainer($(".product-menu"));
})