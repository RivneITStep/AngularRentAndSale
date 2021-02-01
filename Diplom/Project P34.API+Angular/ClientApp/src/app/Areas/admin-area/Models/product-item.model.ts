export class ProductItem{
    public id: string;
    public name: string;
    public image: string;
    public price: number;
    public countryMade: string;
    public description: string;
    public rating: number;
    public count: number;
    public images: Array<string> = [];

    constructor(){
        this.id=null;
        this.name=null;
        this.image=null;
        this.price=null;
        this.countryMade=null;
        this.description=null;
        this.rating=null;
        this.count=null;
        this.images=[];
    }
}

