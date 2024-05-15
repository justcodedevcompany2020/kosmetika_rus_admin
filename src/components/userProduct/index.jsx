import { Item } from "./item"

export const UserProduct = ({ data }) => {
    if (Array.isArray(data)) {
        return <div className="UserProduct">
            {data?.map((elm, i) => {
                return <Item
                    data={elm.product}
                    product={elm}
                    key={i} last={i + 1 == data.length} />
            })}
        </div>
    }
    else {
        return <div className="UserProduct">
            <Item
                data={data.product}
                product={data}
                last={true} />
        </div>
    }
}