import jTPS_Transaction from './jTPS_Transaction'

export class transaction_ItemRemoval extends jTPS_Transaction {
    constructor(item,f) {
        super();
        this.item=item;
        this.f=f;

    }
    /**
     * This method is called by jTPS when a transaction is executed.
     */
    doTransaction() {
        this.f(this.item)
    }

    /**
     * This method is called by jTPS when a transaction is undone.
     */
    undoTransaction() {
        this.f(this.item)
    }
}

export default transaction_ItemRemoval