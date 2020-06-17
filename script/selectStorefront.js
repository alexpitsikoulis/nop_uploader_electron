const { renderFileUpload } = require("./renderFileUpload");

function selectStorefront() {
	let selectedStorefront = {};
	const storefrontSelect = document.querySelector("#storefront-dropdown");

	function setStorefront(e) {
		switch (e.target.value) {
			case "http://bg-demo.com":
				e.target.name = "BG Demo";
				break;
			case "https://harrynorman.bg-connect.com":
				e.target.name = "Harry Norman";
				break;
			case "https://berrycollege.bg-connect.com":
				e.target.name = "Berry College";
				break;
			case "https://tedsmontanagrill.bg-connect.com":
				e.target.name = "Ted's Montana Grill";
				break;
			case "https://smc3.bg-connect.com":
				e.target.name = "SMC3";
				break;
			case "https://mbi.bg-connect.com":
				e.target.name = "Mercedes-Benz";
				break;
			case "https://1ffc.bg-connect.com":
				e.target.name = "First Franklin";
				break;
			case "https://georgiasown.bg-connect.com":
				e.target.name = "Georgia's Own";
				break;
			case "https://harrynorman.bg-connect.com":
				e.target.name = "Harry Norman";
				break;
		}
		selectedStorefront = {
			name: e.target.name,
			path: e.target.value,
		};
	}

	storefrontSelect.addEventListener("change", setStorefront);

	console.log(selectedStorefront);

	const storefrontSubmit = document.querySelector("#storefront-confirm");

	storefrontSubmit.addEventListener("click", (e) => {
		e.preventDefault();
		if (selectedStorefront.name !== undefined) {
			if (
				confirm(
					`You have selected ${selectedStorefront.name}. Is this correct?`
				)
			) {
				renderFileUpload(selectedStorefront);
			}
		} else {
			alert("Please select a storefront");
		}
	});

	return selectedStorefront;
}

module.exports = { selectStorefront };
