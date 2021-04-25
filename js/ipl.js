let baseurl = "https://ipl2020-stat.herokuapp.com/ipl2020/team/";
const teamLabelsEle = document.querySelector("#teamLabels");
const team_players = document.querySelector("#players");

function showPlayers() {
    const label = document.querySelector("#teamlabel").value;
    if (label.value != "") {
        showPieChart();
        let url = `${baseurl}${label}`;
        fetch(url).then(response => response.json()).then(res => {
            let result = res;
            let html = `
                <table class="table table-hover table-dark">
                    <thead">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Role</th>
                            <th scope="col">Label</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>                
                `
            result.forEach(ele => {
                html += `
                      <tr>
                          <td>${ele.name}</td>
                          <td>${ele.role}</td>
                          <td>${ele.label}</td>
                          <td>${ele.price}</td>
                      </tr> `
            });
            html += `
                     </tbody>
                </table>`
            team_players.innerHTML = html;
        }).catch(error => {
            alert("system is down please try after few minutes" + error);
        })
        url = `${baseurl}role/${label}`;
        fetch(url).then(response => response.json()).then(res => {
            let chartData = [["role", "count"]];
            res.forEach(ele => {
                chartData.push([ele['roleName'], ele['count']]);
            });
            showPieChart(chartData);
        })
    }
}
function showLabels() {
    let url = `${baseurl}labels`;
    fetch(url)
        .then(response => response.json())
        .then(res => {
            let labels = res.labels;
            let html = '<select id = "teamlabel" class = "form-control" onchange = "showPlayers()"><option value = "">Select Team</option>';
            labels.forEach(ele => {
                html += `<option value = "${ele}">${ele}</option>`
            });
            html += "</select>";
            teamLabelsEle.innerHTML = html;
        });
}
function showPieChart(chartData) {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable(chartData);
        var options = {
            title: 'Player Count Details ( By Role )',
            is3D: true,
        };

        var chart = new google.visualization.PieChart(document.querySelector("#playerscount"));
        chart.draw(data, options);
    }
}
showLabels();