import login from "../../support/POM/login";
import search from "../../support/POM/search";
import cart from "../../support/POM/Cart";
import logout from "../../support/POM/logout";
describe('PUMA Website', () => {
    const lp = new login();
    const sp = new search();
    const cp = new cart();
    const lo = new logout();
    it('End to End Testing', () => {
        lp.loginPage();
        sp.searchButton();
        cp.addToCart();
        cp.removeProduct();
        lo.logOut();
       });
    });
       
