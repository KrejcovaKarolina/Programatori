import programmersData from '../programmersData'
import { useState, useEffect } from 'react'
import './Home.css'

const Home = () => {
  const [activeTab, setActiveTab] = useState('programmers')
  const [programmers, setProgrammmers] = useState(programmersData)
  const [validToAdd, setValidToAdd] = useState(false)
  const [validTask, setValidTask] = useState(false)
  const junior = programmers.filter((programmer) => programmer.level === 'junior').length
  const senior = programmers.filter((programmer) => programmer.level === 'senior').length
  const [newProgrammer, setNewProgrammer] = useState({
    id: programmers.length > 0 ? Math.max(...programmers.map((programmer) => programmer.id)) + 1 : 1,
    firstname: '',
    lastname: '',
    level: '',
  })
  const [tasks, setTasks] = useState({
    rows: '',
    days: '',
  })

  const deleteProgrammerHandle = (id) => {
    const filterProgrammers = programmers.filter((programmer) => {
      return programmer.id !== id
    })
    setProgrammmers(filterProgrammers)
    validateTasksData(tasks)
  }

  const validateAddProgrammerData = (programmer) => {
    if (programmer.firstname.trim().length === 0) {
      return setValidToAdd(false)
    } else if (programmer.lastname.trim().length === 0) {
      return setValidToAdd(false)
    } else if (programmer.level === '') {
      return setValidToAdd(false)
    }
    setValidToAdd(true)
  }

  const changeAddProgrammerHandle = (e) => {
    const updateProgrammer = { ...newProgrammer, [e.target.name]: e.target.value }
    setNewProgrammer(updateProgrammer)
    validateAddProgrammerData(updateProgrammer)
  }

  const addProgrammerHandle = () => {
    setProgrammmers((programmers) => {
      return [...programmers, newProgrammer]
    })
    setNewProgrammer({
      id: newProgrammer.id + 1,
      firstname: '',
      lastname: '',
      level: '',
    })
    setValidToAdd(false)
    validateTasksData(tasks)
    document.querySelectorAll('input[name=level]').forEach((radioInput) => {
      radioInput.checked = false
    })
  }

  const validateTasksData = (task) => {
    if (task.rows === '' || parseInt(task.rows) <= 0) {
      return setValidTask(false)
    } else if (task.days === '' || parseInt(task.days) <= 0) {
      return setValidTask(false)
    } else if ((junior * 100 + senior * 200) * task.days < task.rows) {
      return setValidTask(false)
    }
    setValidTask(true)
  }

  useEffect(() => {
    validateTasksData(tasks)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [programmers])

  const changeTasksHandler = (e) => {
    const updateTasks = { ...tasks, [e.target.name]: e.target.value }
    setTasks(updateTasks)
    validateTasksData(updateTasks)
  }

  const addTaskHandle = () => {
    setTasks({
      rows: '',
      days: '',
    })
    setValidTask(false)
    window.alert('Práce úspěšně naplánovaná')
  }

  return (
    <div className="page">
      <div className="tabs">
        <button
          name="programmers"
          data-activ={activeTab}
          onClick={() => {
            setActiveTab('programmers')
          }}
        >
          Programátoři
        </button>
        <button
          name="tasks"
          data-activ={activeTab}
          onClick={() => {
            setActiveTab('tasks')
          }}
        >
          Úkoly
        </button>
      </div>
      {activeTab === 'programmers' && (
        <div className="tab-programmers">
          {programmers.map((programmer) => {
            const { id, firstname, lastname, level } = programmer

            return (
              <div className="persons" key={id}>
                {firstname} {lastname}, {level}
                <button
                  onClick={() => {
                    deleteProgrammerHandle(id)
                  }}
                >
                  ×
                </button>
              </div>
            )
          })}
          <form>
            <input type="text" name="firstname" placeholder="Jméno" value={newProgrammer.firstname} onChange={changeAddProgrammerHandle} />
            <input type="text" name="lastname" placeholder="Příjmení" value={newProgrammer.lastname} onChange={changeAddProgrammerHandle} />
            <label>
              <input type="radio" name="level" value="junior" onChange={changeAddProgrammerHandle} />
              Junior
            </label>
            <label>
              <input type="radio" name="level" value="senior" onChange={changeAddProgrammerHandle} />
              Senior
            </label>
            <button className="btn-add" disabled={!validToAdd} style={{ backgroundColor: validToAdd ? '#038982' : 'gray' }} onClick={addProgrammerHandle}>
              Přidat programátora
            </button>
          </form>
        </div>
      )}
      {activeTab === 'tasks' && (
        <div className="tab-tasks">
          <h2>Plánování úkolů</h2>
          <p>
            Junior programátoři: {junior}
            <br />
            Senior programátoři: {senior}
          </p>
          <form>
            <input type="number" name="rows" placeholder="Vlož počet řádků" value={tasks.rows} onChange={changeTasksHandler} />
            <input type="number" name="days" placeholder="Vlož časový limit (dny)" value={tasks.days} onChange={changeTasksHandler} />
            <button disabled={!validTask} style={{ backgroundColor: validTask ? 'green' : 'darkred' }} onClick={addTaskHandle}>
              Naplánovat práci
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Home
