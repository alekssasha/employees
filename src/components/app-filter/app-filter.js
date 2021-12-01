import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <buttun 
                className="btn btn-light"
                type="button">
                    Все сотрудники
            </buttun>

            <buttun 
                className="btn btn-outline-light"
                type="button">
                    На повышение
            </buttun>

            <buttun 
                className="btn btn-outline-light"
                type="button">
                    З/П больше 1000$
            </buttun>
        </div>
    )
}

export default AppFilter;