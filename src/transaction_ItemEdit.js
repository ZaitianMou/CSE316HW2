import jTPS_Transaction from './jTPS_Transaction'

export class transaction_ItemEdit extends jTPS_Transaction {
    constructor(oldDes,oldAss,oldDue,oldCom,des,ass,due,com,whetherCreate,f) {
        super();
        this.oldDes=oldDes;
        this.oldAss=oldAss;
        this.oldDue=oldDue;
        this.oldCom=oldCom;
        this.des=des;
        this.ass=ass;
        this.due=due;
        this.com=com;
        this.whetherCreate=whetherCreate
        this.f=f;

    }
    /**
     * This method is called by jTPS when a transaction is executed.
     */
    doTransaction() {
        this.f(this.oldDes,this.oldAss,this.oldDue,this.oldCom,this.des,this.ass,this.due,this.com,this.whetherCreate);
    }

    /**
     * This method is called by jTPS when a transaction is undone.
     */
    undoTransaction() {
        this.f(this.oldDes,this.oldAss,this.oldDue,this.oldCom,this.des,this.ass,this.due,this.com,this.whetherCreate)
    }
}

export default transaction_ItemEdit