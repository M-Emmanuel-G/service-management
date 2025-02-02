import SideBar from "../SideBar/sideBar";

const Header = () => {
    return ( 
    <header className="w-full h-[10%] flex items-center justify-between px-4 bg-[#656565] rounded-b-xl">
        <div>
            <span className={`text-[#ffffff] text-2xl`}>Logotipo/Empresa</span>
        </div>
        <SideBar/>
    </header> 
);
}
 
export default Header;