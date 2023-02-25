export class SeedReviewDto {
    id:number;
    customerName:string;
    reviewid : number;
    orderId : number;
    seedId : number;
    starRating:number;
    msg :string;

    constructor(id:number,customerName:string,reviewid:number, orderId : number, starRating:number, msg :string, seedId : number ){
        this.id=id;
        this.customerName=customerName;
        this.reviewid = reviewid;
        this.orderId = orderId;
        this.starRating= starRating;
        this.msg = msg;
        this.seedId=seedId;

    }
}
