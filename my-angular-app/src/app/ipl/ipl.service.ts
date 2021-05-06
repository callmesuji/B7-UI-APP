import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeamLabels } from '../model/ipl-module/label.model';
import { Player } from '../model/ipl-module/player.model';
import { RoleCount } from '../model/ipl-module/rolecount.model';

@Injectable({
  providedIn: 'root'
})
export class IplService {

  baseurl = environment.iplbaseUrl;
  constructor(private http : HttpClient) { }

  getTeamLabels():Observable<TeamLabels>{
    let url = `${this.baseurl}labels`
    return this.http.get<TeamLabels>(url)    
  }
  getPlayersByTeamLabels(label : string):Observable<Player[]>{
    let url = `${this.baseurl}players/${label}`;
        return this.http.get<Player[]>(url)
  }
  getRoleCountByTeamLabel(label:string):Observable<RoleCount[]>{
    let url = `${this.baseurl}rolecount/${label}`
    return this.http.get<RoleCount[]>(url)
  }

}
