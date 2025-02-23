import { BrowserRouter } from "react-router-dom";
import { base_path } from "./environment";
import ScrollToTop from "./components/Global/ScrollToTop";
import Routes from "./routes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style/css/feather.css";
import "./index.scss";
import "./style/icon/boxicons/boxicons/css/boxicons.min.css";
import "./style/icon/weather/weathericons.css";
import "./style/icon/typicons/typicons.css";
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "./style/icon/ionic/ionicons.css";
import "./style/icon/tabler-icons/webfont/tabler-icons.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <BrowserRouter basename={base_path}>
      <ScrollToTop>
        <Routes />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
