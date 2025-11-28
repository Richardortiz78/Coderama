import { Outlet} from "react-router-dom";


export const AdminLayout = () => {
    return(
        <div className="admin-layout">
      <h1>Panel de Administración</h1>
      <Outlet />
    </div>
)
}