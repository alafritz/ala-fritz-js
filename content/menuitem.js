const MenuItem = ({ content }) => {

    return (
        <div className='menu-item'>
            <div className="line-item">
                <div className="line-name">
                    <h4 className={(content.small && 'h4Small')}>{content.name}</h4>
                </div>
                <div className="line-dots">
                </div>
                <div className="line-price">
                    <h4 className={(content.small && 'h4Small')}>{content.price}</h4>
                </div>
            </div>
            <div className="description">
                <p className={'light ' + (content.small && 'small')}>{content.description}</p>
            </div>

            <div>
                {content.urlName && <a className={(content.small && 'italic small')} href={content.url}>{content.urlName}</a>}
            </div>
        </div >
    )
}


export default MenuItem