import EditTaskComponent from "./EditTaskComponent"
interface AsideComponentProps {
  asideVisible: boolean,
  hideAside: any
}

export default function AsideComponent({asideVisible, hideAside}:AsideComponentProps) {
  return (
    <div className={asideVisible ? "aside" : "hide"}>
      <i className="bi bi-x-square-fill close-aside" onClick={() => {
        hideAside();
      }}></i>
      <EditTaskComponent 
        task={{id: 0, text:'Be happy', done: false}}

      />
    </div>
  )
}