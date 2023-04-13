import "./WildersList.css";
import WilderCard from "./WilderCard";

import { useWilders } from "../contexts/WildersContext";

export default function WildersList() {
  const { wilders } = useWilders();

  return (
    <main className="container">
      <h2>Wilders</h2>
      <section className="card-row">
        {wilders.map((wilder, index) => (
          <WilderCard key={index} wilder={wilder} />
        ))}
      </section>
    </main>
  );
}
