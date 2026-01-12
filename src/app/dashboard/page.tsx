"use client";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import withAuth from "@/components/auth/withAuth";
import { syncGitHubProjects } from "@/lib/github";
import { collection, onSnapshot, query, where, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { Project, ProjectStatus } from "@/models";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const router = useRouter();
  const user = auth.currentUser;
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (user) {
      const q = query(collection(db, "projects"), where("ownerId", "==", user.uid));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const projectsData: Project[] = [];
        querySnapshot.forEach((doc) => {
          projectsData.push({ id: doc.id, ...doc.data() } as Project);
        });
        setProjects(projectsData);
      });
      return () => unsubscribe();
    }
  }, [user]);

  const handleStatusChange = async (projectId: string, newStatus: ProjectStatus) => {
    const projectRef = doc(db, "projects", projectId);
    await updateDoc(projectRef, { status: newStatus });
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  const handleSyncProjects = async () => {
    if (user) {
      await syncGitHubProjects(user.uid);
    }
  };

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <button onClick={handleSignOut}>Sign Out</button>
      <button onClick={handleSyncProjects}>Sync with GitHub</button>

      <h2>Projects</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>
                <a href={`/project/${project.id}`}>{project.name}</a>
              </td>
              <td>
                <select
                  value={project.status}
                  onChange={(e) =>
                    handleStatusChange(project.id, e.target.value as ProjectStatus)
                  }
                >
                  <option value="Discovery">Discovery</option>
                  <option value="Proposal">Proposal</option>
                  <option value="In Progress">In Progress</option>
                  <option value="On Hold">On Hold</option>
                  <option value="Completed">Completed</option>
                  <option value="Archived">Archived</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default withAuth(Dashboard);
