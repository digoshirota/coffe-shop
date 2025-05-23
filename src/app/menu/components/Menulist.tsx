import MenuItem from '../components/MenuItem';

const menuData = [
  { name: "Wild Mushroom Arancini", description: "Ricotta, goat cheese, beetroot and dateline.", price: "$15.00", image:"/images/Masala.png" },
  { name: "Truffle Mushroom Risotto", description: "Ricotta, goat cheese, beetroot and dateline.", price: "$15.00", image:"/images/Masala.png" },
  { name: "Braised Short Ribs", description: "Ricotta, goat cheese, beetroot and dateline.", price: "$15.00", image:"/images/Masala.png" },
  { name: "Honey Glazed Salmon", description: "Ricotta, goat cheese, beetroot and dateline.", price: "$15.00", image:"/images/Masala.png" },
  { name: "Mediterranean Quinoa Salad", description: "Ricotta, goat cheese, beetroot and dateline.", price: "$15.00", image:"/images/Masala.png" },
  { name: "Roasted Vegetable Platter", description: "Ricotta, goat cheese, beetroot and dateline.", price: "$15.00", image:"/images/Masala.png" },
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
