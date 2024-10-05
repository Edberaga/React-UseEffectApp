import { Container } from "react-bootstrap"

const Home = () => {
  return (
    <Container className="text-center py-5">
        <h1>Welcome to Your Simple To-Do App!</h1>
        <p>
            Stay organized and manage your tasks effortlessly with this easy-to-use To-Do list application.<br/> 
            Simply enter your tasks, track their progress, and mark them as complete.
        </p>
    </Container>
  )
}

export default Home