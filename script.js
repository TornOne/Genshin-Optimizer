"use strict"

window.addEventListener("load", () => {
	const menuItems = document.getElementsByClassName("menu-item");
	const tabs = document.getElementsByClassName("main-area");
	let activeMenuItem = menuItems[0];
	let activeTab = tabs[0];

	for (let i = 0; i < menuItems.length; i++) {
		menuItems[i].addEventListener("click", () => switchTabs(i));
	}
	
	function switchTabs(tabIndex) {
		console.log(tabIndex);
		activeMenuItem.classList.remove("active");
		activeTab.classList.remove("shown");
	
		activeMenuItem = menuItems[tabIndex];
		activeTab = tabs[tabIndex];
	
		activeMenuItem.classList.add("active");
		activeTab.classList.add("shown");
	}
})