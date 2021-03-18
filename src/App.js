import "./App.css";
import ProjectCard from "./ProjectCard";
import NavBar from "./NavBar";
import aStarGif from "./astar-gif.gif";
import aStarImg from "./astar-img.PNG";

function App() {
  return (
    <main>
      {/* <Navbar /> */}
      <div className="container">
        <NavBar />
        <h1>Cameron Adams</h1>
        <h2>SOFTWARE ENGINEER</h2>

        <h1>Projects</h1>

        <section className="cards">
          <ProjectCard img={aStarImg} gif={aStarGif} title={"Pathfinding visualization"}/>

          <ProjectCard />
          <ProjectCard />
          {/* <Card
            image={"https://picsum.photos/641/356"}
            title={"Lorem, ipsum dolor."}
            info={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet?"
            }
          />*/}
        </section>

        <section className="experience">About coming soon!</section>
        <section className="contact">
          Experience coming soon! <br></br> (camsoftware2@gmail.com)
        </section>
      </div>
    </main>
  );
}

export default App;
