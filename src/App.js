import './App.css';
import Menu from "./Components/Menu/Menu";
import Logo from "./Components/Logo/Logo";
export function App() {

    const logo = new URL('./assets/logo.svg', import.meta.url);

    return (
    <>
      <h1>Parcel React App</h1>
        <Logo title="Weather by VicBox" url={logo} />
        <Menu items={[
            { name: "Github", link: "/" },
            { name: "About", link: "#about"}
        ]}/>
      <p>Edit <code>src/App.tsx</code> to get started!</p>
    </>
  );
}
