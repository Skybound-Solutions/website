import { Octokit } from "octokit";
import { db } from "@/firebase";
import { writeBatch, doc } from "firebase/firestore";
import { Project } from "@/models";

export const syncGitHubProjects = async (userId: string) => {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  });

  try {
    const { data: repos } = await octokit.rest.repos.listForAuthenticatedUser();
    const batch = writeBatch(db);

    repos.forEach((repo) => {
      const project: Project = {
        id: repo.id.toString(),
        name: repo.name,
        githubUrl: repo.html_url,
        description: repo.description,
        status: "Discovery",
        ownerId: userId,
      };
      const projectRef = doc(db, "projects", project.id);
      batch.set(projectRef, project, { merge: true });
    });

    await batch.commit();
    console.log("Successfully synced projects with Firestore.");
  } catch (error) {
    console.error("Error syncing GitHub projects", error);
  }
};
