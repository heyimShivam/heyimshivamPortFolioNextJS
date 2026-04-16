import LandingComponent from "../../components/LandingComponent";
import NavbarComponent from "../../components/NavbarComponent";

export default function Home() {
  return (
    <div className="relative">
      <NavbarComponent />
      <LandingComponent />
    </div>
  );
}
