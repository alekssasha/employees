import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/empoyees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {

    const data = [
        {name: "Jhon C.", salary: 800, increase: false, key: 1},
        {name: "Alex S.", salary: 3000, increase: true, key: 2},
        {name: "Paul H.", salary: 5000, increase: false, key: 3},
    ]
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
        
    )
}

export default App;