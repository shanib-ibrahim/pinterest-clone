import Image from '../../components/Image';

const Comments = () => {
    return (
        <div className="comments">
            <div className="commentList">
                <span className="commentCount">5 comments</span>
                {/* COMMENT */}
                <div className="comment">
                    <Image path="/general/noAvatar.png" alt="" />
                    <div className="commentContent">
                        <span className="username">John Doe</span>
                        <p className='commentText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut est nulla nemo quaerat recusandae eos voluptatibus facilis, sint aspernatur molestias cum iusto eum suscipit ad architecto iste repellat pariatur saepe.</p>
                        <span className='commentTime'>1h</span>
                    </div>
                </div>
            </div>
            <form className="commentForm">
                <input type="text" placeholder='Add a comment' />
                <div className="emoji">
                    <div>😎</div>
                </div>
            </form>
        </div>
    )
}

export default Comments