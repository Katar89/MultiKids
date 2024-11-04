export function SidebarCard({userName, name,}){
const imageSrc ="https://unavatar.io/x/${userName}"    
    return(
        <div className="tw-followCardBackground">
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar"
            alt="avatar"src={imageSrc}></img>
        <div className="tw-followCard-info">
            <strong>{name}</strong>
            <span className="tw-followCard-infoUserName">{userName}</span>
        </div>
        </header>

        <aside>
            <button className="tw-followCard-button">
                Hablar
            </button>
        </aside>
    </article>
    </div>
  
    )
}