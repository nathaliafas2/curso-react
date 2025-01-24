export default props => {

    const children = Array.isArray(props.children) ? props.children : [];


    const elseChild = children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChildren = children.filter(child => {
        return child !== elseChild
    })

    console.log(elseChild)

    if(props.test){
        return ifChildren
    } else if(elseChild) {
        return elseChild
    } else {
        return false
    }
}

export const Else = props => props.children