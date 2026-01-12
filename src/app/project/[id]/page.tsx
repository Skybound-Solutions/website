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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>

      <h2>Invoices</h2>
      <form onSubmit={handleAddInvoice}>
        <input
          type="text"
          value={newInvoiceTitle}
          onChange={(e) => setNewInvoiceTitle(e.target.value)}
          placeholder="New Invoice Title"
        />
        <button type="submit">Add Invoice</button>
      </form>

      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            {invoice.title} - {invoice.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withAuth(ProjectPage);
