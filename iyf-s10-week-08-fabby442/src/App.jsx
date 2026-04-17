function App() {
  const name = "Fabian alvin";
  const today = new Date();
  const hour = today.getHours();

  let greeting;
  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <div>
      <h1>Hello, {name} 👋</h1>

      <p>I am learning React and building real projects.</p>
      <p>I enjoy coding and creating interactive web apps.</p>
      <p>My goal is to become a strong frontend developer.</p>

      <p>Today's date: {today.toDateString()}</p>

      <p>{greeting}, welcome back!</p>
    </div>
  );
}

export default App;