import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonFileService } from '../../../service/json/json-file.service';

@Component({
  selector: 'app-jadwal-biaya',
  templateUrl: './jadwal-biaya.page.html',
  styleUrls: ['./jadwal-biaya.page.scss'],
})
export class JadwalBiayaPage implements OnInit {
  jadwalPenerimaan: any[];
  biayaPendidikan: any[];

  constructor(private jsonFileService: JsonFileService) {}

  ngOnInit() {
    this.fetchJadwalBiaya();
  }

  fetchJadwalBiaya() {
    this.jsonFileService.getJadwal().subscribe(
      (data: any) => {
        this.jadwalPenerimaan = data.jadwalPenerimaan;
        this.biayaPendidikan = data.biayaPendidikan;
        console.log('object retrieved', data);
      },
      (error) => {
        console.error('Error retrieving data:', error);
      }
    );
  }
}
