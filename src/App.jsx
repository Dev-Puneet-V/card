import CoffeeCard from "./components/CoffeeCard";

const coffeeItems = [
  {
    id: 1,
    name: "Cappuccino",
    price: 255,
    rating: 4.5,
    reviews: 9,
    description:
      "Rich flavors of bold espresso smoothly blended with steamed milk, creating a velvety texture that's both satisfying and comforting.",
    image:
      "https://s.yimg.com/zb/imgv1/3f736b22-676a-361c-8108-db789b27d857/t_500x300",
    preparationTime: 15,
    customizable: true,
    veg: true,
  },
];

export default function App() {
  return (
    <div className="p-4">
      {coffeeItems.map((item) => (
        <CoffeeCard
          key={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
          description={item.description}
          customizable={item.customizable}
          veg={item.veg}
          preparationTime={item.preparationTime}
        />
      ))}
    </div>
  );
}
