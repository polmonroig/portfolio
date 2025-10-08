export const Post = (props) => {

    //<a href={this.props.url}>
    //  <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Post at dev.to" height="40" width="40"></img>
    //</a>
    const tags = props.tags;
    return (
        <>
            <div id="post">
                <button  className="meta_button" onClick={props.mainMenu}>
                    Back
                </button>
                <a href={props.url}>
                    <button className="meta_button">
                        Dev.to
                    </button>
                </a>
                <div id="post_title" >
                    {props.title}
                </div>
                <div className={"mx-auto mb-4"}>
                    {tags.map((tagName: string) => (
                        <span className="tag noselect" key={tagName}>
                      {tagName}
                </span>
                    ))}
                </div>
                <div id="post_text" dangerouslySetInnerHTML={{__html: props.content}}></div>
            </div>
        </>
    );


};


export const PostHeader = (props) => {
    return (
        <>
            <div className="post_header" onClick={props.onClick}>
                <h2 className={"text-xl font-bold"}>{props.title}</h2>
                <p>{props.content}</p>
                <b>Date </b>{props.date}<br/>
                <b>Comments </b> {props.comments}
                <b> Reactions </b> {props.reactions}
            </div>
        </>
    )
}