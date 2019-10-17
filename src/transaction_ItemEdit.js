import jTPS_Transaction from './jTPS_Transaction'

export class transaction_ItemEdit extends jTPS_Transaction {
    constructor(oldDes,oldAss,oldDue,oldCom,des,ass,due,com,f) {
        this.oldDes=oldDes;
        this.oldAss=oldAss;
        this.oldDue=oldDue;
        this.oldCom=oldCom;
        this.des=des;
        this.ass=ass;
        this.due=due;
        this.com=com;
        this.f=f;

    }
    /**
     * This method is called by jTPS when a transaction is executed.
     */
    doTransaction() {
        this.f("","","","",this.des,this.ass,this.due,this.com);
    }

    /**
     * This method is called by jTPS when a transaction is undone.
     */
    undoTransaction() {
        this.f(this.oldDes,this.oldAss,this.oldDue,this.oldCom)
    }
}

export default transaction_ItemEdit