function List(props) {
  const category = props.category;
  const itemList = props.item;
  const listItem = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: <b>{item.calories}</b>
    </li>
  ));

  //   return (
  //     <>
  //     <br />
  //       <h3>{category}</h3>
  //       <ul>{listItem}</ul>
  //     </>
  //   );

  return listItem.length > 0 ? (
    <div className = "">
      <h2>{category}</h2> <ol>{listItem}</ol>
    </div>
  ) : (
    <p>no fruits added.</p>
  );
}

export default List;
