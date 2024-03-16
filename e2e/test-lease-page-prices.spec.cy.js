import {Lease} from "../pages/lease-and-ownership";
const lease = new Lease();

describe('check maps prices', () => {
  it('passes', () => {
    let value_list = []
    let new_list = []
    lease.navigate();
    lease.county(value_list, new_list);
    lease.min_price(new_list);
    lease.max_price(new_list);
  })     
})
