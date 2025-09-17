
function List(props){
    const items = props.items;

    const itemList = items.map((item) => {
        return <li key={item.id}>{item.name}</li>
    });
    return (    
        <ul>
            {itemList}
        </ul>
    )
}

export default List