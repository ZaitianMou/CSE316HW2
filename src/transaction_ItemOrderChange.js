import jTPS_Transaction from './jTPS_Transaction'

export class transaction_ItemOrderChange extends jTPS_Transaction {
    constructor(x, y, f) {
        super();
        this.oldIndex = x;
        this.newIndex = y;
        this.f = f
    }
    /**
     * This method is called by jTPS when a transaction is executed.
     */
    doTransaction() {
        this.f(this.newIndex,this.oldIndex)
    }

    /**
     * This method is called by jTPS when a transaction is undone.
     */
    undoTransaction() {
       
        this.f(this.oldIndex,this.newIndex)
    }
}

export default transaction_ItemOrderChange