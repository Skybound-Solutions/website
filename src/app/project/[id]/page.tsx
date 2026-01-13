"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc, collection, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";
import { Project, Invoice } from "@/models";
import withAuth from "@/components/auth/withAuth";

const ProjectPage = () => {
  const params = useParams();
  const projectId = params.id as string;
  const [project, setProject] = useState<Project | null>(null);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [newInvoiceTitle, setNewInvoiceTitle] = useState("");

  useEffect(() => {
    if (projectId) {
      const projectRef = doc(db, "projects", projectId);
      getDoc(projectRef).then((docSnap) => {
        if (docSnap.exists()) {
          setProject({ id: docSnap.id, ...docSnap.data() } as Project);
        }
      });

      const invoicesRef = collection(db, "projects", projectId, "invoices");
      const unsubscribe = onSnapshot(invoicesRef, (snapshot) => {
        const invoicesData: Invoice[] = [];
        snapshot.forEach((doc) => {
          invoicesData.push({ id: doc.id, ...doc.data() } as Invoice);
        });
        setInvoices(invoicesData);
      });
      return () => unsubscribe();
    }
  }, [projectId]);

  const handleAddInvoice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (projectId && newInvoiceTitle) {
      const invoicesRef = collection(db, "projects", projectId, "invoices");
      await addDoc(invoicesRef, {
        title: newInvoiceTitle,
        status: "Draft",
        createdAt: serverTimestamp(),
        lineItems: [],
        dueDate: null,
      });
      setNewInvoiceTitle("");
    }
  };

  if (!project) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen flex">
      <aside className="w-64 bg-gray-800 p-6 border-r border-gray-700">
        <h1 className="text-2xl font-bold mb-8">Project Manager</h1>
        <nav>
          <ul>
            <li>
              <a href="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">
                Projects
              </a>
            </li>
            {/* Add more navigation links here */}
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-10">
        <header className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">{project.name}</h2>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            View on GitHub
          </a>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Project Description</h3>
            <p>{project.description}</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Invoices</h3>
            <form onSubmit={handleAddInvoice} className="mb-6">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={newInvoiceTitle}
                  onChange={(e) => setNewInvoiceTitle(e.target.value)}
                  placeholder="New Invoice Title"
                  className="flex-grow bg-gray-700 border border-gray-600 rounded-md py-2 px-3"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
                >
                  Add Invoice
                </button>
              </div>
            </form>

            <ul>
              {invoices.map((invoice) => (
                <li key={invoice.id} className="border-b border-gray-700 py-2">
                  <span>{invoice.title}</span>
                  <span className="ml-4 text-gray-400">{invoice.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default withAuth(ProjectPage);
