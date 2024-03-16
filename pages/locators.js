export class LeasePageLocators {
    constructor() {
        this.county_list = '[id="county"] > option';
        this.county = '[id="county"]';
        this.maps_list = '[id="map-type"] > option';
        this.map = '[id="map-type"]';
        this.price = 'div[class="woocommerce-variation-price"] span[class="woocommerce-Price-amount amount"] bdi';
        this.price_range = 'p[class="price"] span[class="woocommerce-Price-amount amount"]';
    }
}