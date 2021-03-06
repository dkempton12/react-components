import "./App.css";

import Container from "./components/Layout/Container/Container";
import WebsiteHero from "./components/UI/WebsiteHero/WebsiteHero";
import Signup from "./components/Signup/Signup";
import Dropdown from "./components/UI/Dropdown/Dropdown";
import dropdownData from "./components/UI/Dropdown/dropdownData";
import Accordion from "./components/UI/Accordion/Accordion";

function App() {
  return (
    <div className="App">
      <WebsiteHero bg_color="blue" text_color="white" />
      <Container>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        <Signup />

        <Dropdown data={dropdownData} label="Country" />

        <Accordion accordionHeading="Learn More">
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
          </ul>
        </Accordion>
      </Container>
    </div>
  );
}

export default App;
