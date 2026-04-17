import Header from "./components/Header";
import Footer from "./components/Footer";
import PostCard from "./components/PostCard";
import Sidebar from "./components/Sidebar";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Header />

      <main>
        <h2>Welcome to my Hub</h2>

        <PostCard />
        <PostCard />

        <Sidebar />

        <Button />
      </main>

      <Footer />
    </div>
  );
}

export default App;