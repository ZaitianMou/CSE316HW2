import React, { Component } from 'react'

export class ListDeleteModal extends Component {
    render() {
        return (
            <div className="modal-wrapper"
                style={{
                    //transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    //opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Modal Header</h3>
                </div>
                <div className="modal-body">
                </div>
                <div className="modal-footer">
                </div>
            </div>
        )
    }

}

export default ListDeleteModal