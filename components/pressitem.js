const PressItem = ({ content }) => {

    return (
        <div className="menu-item">
            <div className="line-item">
                <div className="line-name">
                    <p className="small">Proj: {content.project}</p>
                </div>
            </div>
            <div className="description">
                <p>{content.description}</p>
            </div>

            <div>
                {content.urlName && <a className="italic small" href={content.url}>{content.urlName}</a>}
            </div>
        </div >
    )
}

export default PressItem