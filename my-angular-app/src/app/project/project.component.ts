import {Component, OnInit} from '@angular/core';
import {GoogleChartInterface} from 'ng2-google-charts';
import {IplService} from '../ipl/ipl.service';
import {Player} from '../model/ipl-module/player.model';


@Component({selector: 'app-project', templateUrl: './project.component.html', styleUrls: ['./project.component.css']})
export class ProjectComponent implements OnInit {
    labels : string[] = [];
    players : Player[] = [];
    chartData : any[] = [];
    selectedLabel : string = "";
    constructor(private iplservice : IplService) {}
    public pieChart : GoogleChartInterface = {
        chartType: 'PieChart',
        dataTable: this.chartData,
        // firstRowIsData: true,
        options: {
            'title': 'Tasks'
        }
    };

    ngOnInit(): void {
        this.iplservice.getTeamLabels().subscribe(res => this.labels = res["labels"]);

    }
    onsubmit() {
        this.iplservice.getPlayersByTeamLabels(this.selectedLabel).subscribe(res => {
            this.players = res;

        })
        this.iplservice.getRoleCountByTeamLabel(this.selectedLabel).subscribe(res => {
            this.chartData = [];
            this.chartData.push(["Role", "Count"])
            res.forEach(ele => {
                this.chartData.push([
                    ele["role"], ele["count"]
                ]);
            })

            this.pieChart = {
                chartType: 'PieChart',
                dataTable: this.chartData,
                // firstRowIsData: true,
                options: {
                    'title': 'Tasks'
                }
            };

        })
    }
    getTotalAmount() {
        let total = 0;
        if (this.players.length != 0) {
            total = this.players.map(p => p.price).reduce((a, b) => a + b);
        }
        return total;

    }
    getAvgAmount() {
        return this.getTotalAmount() / this.players.length
    }

}
