import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props =>{

    return(
        <div>
            <FamiliaMembro nome="Aurora" sobrenome={props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome="Ricardo" {...props}></FamiliaMembro>
            <FamiliaMembro nome="Antonia" sobrenome="Joaquina"></FamiliaMembro>
        </div>
    )
}