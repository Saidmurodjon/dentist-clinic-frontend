import React from 'react';
import ServiceModalItem from "./ServiceModalItem";
import  './ServiceModal.css'
function ServiceModalList(props) {
    const {order}=props
    return (
        <ul className={'collection service-modeal-list'}>
            <li className={'collection-item active'} >
                Service
            </li>
            {order.length?order.map(item=>{
            return(
                <ServiceModalItem key={item._id}{...item}/>
            )
            }):<li className={'collection-item'}>Service hizmatlari qo'shilmagan! </li>
            }
            {/*<li className={'collection-item active'}>*/}
            {/*    Total:*/}
            {/*</li>*/}
            <i className={'material-icons service-modal-icon'} onClick={props.handleServiceShow}> close</i>
        </ul>
    );
}

export {ServiceModalList};