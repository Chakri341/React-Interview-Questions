import Counter from "../components/CounterApp/Counter";
import DropdownMenu from "../components/DropdownMenu/Counter";
import Fetch from "../components/Fetch Api/Counter";
import Search from "../components/Search/Search";
import TodoApp from "../components/TodoApp/Todo";
import Tabs from "../components/TabComponent/Counter";
import Toggle from "../components/Toggle Switch/Counter";
import Modal from "../components/Modal/Counter";
import App from "../components/ContextApi/App";
import ReduxApp from "../components/ReduxToolKit/App";

export const projects = [
    { name: "Create a Counter Component", component: Counter },
    { name: "Implement a Toggle Switch", component: Toggle },
    { name: "Build a To-Do List", component: TodoApp },
    { name: "Fetch Data from an API", component: Fetch },
    { name: "Create a Search Bar", component: Search },
    { name: "Build a Dropdown Menu", component: DropdownMenu },
    { name: "Implement a Tabs Component", component: Tabs },
    { name: "Create a Modal Component", component: Modal },
    { name: "Build a Carousel Component", component: TodoApp },
    { name: "Implement a Star Rating Component", component: TodoApp },
    { name: "Create a Real-Time Search Filter", component: TodoApp },
    { name: "Build a Multi-Step Form", component: TodoApp },
    { name: "Implement a Virtualized List", component: TodoApp },
    { name: "Create a Reusable Form Component with Validation", component: TodoApp },
    { name: "Implement a Dynamic Form with Field Arrays", component: TodoApp },
    { name: "Implement a Context API for Global State", component: App },
    { name: "Cart Using Redux Tool Kit", component: ReduxApp },
    { name: "Create a Custom Hook", component: TodoApp },
    { name: "Build a Todo List with Drag-and-Drop", component: TodoApp },
    { name: "Create a Countdown Timer", component: TodoApp },
    { name: "Implement Formik with Yup Validation", component: TodoApp },
  ];
  