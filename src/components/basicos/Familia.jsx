import React, { cloneElement } from "react";

export default props =>{

         {/* <FamiliaMembro nome="Aurora" sobrenome={props.sobrenome}></FamiliaMembro>
          <FamiliaMembro nome="Ricardo" {...props}></FamiliaMembro>
          <FamiliaMembro nome="Antonia" sobrenome="Joaquina"></FamiliaMembro> */}
         {/*React.cloneElement(props.children, props)*/}
            

    return(
        <div>
            {props.children.map((child, i) => {
                    return cloneElement(child, { ...props, key: i});
                })     
            }
        </div>
    )
}