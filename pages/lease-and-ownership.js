import {LeasePageLocators} from "./locators";
const locator = new LeasePageLocators();

export class Lease {
    navigate(){
        cy.visit('https://store.enverus.com/product/lease-and-ownership');
    }

    county(value_list, new_list){
        cy.get(locator.county_list).then(($elements) => {
            let countofelements = $elements.length;
            for (let i=1; i<countofelements; i++) {
            cy.get(locator.county).select(i, { timeout: 10000 }, { force: true })
                .should('be.visible')
                .then(() => {
                    this.maps(value_list, new_list);
                })
            }
        })
    }

    maps(value_list, new_list){
        cy.get(locator.maps_list).then(($elements) => {
            let countofelements = $elements.length;
            for (let i=1; i<countofelements; i++) {
              cy.get(locator.map).select(i, { timeout: 10000 }, { force: true })
                .should('be.visible')
                .then(() => {
                    this.map_price(value_list, new_list);
                })
            }
        })
    }

    map_price(value_list, new_list){
        var last_value = value_list[value_list.length - 1]
        cy.get(locator.price, { timeout: 10000 })
        .should('not.include.text', last_value)
        .invoke('text')
        .then((text) => {
            value_list.push(text)
        })
        .then(() => {
            this.price_list(value_list, new_list);
        })
    }

    price_list(value_list, new_list){
        for (const element of value_list) {
            new_list.push(Number(element.substring(1, element.length - 3)
            .replace(/[^0-9 ]/g, '')))
        }
        new_list.sort((a, b) => a - b)
    }

    min_price(new_list){
        cy.get(locator.price_range).first()
        .invoke('text')
        .then((text) => {
            const min_value = Number(text.substring(1, text.length - 3)
            .replace(/[^0-9 ]/g, ''))
            expect(min_value).to.eq(new_list[0])
        })
    }

    max_price(new_list){
        cy.get(locator.price_range).last()
        .invoke('text')
        .then((text) => {
            const max_value = Number(text.substring(1, text.length - 3)
            .replace(/[^0-9 ]/g, ''))
            expect(max_value).to.eq(new_list[new_list.length - 1])
        })
    }
}