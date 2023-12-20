import Header from "./Header";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer";
import "../style/MainApp.scss"

export default function MainApp() {
  return (
    <div id="main-app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
