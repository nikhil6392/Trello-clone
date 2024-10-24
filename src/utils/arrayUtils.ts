interface item {
    id:string
}

//We are using Generic type T that will extend item

export const findItemIndexById = <T extends item >(items: T[], id:string)=>{
    return items.findIndex((item:T) => item.id === id)
}

/**
 * @overrideItemAtIndex is type T
 * @T is a new item
 * @targetIndex is type of number and is also a parameter
 */
export function overrideItemAtIndex<T>(
    array:T[],
    newItem:T,
    targetIndex:number
){
    return array.map((item,index) =>{
        if(index !== targetIndex){
            return item
        }
        return newItem
    })
}