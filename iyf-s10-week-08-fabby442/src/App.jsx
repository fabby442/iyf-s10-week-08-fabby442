import Header from "./components/Header";
import Footer from "./components/Footer";
import PostCard from "./components/PostCard";
import Sidebar from "./components/Sidebar";
import Button from "./components/Button";

function App() {
  const posts = [
    {
      id: 1,
      title: "Learning React",
      excerpt: "React makes building UIs easier...",
      author: "Fabby",
      date: "April 17, 2026"
    },
    {
      id: 2,
      title: "JavaScript Tips",
      excerpt: "Write cleaner and smarter JS...",
      author: "Fabby",
      date: "April 16, 2026"
    },
    {
      id: 3,
      title: "Frontend Journey",
      excerpt: "My journey into web development...",
      author: "Fabby",
      date: "April 15, 2026"
    }
  ];

  return (
    <div>
      <Header />

      <main>
        <h2>Welcome to CommunityHub</h2>

        {posts.map(post => (
          <PostCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            author={post.author}
            date={post.date}
          />
        ))}

        <Sidebar />
        <Button />
      </main>

      <Footer />
    </div>
  );
}
export default App;