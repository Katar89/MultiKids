export function SidebarCardContainer({userName, name, isFollowing}){
const imageSrc ="https://unavatar.io/x/${userName}"  
return(
<header className="tw-followCardContainer">
    <img className="tw-followCardContainer-avatar"
    alt="avatar"src={imageSrc}>

    </img>
<div className="tw-followCardContainer-info">
    <h2 className="tw-followCardContainer-name">Docente Yaneth Perez</h2>
    <h3 className="tw-followCardContainer-correo">correo@ejemplo.com</h3>
</div>
</header>
)
}