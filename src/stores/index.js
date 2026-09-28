import { defineStore } from "pinia";
import config from "@/utils/firebase.config.js";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseApp = initializeApp(config.firebaseConfig);
const db = getFirestore(firebaseApp);

const projectsCollection = "projects";
const skillsCollection = "skills";

export const useDataStore = defineStore("data", {
  state: () => ({
    projects: [],
    skills: [],
  }),
  actions: {
    async getProjects() {
      this.projects = [];
      const querySnapshot = await getDocs(collection(db, projectsCollection));
      querySnapshot.forEach((snapshot) => {
        this.projects.push({ ...snapshot.data(), id: snapshot.id });
      });
      this.projects.sort((a, b) => b.date_published - a.date_published);
    },
    async getSkills() {
      this.skills = [];
      const querySnapshot = await getDocs(collection(db, skillsCollection));
      querySnapshot.forEach((snapshot) => {
        this.skills.push({ ...snapshot.data(), id: snapshot.id });
      });
    },
  },
});
