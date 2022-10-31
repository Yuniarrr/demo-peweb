import { defineStore } from "pinia";
import { initializeApp,  } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDocs, onSnapshot, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzBXzBWzXKxfR9K_aWAK_MEhlgKXh86-Q",
  authDomain: "try-vue-92d54.firebaseapp.com",
  projectId: "try-vue-92d54",
  storageBucket: "try-vue-92d54.appspot.com",
  messagingSenderId: "462401837028",
  appId: "1:462401837028:web:06e4fd0293f666de2f99f1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const useTodo = defineStore({
  id: "todo",
  state: () => ({
    category: [
      {
        id: 1,
        name: "Education"
      },
      {
        id: 2,
        name: "Shopping"
      },
      {
        id: 3,
        name: "Work"
      }
    ],
    task: {
      newTask: "",
      newCategory: [],
      newTodo: []
    },
    edit: {
      editTask: "",
      editCategory: [],
    }
  }),
  getters: {},
  actions: {
    async addNewTask() {
      let task = this.task;
      let id = task.newTodo.length;
      await setDoc(doc(db, "todo_list", id.toString()), {
        id: id,
        task: task.newTask,
        category: task.newCategory,
        status: false
      });
      task.newTask = "";
      task.newCategory = [];
    },
    async getNewTasks() {
      let task = this.task;
      // mendapatkan semua doc
      // const querySnapshot = await getDocs(collection(db, "todo_list"));
      // querySnapshot.forEach((doc) => {
      //   task.newTodo.push(doc.data());
      // });
      // mendapatkan hanya yg ditambahkan
      onSnapshot(collection(db, "todo_list"), (querySnapshot) => {
        task.newTodo = [];
        querySnapshot.forEach((doc) => {
          task.newTodo.push(doc.data());
        });
      });
    },
    async updateStatus(id_task) {
      let task = this.task;
      let id = id_task;
      await updateDoc(doc(db, "todo_list", id.toString()), {
        status: !task.newTodo[id].status
      });
    },
    async editTask(id_task) {
      let id = id_task;
      await updateDoc(doc(db, "todo_list", id.toString()), {
        task: this.task.newTodo[id].task,
      });
    },
  },
});