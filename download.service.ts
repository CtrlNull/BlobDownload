import { HttpClient } from '';

export class DownloadService {
  constructor(private _httpClient: HttpClient) {}

  getDownload(): Observable<any> {
    return this._httpClient.get(STOCK_URL + '/Export', { responseType: 'blob' });

}