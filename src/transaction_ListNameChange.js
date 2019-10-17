import jTPS_Transaction from './jTPS_Transaction'

export class transaction_ListNameChange extends jTPS_Transaction {
    constructor(x, y, f) {
        super();
        this.oldValue = x;
        this.newValue = y;
        this.f = f
    }
    /**
     * This method is called by jTPS when a transaction is executed.
     */
    doTransaction() {
        
        this.f(this.newValue)
    }

    /**
     * This method is called by jTPS when a transaction is undone.
     */
    undoTransaction() {
       
        this.f(this.oldValue)
    }
}

export default transaction_ListNameChange