function renderDataView(data) {
	let headers = "<td></td>";
	for (k in data[0]) {
		headers += `<td>${k}</td>`;
	}
	let rows = "";
	for (i = 0; i < data.length; i++) {
		rows += `<tr><td>${i + 1}</td>`;
		let entry = "";
		const p = data[i];
		for (k in p) {
			entry += `<td><input type="text" value="${p[k]}" class="${k} ${i}"/></td>`;
		}
		rows += `${entry}</tr>`;
	}
	const body = document.querySelector("#application");
	body.innerHTML = `<form id="table-form">
        <table>
            <thead>
                <tr>${headers}</tr>
            </thead>
                ${rows}
        </table>
        <input type="submit" value="Submit"/>
    </form>`;

	const tableForm = document.querySelector("#table-form");
	tableForm.addEventListener("submit", (e) => {
		e.preventDefault();
		const children = e.target.children[0].children[1].children;
		let newData = [];
		for (i = 0; i < children.length; i++) {
			let grandchildren = children[i].children;
			const productFields = [];
			for (k in data[0]) {
				productFields.push(k);
			}
			let product = {};
			for (j = 1; j < grandchildren.length; j++) {
				const greatGrandchild = grandchildren[j].children[0].value;
				product[productFields[j - 1]] = greatGrandchild;
			}
			newData.push(product);
		}
		console.log(newData);
	});
}

module.exports = { renderDataView };
