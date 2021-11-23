/** grab data from the google spreadsheet */
class DB {
	constructor(sheetID, options) {
		this.sheetID = sheetID;
		this.onLoad = options.onLoad;
		this.loadData();
	}
	/** load the data */
	loadData() {
		new Promise((resolve, reject) => {
			fetch(`https://docs.google.com/spreadsheets/d/${this.sheetID}/gviz/tq?tqx=out:csv&tq&gid=0`)
			.then(r=>r.text())
			.then(out=>resolve(out))
		}).then(csv => {
			let data = Papa.parse(csv, {header:true}).data;
			this.onLoad(data);
		})
	}
}

export default DB;