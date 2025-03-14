import style from './style.module.css';
import { Outlet } from "react-router";
import LeftBar from "../../components/LeftBar";
import TopBar from '../../components/TopBar';


const Layout = () => {
    return (
        <div className={style.app}>
            <LeftBar />
            <div className={style.content}>
                <TopBar />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout