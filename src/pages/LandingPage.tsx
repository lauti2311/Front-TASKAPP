import { useEffect, useState } from "react"
import CategoriaSelector from "../components/CategoriaSelector/CategoriaSelector"
import CategoriasTareas from "../components/CategoriasTareas/CategoriasTareas"
import CarouselHome from "../components/carouselHome/CarouselHome"
import { Task } from "../types/Task"
import { TaskService } from "../services/TaskService"

const LandingPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks]= useState<Task[]>([]); //Estado para almacenar tareas filtradas
  const[selectedCategory, setSelectedCategory]= useState<string>('');//Estado para la categoria seleccionada

  useEffect(()=>{
    const fetchTasks = async () =>{
      const tasksData = await TaskService.getAllTasks();
      setTasks(tasksData);
    };

    fetchTasks();
  },[]);

  //Efecto para filtrar las tareas cuando se selecciona una categoria

  useEffect(() =>{
    if(selectedCategory){
      const filtered = tasks.filter(task => task.estado.toUpperCase()===selectedCategory.toUpperCase());
      setFilteredTasks(filtered);
    }else{
      setFilteredTasks(tasks); //Si no hay categoria seleccionada, mostrar todas las tareas
    }
  },[selectedCategory,tasks]);
  
  return (
    <>
        <CarouselHome/>
        <CategoriaSelector onSelectedCategory={setSelectedCategory}/>
        <CategoriasTareas tasks={filteredTasks.length > 0 ? filteredTasks : tasks}/>
    </>
  )
}

export default LandingPage