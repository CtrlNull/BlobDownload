export class downloadComponent {

  constructor(
    private _inventoryService: DownloadService;
  ) {}

  getDownload() {
    let imageToShow: any;
    this._inventoryService.getDownload().subscribe((res: Blob) => {
    
    let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    const fileName: string = 'StockCatalog_' + utc + '.xlsx';
    const objectUrl: string = URL.createObjectURL(res);
    const a: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;
  
    a.href = objectUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();        
  
    document.body.removeChild(a);
    URL.revokeObjectURL(objectUrl);
    })
  }
}