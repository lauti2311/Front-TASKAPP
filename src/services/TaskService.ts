import { Task } from "../types/Task";

const BASE_URL = "http://localhost:3000/tasks"
//Fetch realiza solicitudes http a un sv fetch(url,options)
//una promesa es un objeto de js que representa la finalizacion o fallo de una actividad asincronica
//Llama a todas las task
export const TaskService = {
    getAllTasks: async():Promise<Task[]>=>{
        const response =await fetch(`${BASE_URL}`);
        const data = await response.json();
        return data;
    },
//Llama a una task en concreto
    getOneTask: async(id: number):Promise<Task> =>{
        const response = await fetch (`${BASE_URL}/${id}`);
        const data = await response.json();
        return data;
    },
    //Obtener una tarea
    getTasksInCategory: async(category:string):Promise<Task[]>=>{
        const response = await fetch(`${BASE_URL}?estado=${category}`);
        const data = await response.json();
        return data;
    },
    //Borrar tarea
    deleteTask: async (id:number): Promise<void>=>{
        await fetch(`${BASE_URL}/${id}`,{
            method: 'DELETE',
        });
    },
    //Actualizar tarea
    updateStateTask: async (id:number, newState: string): Promise<Task>=>{
        return fetch (`${BASE_URL}/${id}`,
        {
            method:'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                estado:newState
            })
        })
        .then(rest=>rest.json())
        .then(json=> {
            return json;
        })
        .catch(error => error);
        
    },
    //Crear tarea
    createTask: async(task:Task): Promise<Task>=>{
        const response= await fetch(`${BASE_URL}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(task)
        });

        const data=await response.json();
        return data;
    }
}