const axios = require("axios");
const { renderDataView } = require("./renderDataView");

function renderFileUpload(selectedStorefront) {
	const application = document.querySelector("#application");
	application.innerHTML = `<h1>${selectedStorefront.name}</h1>
	<label for="csv-upload">Upload Product CSV</label> <br />
	<form id="csv-upload">
		<input type="file" accept=".csv" id="csv-field"/>
		<input type="submit" value="Submit"/>
	</form>`;

	const uploadField = document.querySelector("#csv-field");
	const uploadForm = document.querySelector("#csv-upload");
	uploadForm.addEventListener("submit", (e) => {
		e.preventDefault();
		if (uploadField.files.length === 0) {
			alert("Please upload a CSV file");
		} else {
			console.log(uploadField.files[0].path);
			axios.get(uploadField.files[0].path).then((res) => {
				const rows = res.data.split("\n");
				const columns = rows.map((x) => {
					return x.split(",");
				});
				let products = [];
				for (i = 1; i < columns.length; i++) {
					let product = {};
					columns[0].forEach((x, j) => {
						product[x] = columns[i][j];
					});
					products.push(product);
				}
				renderDataView(products);
			});
		}
	});
}

module.exports = { renderFileUpload };
