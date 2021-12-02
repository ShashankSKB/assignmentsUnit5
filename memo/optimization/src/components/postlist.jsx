import "./posts.css"

function PostList( {list})
{

  

    console.log(list)
    return (
        <div>
            <h1>POSTS</h1>
            <div>
                {list.map((e)=>(
                    <div className="posts">
                       
                        
                        <div >
                        <div style={{width:"40px",height:"40px",border:"1px solid black"}} id="color_box"></div>
                            title:{e.title}</div>
                       
                        <div>{e.body}</div>
                        <button>Verify</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export {PostList}