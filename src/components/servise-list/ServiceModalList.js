import React from 'react';
import ServiceModalItem from "./ServiceModalItem";
import  './ServiceModal.css'
function ServiceModalList(props) {
    const {order ,decQuantity,incQuantity}=props
    return (
        <div className={'service-modal-list-style'}>
            <ul className={'collection service-modeal-list'}>
                <li className={'collection-item active'} >
                    Service
                </li>
                {order.length?order.map(item=>{
                    return(
                        <ServiceModalItem key={item._id}{...item}
                                          removeServiceModal={props.removeServiceModal}
                                          decQuantity={decQuantity}
                                          incQuantity={incQuantity}
                        />
                    )
                }):<li className={'collection-item'}>Service hizmatlari qo'shilmagan! </li>
                }
                {/*<li className={'collection-item active'}>*/}
                {/*    Total:*/}
                {/*</li>*/}
                <i className={'material-icons service-modal-icon'} onClick={props.handleServiceShow}> close</i>
            </ul>
        </div>
    );
}

export {ServiceModalList};