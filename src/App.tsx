import AddWilderForm from "./components/AddWilderForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WildersList from "./components/WildersList";
import { WildersProvider } from "./contexts/WildersContext";

export default function App() {
  return (
    <WildersProvider>
      <Header />
      <AddWilderForm />
      <WildersList />
      <Footer />
    </WildersProvider>
  );
}
