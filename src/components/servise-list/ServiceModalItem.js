import React from 'react';

function ServiceModalItem(props) {
    const{_id,name,cost,quantity}=props
    return (
        <li className={'collection-item'}>
            {name} soni :   <b>{quantity}</b> ta
            <span className={'secondary-content service-modal-delete'}>
                <i className={'material-icons'}>delete_forever</i>
            </span>
        </li>
    );
}

export default ServiceModalItem;