import React from 'react';

function ServiceModalItem(props) {
    const{_id,name,cost,quantity,decQuantity,incQuantity}=props
    return (
        <li className={'collection-item'}>
            {name} soni :   <b>{quantity}</b> ta
            <span className={'secondary-content service-modal-delete'} >
                <i className={'material-icons text-success'} onClick={()=>incQuantity(_id)}>add_circle</i>
                <i className={'material-icons text-warning'} onClick={()=>decQuantity(_id)}>remove_circle</i>
                <i className={'material-icons text-danger'} onClick={()=>props.removeServiceModal(_id)}>delete_forever</i>
            </span>

        </li>
    );
}

export default ServiceModalItem;