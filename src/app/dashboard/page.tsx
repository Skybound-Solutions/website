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
    <div className="bg-gray-900 text-white min-h-screen flex">
      <aside className="w-64 bg-gray-800 p-6 border-r border-gray-700">
        <h1 className="text-2xl font-bold mb-8">Project Manager</h1>
        <nav>
          <ul>
            <li>
              <a href="/dashboard" className="block py-2 px-4 rounded bg-gray-700">
                Projects
              </a>
            </li>
            {/* Add more navigation links here */}
          </ul>
        </nav>
        <div className="absolute bottom-6 left-6">
          <button
            onClick={handleSignOut}
            className="w-full text-left py-2 px-4 rounded hover:bg-gray-700"
          >
            Sign Out
          </button>
        </div>
      </aside>

      <main className="flex-1 p-10">
        <header className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Projects</h2>
          <button
            onClick={handleSyncProjects}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            Sync with GitHub
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-blue-500/50 transition"
            >
              <h3 className="text-xl font-bold mb-4">
                <a href={`/project/${project.id}`} className="hover:underline">
                  {project.name}
                </a>
              </h3>
              <div>
                <select
                  value={project.status}
                  onChange={(e) =>
                    handleStatusChange(project.id, e.target.value as ProjectStatus)
                  }
                  className="bg-gray-700 border border-gray-600 rounded-md py-2 px-3 w-full"
                >
                  <option value="Discovery">Discovery</option>
                  <option value="Proposal">Proposal</option>
                  <option value="In Progress">In Progress</option>
                  <option value="On Hold">On Hold</option>
                  <option value="Completed">Completed</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

// export default Dashboard;
export default withAuth(Dashboard);
