import SideBar from "../SideBar/sideBar";

interface HeaderProps{
    pageName: string
}

const Header = (params:HeaderProps) => {
    return ( 
    <header className="w-full h-[10%] flex items-center justify-between px-4 bg-[#656565] rounded-b-xl">
        <div>
            <span className={`text-[#ffffff] text-2xl`}>Controle</span>
            <strong>{params.pageName}</strong>
        </div>
        <SideBar/>
    </header> 
);
}
 
export default Header;