import { useParams } from "react-router";

export default function ProjectDynamic() {
  const { projectId } = useParams();
  return <div>This is the project {projectId}</div>;
}
