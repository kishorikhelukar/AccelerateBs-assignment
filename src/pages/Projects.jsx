import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

function ProjectList({ project, index, removeProject }) {
  return (
    <div className="project">
      {/* <a href="/tasks">
        <span>{project.text}</span>
      </a> */}
      <Link to={`/tasks/${project.id}`}>{project.text}</Link>
      <div>
        {/* <Button variant="outline-success" onClick={() => markProject(index)}>
          ✓
        </Button>{" "} */}
        <Button variant="outline-danger" onClick={() => removeProject(index)}>
          ✕
        </Button>
      </div>
    </div>
  );
}

function ProjectForm({ addProject }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addProject(value, nanoid(2));
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Projects</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new project"
        />
      </Form.Group>
      <Button variant="primary mb-5 mt-3" type="submit">
        Submit
      </Button>
    </Form>
  );
}

function Projects() {
  const [projects, setProjects] = React.useState([
    {
      id: nanoid(2),
      text: "This is a sampel project",
      isDone: false,
    },
  ]);

  const addProject = (text, id) => {
    const newTodos = [...projects, { text, id }];
    console.log(newTodos);
    setProjects(newTodos);
    localStorage.setItem("projects", JSON.stringify(newTodos));
  };

  //   const markProject = (index) => {
  //     const newTodos = [...projects];
  //     newTodos[index].isDone = true;
  //     setProjects(newTodos);
  //   };

  const removeProject = (index) => {
    const newTodos = [...projects];
    newTodos.splice(index, 1);
    setProjects(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Project List</h1>
        <ProjectForm addProject={addProject} />
        <div>
          {projects.map((project, index) => (
            <Card key={index} className="my-4">
              <Card.Body>
                <ProjectList
                  index={index}
                  project={project}
                  //   markProject={markProject}
                  removeProject={removeProject}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
