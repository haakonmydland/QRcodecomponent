import "./App.css";
import Card from "./Card";
import qrImage from "./assets/image-qr-code.png";

function App() {
  return (
    <div className="App">
      <Card
        image={qrImage}
        title="Improve your front-end skills by building projects"
        body="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
      />
    </div>
  );
}

export default App;
