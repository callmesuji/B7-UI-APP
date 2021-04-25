let baseurl = "https://ipl2020-stat.herokuapp.com/ipl2020/team/";
const teamLabelsEle = document.querySelector("#teamLabels");
const team_players = document.querySelector("#players");
function showPlayers() {
    console.log("show players");
    let label = document.querySelector("#teamlabel").value;
    if (label.value != "") {
        let url = `${baseurl}${label}`;
        fetch(url).then(response => response.json()).then(res => {
            let html = `<ul class = "list-group">`
            res.forEach(player => {
                html += `<li class = "list-group-item">${player.name}------ ${player.price}</li>`;

            });
            html += `</ul>`
            team_players.innerHTML = html;
        })
    }
}
function showLabels() {
    let url = `${baseurl}labels`;
    fetch(url)
        .then(response => response.json())
        .then(res => {
            let labels = res.labels;
            let html = '<select id = "teamlabel" class = "form-control" onchange = "showPlayers()"><option value = "">Select option</option>';
            labels.forEach(ele => {
                html += `<option value = "${ele}">${ele}</option>`

            });
            html += "</select>";
            teamLabelsEle.innerHTML = html;
        })

}
showLabels();