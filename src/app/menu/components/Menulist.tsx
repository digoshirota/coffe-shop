import MenuItem from '../components/MenuItem';

const menuData = [
  { name: "Wild Mushroom Arancini", description: "Ricotta, goat cheese, beetroot and dateline.", price: "$15.00" },
  { name: "Truffle Mushroom Risotto", description: "Ricotta, goat cheese, beetroot and dateline.", price: "$15.00" },
  { name: "Braised Short Ribs", description: "Ricotta, goat cheese, beetroot and dateline.", price: "$15.00" },
  { name: "Honey Glazed Salmon", description: "Ricotta, goat cheese, beetroot and dateline.", price: "$15.00" },
  { name: "Mediterranean Quinoa Salad", description: "Ricotta, goat cheese, beetroot and dateline.", price: "$15.00" },
  { name: "Roasted Vegetable Platter", description: "Ricotta, goat cheese, beetroot and dateline.", price: "$15.00" },
];

export default function MenuList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container">
      {menuData.map((item, idx) => (
        <MenuItem key={idx} {...item} />
      ))}
    </div>
  );
}
