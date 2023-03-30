import "./post.css"

function Post() {
  return (
    <div className='post'>
        <img className="postImg" src="https://images.pexels.com/photos/4458564/pexels-photo-4458564.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span          className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet.</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptates nesciunt labore accusamus quam architecto maxime libero repudiandae, amet quisquam quae rerum dicta omnis, officia eaque pariatur mollitia, fuga nihil Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum aliquam iure quis! Quasi aperiam nemo totam. Consequuntur fuga quaerat architecto?.</p>
    </div>
  )
}

export default Post