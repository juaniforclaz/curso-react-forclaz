import { useEffect, useState } from "react"
import { Item } from "../Item/Item"

export const ItemList = ({ items }) => {

    return (
        <div className="container">
            <div className="row gap-1">
                
                    {
                        items.map((item) => < Item key={item.id} item={item} />)
                    }
            
            </div>
        </div>
    )

}