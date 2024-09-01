export class Product{
    productId : number;
    productName : string;
    productPrice : number;
    productDescription : string;
    productImage : string;

    constructor(productId: number, productName: string, productPrice: number, productDescription: string, productImage: string){
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productDescription = productDescription;
        this.productImage = productImage;
    }
}